import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { BarranavigationComponent } from './barranavigation/barranavigation.component';
import { FormproveedoresComponent } from './proveedores/formproveedores.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { FormtrabajadoresComponent } from './trabajadores/formtrabajadores.component';
import { ProductosComponent } from './productos/productos.component';
import { FormproductosComponent } from './productos/formproductos.component';
import { PedidocomprasComponent } from './pedidocompras/pedidocompras.component';
import { FormpedidocomprasComponent } from './pedidocompras/formpedidocompras.component';
import { DetallepedidocomprasComponent } from './pedidocompras/detallepedidocompras/detallepedidocompras.component';

const routes:Routes =[
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  { path:'inicio', component:HomeadminComponent},
  { path:'proveedores', component:ProveedoresComponent},
  { path:'proveedores/form', component:FormproveedoresComponent},
  { path:'proveedores/form/:ruc', component:FormproveedoresComponent},
  { path:'trabajadores', component:TrabajadoresComponent},
  { path:'trabajadores/form', component:FormtrabajadoresComponent},
  { path:'trabajadores/form/:codtrabajador', component:FormtrabajadoresComponent},
  { path:'productos', component:ProductosComponent},
  { path:'productos/form', component:FormproductosComponent},
  { path:'productos/form/:codproducto', component:FormproductosComponent},
  { path:'pedidocompras', component:PedidocomprasComponent},
  { path:'pedidocompras/form', component:FormpedidocomprasComponent},
  { path:'pedidocompras/detalle/:idpedido', component:DetallepedidocomprasComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    FormproveedoresComponent,
    BarranavigationComponent,
    HomeadminComponent,
    TrabajadoresComponent,
    FormtrabajadoresComponent,
    ProductosComponent,
    FormproductosComponent,
    PedidocomprasComponent,
    FormpedidocomprasComponent,
    DetallepedidocomprasComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
