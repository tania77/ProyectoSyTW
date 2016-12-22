import { Component,OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.server.ts';
import {Productos} from './business';
import {Category} from './categories';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
 	productos:Productos[];
 	categories:Category[];
 	appState: string;
 	activeKey: string;

 	activeProducto: string;
 	activePrecio: string;
 	activeTipo: string;
  activeImagen: string;

  constructor(private _firebaseService: FirebaseService) {
   	
  }

  ngOnInit(){
  	
  	this._firebaseService.getProductos().subscribe(productos => {
  		this.productos = productos;
  	})
  	this._firebaseService.getCategories().subscribe(categories => {
  		this.categories = categories;
  	})
  }


  changeState(state,key){
  	console.log("changing state to: "+ state + "key: " + key);
  	if (key) {
  		  	console.log("changing state to: "+ state + "key: " + key);

  		this.activeKey = key;
  	}
  	this.appState = state || 'default';
  }
  	filterCategory(category){
  		this._firebaseService.getProductos(category).subscribe(categories => {
  		this.productos = categories;
  	});

  }

  addProducto(producto:string,precio:string,tipo:string,imagen:string){
  	var created_at = new Date().toString();

  	var newProducto= {
  		producto:producto,
  		precio:precio,
  		tipo:tipo,
      imagen:imagen
  	}
  	this._firebaseService.addProducto(newProducto);
  	this.changeState('default');
  }

  showEdit(producto){
  	this.changeState('edit',producto.$key);
  	this.activePrecio = producto.precio;
  	this.activeProducto = producto.producto;
  	this.activeTipo = producto.tipo;
    this.activeImagen = producto.imagen;

  }

  


  updateProducto(){
		var updProducto = {
			producto: this.activeProducto,,
			precio: this.activePrecio,
			tipo: this.activeTipo,
      imagen: this.activeImagen
		}
		this._firebaseService.updateProducto(this.activeKey,updProducto);

		this.changeState('default');
	}

  deleteProducto(key){
  	
  	this._firebaseService.deleteProducto(key);

	this.changeState('default');
  }

}