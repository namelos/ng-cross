import angular from 'angular'
import { AppModule as Ng1Module } from './ng1/app.module'

angular.bootstrap(document.querySelector('#ng1app'), [
  Ng1Module.name
])

import 'zone.js/dist/zone'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule as NgXModule } from './ngX/app.module'

platformBrowserDynamic().bootstrapModule(NgXModule)
