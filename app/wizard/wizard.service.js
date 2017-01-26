"use strict";
var WizardService = (function () {
    function WizardService() {
        this.name = "Angelov";
    }
    WizardService.prototype.getName = function () {
        return this.name;
    };
    return WizardService;
}());
exports.WizardService = WizardService;
