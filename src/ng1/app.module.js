import angular from 'angular'
import { helloComponent } from './hello.component'

export const AppModule = angular.module('app', ['ngRoute'])
.component('hello', helloComponent)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
  $locationProvider.hashPrefix('')

  $routeProvider.when('/hello', {
    template: `<h1>angular 1 hello</h1>`
  }).when('/about', {
    template: `<h1>angular 1 about</h1>`
  })
}])
