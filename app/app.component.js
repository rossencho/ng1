"use strict";
var HEROS = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
];
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.$onInit = function () {
        this.heros = HEROS;
    };
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    template: "\n    <ul>\n        <li ng-repeat=\"hero in $ctrl.heros\">{{hero.name}}</li>\n      </ul>\n  "
};
