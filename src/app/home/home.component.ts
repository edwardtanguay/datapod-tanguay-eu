import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import _tasks from "../../data/tasks.json";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	title = "test111";
  tasks = _tasks.sort((a,b) => a.rank < b.rank ? 1 : -1);
}
