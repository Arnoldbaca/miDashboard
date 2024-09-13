import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProducCardComponent } from '../ui/produc-card/produc-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule,ProducCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    {
    id:1,
    name:'Producto 1',
    quantity:0
    },
    {
      id:2,
      name:'Producto 2',
      quantity:2
      },
  ])

  private intervalSuscription = interval(1000).pipe(
    tap(()=> {
      this.products.update(products => [
        ...products,
        {
          id:products.length+1,
          name: `Product ${products.length+1}`,
          quantity:0
        }
      ])
    }),
    take(6)
  ).subscribe()

  ngOnDestroy(): void {
    this.intervalSuscription.unsubscribe()
  }

  public updateProduct(product:Product, quantity:number){
    this.products.update((products) =>
      products.map((p)=>
        p.id===product.id ? {...p, quantity} : p  ))
  }

}
