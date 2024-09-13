import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { HeavyLoadersFastComponent } from "../../../shared/heavy-loaders/heavy-loaders-fast.component";
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  standalone: true,
  imports: [HeavyLoadersSlowComponent, CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-views.component.html',

})
export default class DeferViewsComponent {

}
