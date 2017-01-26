"use strict";
var WizardService = (function () {
    function WizardService($http) {
        this.$http = $http;
        this.name = "Angelov";
    }
    WizardService.prototype.getName = function () {
        return this.name;
    };
    WizardService.prototype.getRecords = function () {
        return this.$http.get('./app/test.json');
    };
    return WizardService;
}());
exports.WizardService = WizardService;
