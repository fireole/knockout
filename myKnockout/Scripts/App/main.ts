/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="bootstrapper.ts" />



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

require(['bootstrapper', 'jquery', 'toastr'],
    (bootstrapper, $, toastr) => {
        bootstrapper.run();
    });