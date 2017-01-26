"use strict";
var MainContoller = (function () {
    function MainContoller($scope) {
        this.name = '';
        this.name = "Rossen";
    }
    return MainContoller;
}());
MainContoller.Dependecies = ['$scope', MainContoller];
exports.MainContoller = MainContoller;
