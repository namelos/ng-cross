import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HelloComponent } from './hello.component'

@NgModule({
  imports: [BrowserModule],
  bootstrap: [HelloComponent],
  declarations: [HelloComponent]
})
export class AppModule {}
