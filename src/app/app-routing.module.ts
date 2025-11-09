import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los nuevos componentes que actuarán como páginas
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';

const routes: Routes = [
  // 1. Ruta de la página de Inicio
  { path: 'inicio', component: InicioComponent },

  // 2. Ruta para Catálogo (usando un parámetro para la categoría)
  { path: 'productos/:categoria', component: CatalogoComponent },
  
  // 3. Ruta para Detalle de Producto (usando un parámetro para el ID)
  { path: 'producto/:id', component: DetallesProductoComponent },

  // 4. Redirección para la ruta raíz (al abrir el dominio)
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
  // 5. Manejo de errores (ruta no encontrada)
  { path: '**', redirectTo: '/inicio' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
