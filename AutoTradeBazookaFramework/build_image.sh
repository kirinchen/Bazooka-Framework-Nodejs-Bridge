export SVC_NAME=$(grep -o "\"name\": \".*\"" package.json | grep -iw name | cut -d: -f2 | sed -e 's/ //g' | sed 's/"//g');
export TAG_NAME=$(grep -o "\"version\": \".*\"" package.json | grep -iw version | cut -d: -f2 | sed -e 's/ //g' | sed 's/"//g');

if [ "${SVC_NAME}" ] && [ "${TAG_NAME}" ]; then 
export IMAGE_NAME="u1156211/${SVC_NAME}:${TAG_NAME}";
echo "service name : ${SVC_NAME}";
echo "tag version : ${TAG_NAME}";
echo "image name : ${IMAGE_NAME}";
docker build -f ./Dockerfile -t "${IMAGE_NAME}" .;
else echo "Can not find version number from package.json";
fi