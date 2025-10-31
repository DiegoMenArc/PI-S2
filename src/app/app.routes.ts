import { Routes } from '@angular/router';

//Paginas

import { MenuHeaderComponent } from './components/principal/menu-header/menu-header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { LoginComponent } from './pages/login/login.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { InfoUserComponent } from './pages/userAdm/info-user/info-user.component';
import { AdmEditComponent } from './pages/adm/adm-edit/adm-edit.component';
import { AdmAddComponent } from './pages/adm/adm-add/adm-add.component';
import { AdmComponent } from './pages/adm/adm.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuHeaderComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'produto', component: ProdutoComponent },
      { path: 'busca/:busca', component: BuscaComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'usuario/:id/informacoes', component: InfoUserComponent },
  { path: 'adm/produto', component: AdmComponent },
  { path: 'adm/produto/edit/:id', component: AdmEditComponent },
  { path: 'adm/produto/edit', component: AdmAddComponent },
];
