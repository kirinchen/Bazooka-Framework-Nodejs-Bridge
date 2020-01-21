class ReactiveUtils {
    static shiftRoot(_re: Reactive): RootReactive {
        var re = _re;
        while (!re.isRoot()) {
            re = re.before();
        }
        return re as RootReactive;
    }

    static next(_re: Reactive) {
        var n = _re.next();
        if (n == null) {
            ReactiveUtils.shiftRoot(_re).setState(RState.Observing);
            return;
        }
        n.launch();
    } 
}
