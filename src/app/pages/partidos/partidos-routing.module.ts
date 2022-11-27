import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from '../partidos/crear/crear.component';
import { ListarComponent } from '../partidos/listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path:'crear',
    component: CrearComponent
  },
  {
    path: 'actualizar/:id_partido',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
