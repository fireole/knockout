require.config({
    baseUrl: 'Scripts/App',
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': '../jquery-2.0.3',
        'toastr': '../toastr'
    }
});

require(['bootstrapper', 'jquery', 'toastr'], function (bootstrapper, $, toastr) {
    bootstrapper.run();
});
