import { Component } from '@angular/core';
import { TopMenuComponent } from "./top-menu/top-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [TopMenuComponent]
})
export class AppComponent {
  title = 'datapod-tanguay-eu';
}
