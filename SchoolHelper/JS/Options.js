class Options {

    constructor(settings) {
        this.settings = settings // || get local storage data
        this.debug = this.settings.debug;
    }

    isDebugEnabled() {
        return this.debug;
    }

}