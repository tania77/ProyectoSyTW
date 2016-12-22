<div class="top-bar">
	<div class="row">
		<div class="top-bar-left">
			<ul class="menu">
				<li class="menu-text">BusinessContacs</li>
			</ul>
		</div>
	    <div class="top-bar-right">
	    	
	    </div>
	</div>
</div>
<br>
<div class="row">
	 <div class="large-6 columns">
		<button (click)="changeState('add')" class="button">Add Business</button>			
 	</div>
 	 <div class="large-6 columns">
		<label>Filter category
			<select (change)="filterCategory(filteredCategory.value)" #filteredCategory>
				<option value="0">Select</option>
				<option *ngFor="let category of categories" value="{{category.tipo}}">{{category.tipo}}</option>

			</select>

		</label> 	
	</div>
</div>

<div *ngIf="appState == 'add'">
	<div class="large-12 columns">
		<h3>Add producto</h3>
		<form (submit)="addProducto(
			producto.value,
			precio.value,
			tipo.value,
			imagen.value)">
			<div class="row">
				<div class="large-3 columns">
					<label>Producto
					  <input type="text" placeholder="nombre" #producto > </label>
				</div>
				<div class="large-3 columns">
						<label>Precio
					  <input type="text" placeholder="nombre" #precio > </label>				
				</div>
				<div class="large-3 columns">
						<label>Imagen
					  <input type="text" placeholder="nombre" #imagen > </label>				
				</div>
				<div class="large-3 columns">
						<label>Tipo
					  	<select #tipo >
					  		<option value="0">Select</option>			<option *ngFor="let category of categories" value="{{category.tipo}}">{{category.tipo}}</option>

					  	</select>
					   </label>				
				</div>
				<div class="row">
					<div class="large-12">
						<input type="submit" class="button" value="submit">
					</div>
				</div>
			</div>
		</form>
	</div>
</div>


<!-- edittttt -->

<div *ngIf="appState == 'edit'">
	<div class="large-12 columns">
		<h3>Add producto</h3>
		<form (submit)="updateProducto()">
			<div class="row">
				<div class="large-3 columns">
					<label>Producto
					  <input type="text" [(ngModel)]="activeProducto" name="activeProducto" placeholder="nombre" #producto > </label>
				</div>
				<div class="large-3 columns">
						<label>Precio
					  <input type="text" [(ngModel)]="activePrecio" name="activePrecio" placeholder="nombre" #precio > </label>				
				</div>
				<div class="large-3 columns">
					<label>Producto
					  <input type="text" [(ngModel)]="activeProducto" name="activeProducto" placeholder="nombre" #producto > </label>
				</div>
				<div class="large-3 columns">
						<label>Tipo
					  	<select  [(ngModel)]="activeTipo" name="activeTipo" #tipo >
					  		<option value="0">Select</option>			<option *ngFor="let category of categories" value="{{category.tipo}}">{{category.tipo}}</option>

					  	</select>
					   </label>				
				</div>
				<div class="row">
					<div class="large-12">
						<input type="submit" class="button" value="submit">
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

<div *ngIf="appState == 'extend'">
	<div class="row">
		<div class="large-12 columns">
			<button (click)="changeState('default')" class="button-alert">Go back</button>
		</div>
	</div>


<div *ngFor="let producto of productos">
	<div *ngIf="producto.$key == activeKey">
		<div class="row">
			<div class="large-5 columns large-offset-1">
				<h3>{{producto.producto}}</h3>
				<p>{{producto.precio}}</p>
			</div>
			<div class="large-5 columns large-offset-1">
				
			</div>
		</div>
	</div>
</div>
</div>
<div class="row">
	<div class="large-12 columns" >
		<div *ngIf="productos">
			<table>
				<thead>
					<tr>
						<th>Bebida</th>
						<th>Precio</th>
						<th>Tipo</th>
						<th>Imagen</th>
						
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let producto of productos">
						<td>{{producto.producto}}</td>
						<td>{{producto.precio}}</td>
						<td>{{producto.tipo}}</td>
						<td><img src="{{producto.imagen}}" style="width: 65px; height: 65px;"> </td>
						
						<td>
						<button (click)="changeState('extend',producto.$key)" class="button">More</button>
						<button (click)="showEdit(producto)" class="button secondary">Edit</button>
						<button (click)="deleteProducto(producto.$key)" class="button alert">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>
</div>