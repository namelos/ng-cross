import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HelloComponent } from './hello.component'
import { AboutComponent } from './about.component'
import { RouterModule } from '@angular/router'

const appRoutes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      useHash: true
    })
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent
  ]
})
export class AppModule {}
