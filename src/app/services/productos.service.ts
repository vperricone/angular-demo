import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.intrface';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  products:Products = {};
  loading = false;

  constructor(private http:HttpClient) {
    this.loadProducts();
    console.log("product service loaded");
   }

   private loadProducts() {
    return new Promise((resolve, reject) => {
      this.loading = true;
      this.http.get("https://angular-portafolio-d2eb5-default-rtdb.firebaseio.com/productos_idx.json").subscribe((response:any)=>{
        this.products.items = response;
        console.log("product", response);
        this.loading = false;
      })
    });

   }

   public getProduct(id:string) {
      return this.http.get(`https://angular-portafolio-d2eb5-default-rtdb.firebaseio.com/productos/${id}.json`);
   }

   public search(value:string) {
    return this.products.items?.filter((product) => { 
      return product && product.titulo && product.titulo.toLowerCase().indexOf(value.toLowerCase()) > -1;
    }); 
   }
}
