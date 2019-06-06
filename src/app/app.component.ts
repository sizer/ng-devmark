import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-devmark';

  isProduction() { return environment.production; }

  environmentName() {
    if(this.isProduction) {
      return "本番環境";
    } else {
      return "開発環境";
    }
  }
}
