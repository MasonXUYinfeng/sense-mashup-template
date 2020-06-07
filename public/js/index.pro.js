var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
var config = {
    host: window.location.hostname,
    prefix: prefix,
    port: window.location.port,
    isSecure: window.location.protocol === "https:"
};
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
    qlik.setOnError(function (error) {
        $('#popupText').append(error.message + "<br>");
        $('#popup').fadeIn(1000);
    });
    $("#closePopup").click(function () {
        $('#popup').hide();
    });
    //callbacks -- inserted here --
    //open apps -- inserted here --
    console.log(333333333333);
    window.qApp = qlik.openApp('8ccd8940-0642-49ec-b52c-4588727ae81f', config);
    console.log(4444444444444);
    //get objects -- inserted here --
    //create cubes and lists -- inserted here --
});