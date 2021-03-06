import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { Ng2Component } from './ng2.component'
import { HelloComponent } from './hello.component'
import { AboutComponent } from './about.component'
import { RouterModule } from '@angular/router'

const appRoutes = [
  {
    path: 'ng2',
    component: Ng2Component,
    children: [
      { path: 'hello', component: HelloComponent },
      { path: 'about', component: AboutComponent },
    ]
  }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    Ng2Component
  ]
})
export class AppModule {}
