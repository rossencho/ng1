export class MainContoller{
    static Dependecies=['$scope', MainContoller];
    public name:string='';
    constructor($scope:ng.IScope){
        this.name = "Rossko";
    }
    
}