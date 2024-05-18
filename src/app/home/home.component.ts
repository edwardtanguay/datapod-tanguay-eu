import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import _centralDatapodSiteBlocks from "../../data/centralDatapodSiteBlocks.json";
import * as qstr from '../../qtools/qstr';

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
  siteAndGoalOverviewText = _centralDatapodSiteBlocks.find(m => m.idCode === 'siteAndGoalOverview')?.body || 'no text';
  siteAndGoalOverviewHtml = qstr.buildOutlineHtml(this.siteAndGoalOverviewText);
}
