import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [SharedModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-v19-signals';
}
