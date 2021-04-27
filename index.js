function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

const isJqueryVersionBad = () => {
    if (typeof jQuery === 'undefined'){
        return true; 
    }

    var jVersion = jQuery.fn.jquery.split('.');

    if (parseInt(jVersion[0]) >= 2) {
        return true;
    }

    if (parseInt(jVersion[1]) < 8) {
        return true;
    }

    return false;
}
