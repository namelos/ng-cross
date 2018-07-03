import createRouter, { loggerPlugin } from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

import angular from 'angular'
import { AppModule as Ng1Module } from './ng1/app.module'

import 'zone.js/dist/zone'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule as NgXModule } from './ngX/app.module'
import { startsWithSegment } from "router5-helpers";

const routes = [
  { name: 'ng1', path: '/ng1' },
  { name: 'ng2', path: '/ng2' },
  { name: 'home', path: '/' }
]

export const router = createRouter(routes, {
  allowNotFound: true
})
  .usePlugin(loggerPlugin)
  .usePlugin(browserPlugin({ useHash: true }))
  .usePlugin(listenersPlugin())

function renderNg1() {
  angular.bootstrap(document.querySelector('#ng1app'), [Ng1Module.name])
}

let ngXModule = null

function renderNg2() {
  platformBrowserDynamic().bootstrapModule(NgXModule)
  .then(m => ngXModule = m)
}

window.destroy = function() {
  ngXModule && ngXModule.destroy()
}

router.subscribe(({route}) => {
  console.log(route)
  if (!route) {
    return renderNg1()
  }
  const testRoute = startsWithSegment(route.name)

  if (testRoute('ng2')) return renderNg2()
  return renderNg1()
})
router.start()
