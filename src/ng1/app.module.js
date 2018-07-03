import angular from 'angular'
import { helloComponent } from './hello.component'

export const AppModule = angular.module('app', [])
.component('hello', helloComponent)
