import { Component } from "@angular/core";
import _centralDatapodSiteBlocks from "../../data/centralDatapodSiteBlocks.json";
import * as qstr from "../../qtools/qstr";

@Component({
	selector: "app-starters",
	standalone: true,
	imports: [],
	templateUrl: "./starters.component.html",
	styleUrl: "./starters.component.scss",
})
export class StartersComponent {
	siteAndGoalOverviewText =
		_centralDatapodSiteBlocks.find(
			(m) => m.idCode === "siteAndGoalOverview"
		)?.body || "no text";
	siteAndGoalOverviewHtml = qstr.buildOutlineHtml(
		this.siteAndGoalOverviewText
	);
}
