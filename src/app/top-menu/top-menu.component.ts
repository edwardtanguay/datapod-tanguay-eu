import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import _pageItems from "../../data/pageItems.json";

@Component({
	selector: "app-top-menu",
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: "./top-menu.component.html",
	styleUrl: "./top-menu.component.scss",
})
export class TopMenuComponent {
  pageItems = structuredClone(_pageItems);
}
