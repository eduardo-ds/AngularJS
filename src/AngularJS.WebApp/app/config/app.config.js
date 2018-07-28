(
function () {

    //não deixa criar variavel sem "var"
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        //Setamos a rota padrão
        $urlRouterProvider.otherwise('/Listar');

        $stateProvider.
            state('layout',
            {
                templateUrl: 'app/views/layout.html',
                abstract: true

            }).
            state('layout.cadastrar',
            {
                templateUrl: 'app/views/cadastrar.html',
                url: '/Cadastrar',
                cache: false

            }).
            state('layout.listar',
            {
                templateUrl: 'app/views/listar.html',
                url: '/Listar',
                cache: false

            });


    }

}
)
();