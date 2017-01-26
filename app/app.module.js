"use strict";
var app_component_1 = require("./app.component");
var wizard_module_1 = require("../app/wizard/wizard.module");
var app_controller_1 = require("./app.controller");
exports.appModule = angular
    .module('appModule', [
    wizard_module_1.wizardModule.name
])
    .controller('MainContoller', app_controller_1.MainContoller.Dependecies)
    .component('heros', app_component_1.appComponent);
