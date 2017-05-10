import { Component } from '@angular/core';

import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  goBack() {
    window.history.back();
  }

}
