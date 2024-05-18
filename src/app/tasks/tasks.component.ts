import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import _tasks from "../../data/tasks.json";

@Component({
	selector: "app-tasks",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./tasks.component.html",
	styleUrl: "./tasks.component.scss",
})
export class TasksComponent {
	tasks = _tasks.sort((a, b) => (a.rank < b.rank ? 1 : -1));
}
