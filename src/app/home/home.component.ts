import { Component } from "@angular/core";
import _tasks from "../../assets/data/tasks.json";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	title = "test111";
  tasks = _tasks;
}
