import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductDetail } from 'src/app/interfaces/product-detail.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  id:string = "";
  product:ProductDetail = {};
  constructor(private route:ActivatedRoute, private productosService:ProductosService) {
      
  } 

  ngOnInit(): void {
    this.route.params.subscribe((parameters) => {
        console.log("params", parameters);
        this.id = parameters['id'];
        this.productosService.getProduct(this.id).subscribe((product:ProductDetail) => {
          this.product = product;
        })
    })
 }

}
