import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { TwoComponent } from "src/app/change Detection/two.component";
import { ThreeComponent } from "src/app/change Detection/three.component";
import { BaseNodeComponent } from "../base-node.component";

@Component({
  selector: "app-start-cd",
  standalone: true,
  imports: [TwoComponent, ThreeComponent],
  templateUrl: "./start-cd.component.html",
  styleUrl: "./start-cd.component.css",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class StartCdComponent extends BaseNodeComponent {}
