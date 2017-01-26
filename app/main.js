"use strict";
var app_module_1 = require("./app.module");
angular.element(document).ready(function () {
    angular.bootstrap(document, [app_module_1.appModule.name]);
});
