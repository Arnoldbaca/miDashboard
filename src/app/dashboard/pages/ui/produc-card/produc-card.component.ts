import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-produc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produc-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProducCardComponent {

  // @Input({required:true}) Product!:Product

  public product = input.required<Product>()


  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>()

  public onIncrementQuantity = output<number>()

  public incrementQuantity():void {
    this.onIncrementQuantity.emit(this.product().quantity +1)
  }

  public loginEffect = effect(()=>{
    console.log(this.product().name)
  })

}
