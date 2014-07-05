({
    appDir: "../js",
    baseUrl: ".",
    dir: "../js-build",
    paths: {
        jquery: 'empty:',
        jqmobile: 'lib/jquery-mobile/jquery-mobile',
        underscore: 'lib/underscore/main',
        backbone: 'lib/backbone/main',
        text: 'lib/require/text',
        order: 'lib/require/order',
        prettyphoto: 'lib/jquery-prettyphoto/production',
        mobiledetection: 'lib/detection/mobile',
        parallax: 'lib/jquery-parallax/main',
        scrollto: 'lib/jquery-scrollto/main',
        localscroll: 'lib/jquery-localscroll/main',
        jqpath: 'lib/jquery-path/main',
        _lib: 'lib',
        _js: '',
        _css: '../css'
    },
    modules: [
        {
            name: 'main'
        },
        {
            name: 'views/layout'
        }
    ],
    removeCombined: false
})