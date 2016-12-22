import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Productos} from '../business.ts';
import {Category} from '../categories.ts';

@Injectable()
export class FirebaseService{
	productos: FirebaseListObservable<Productos[]>;
	categories: FirebaseListObservable<Category[]>;
	constructor(private _af:AngularFire){
	}

	getProductos(category:string = null){
		if (category != null) {
			this.productos = this._af.database.list('/productos',{query:{
				orderByChild: 'tipo',
				equalTo:category
			}
		}) as
		FirebaseListObservable<Productos[]>
		}
		else{
			this.productos = this._af.database.list('/productos') as
		FirebaseListObservable<Productos[]>
		}
		
		return this.productos;
	}

	getCategories(){
		this.categories = this._af.database.list('/categories') as
		FirebaseListObservable<Category[]>
		return this.categories;
	}

	addProducto(newProducto){
		return this.productos.push(newProducto);
	}


	updateProducto(key,updProducto){
		return this.productos.update(key,updProducto);
	}

	deleteProducto(key){
		return this.productos.remove(key);
	}


}

