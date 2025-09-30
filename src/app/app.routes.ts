import { Routes } from '@angular/router';

//Paginas 

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { LoginComponent } from './pages/login/login.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { InfoUserComponent } from './pages/userAdm/info-user/info-user.component';
import { AdmEditComponent } from './pages/adm/adm-edit/adm-edit.component';
import { AdmAddComponent } from './pages/adm/adm-add/adm-add.component';
import { AdmComponent } from './pages/adm/adm.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'login', component: LoginComponent},
    { path: 'busca/:busca', component: BuscaComponent},
    { path: 'usuario/:id/informacoes', component: InfoUserComponent},
    { path: 'adm', component: AdmComponent},
    { path: 'adm/edit', component: AdmEditComponent},
    { path: 'adm/add', component: AdmAddComponent}
];