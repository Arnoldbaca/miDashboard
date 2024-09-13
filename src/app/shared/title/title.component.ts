import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <h1 class="text-3xl mb-2">{{title}} - {{withShadow}}</h1> -->
    <h1 class="text-3xl mb-2">{{title}} </h1>
  `

})
export class TitleComponent {

@Input({required:true, alias: 'titulo'})
 title!:string

@Input({transform:booleanAttribute}) withShadow:boolean= false

}
