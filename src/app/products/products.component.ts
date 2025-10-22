import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  skip,
  reduce,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.css"],
    standalone: false
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  productService = inject(ProductService);
  setting: Settings = {skip:0, limit: 12};
  settings$ = new BehaviorSubject(this.setting);
  products$: Observable<Product[]> = this.settings$.pipe(
    // (0,12), (12,12), (24,12) ....
    concatMap(setting => this.productService.getProducts(setting)),
    // ApiResp1, ApiResp2, ....
    takeWhile(apiReponse => apiReponse.products.length > 0),
    map(apiReponse => apiReponse.products),
    // [...] [....]
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );

  more() {
    this.setting.skip += this.setting.limit;
    this.settings$.next(this.setting);
  }
}
