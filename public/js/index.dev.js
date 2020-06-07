var config = {
    host: 'localhost',
    prefix: '/',
    port: '443',
    isSecure: true
};

window.requireLib.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});

window.requireLib(['js/qlik'], function (qlik) {
    console.log(1111111111);
    window.qApp = qlik.openApp('8ccd8940-0642-49ec-b52c-4588727ae81f', config);
    console.log(22222222222);
});