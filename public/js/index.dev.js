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
    window.qApp = qlik.openApp('c47d74e1-a0ea-44de-819a-66c1e09053df', config);
});