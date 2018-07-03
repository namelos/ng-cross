import { Component } from '@angular/core'
import template from './hello.html'

@Component({
  selector: 'app',
  template
})
export class HelloComponent {
  message = 'Hello from Angular X!'
}
