class Where extends Lambda {

    run() {
        var b = this.action().call(null, this.reactive().map());
        if (!b) return;
        this.reactive().next().launch();
    }

}