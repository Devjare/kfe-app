import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pedido-alumno',
    loadChildren: () => import('./pedido-alumno/pedido-alumno.module').then( m => m.PedidoAlumnoPageModule)
  },
  {
    path: 'tabs-cafeteria',
    loadChildren: () => import('./tabs-cafeteria/tabs-cafeteria.module').then( m => m.TabsCafeteriaPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./pages/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'pedidos-listos',
    loadChildren: () => import('./pedidos-listos/pedidos-listos.module').then( m => m.PedidosListosPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
