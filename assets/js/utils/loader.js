const LOAD_TIME = 3000;

let loaderHolder = $("#loader-holder"),
    body = $("body");

class Loader{

    constructor(){
        this._events();
    }
    _events(){
        $(window).on("load", (e) => { this._handleLoad(e) });
    }
    _handleLoad(e){

        setTimeout(() => {

            loaderHolder.addClass("loaded");
            body.addClass("loaded");

        }, LOAD_TIME);

        return false;
    }
}

export default Loader;