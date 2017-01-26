
import {appModule} from "./app.module";


declare const angular:angular.IAngularStatic;

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name]);
});
