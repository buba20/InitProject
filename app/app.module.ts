namespace App {
    angular.module("app", ["ngMaterial"])
        .config(function($mdThemingProvider: ng.material.IThemingProvider) {
            $mdThemingProvider.theme("default")
                .dark();
        });
}