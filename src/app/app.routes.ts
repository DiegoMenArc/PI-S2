import { Routes } from '@angular/router';

//Paginas 

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { AdmComponent } from './pages/adm/adm.component';
import { LoginComponent } from './pages/login/login.component';
import { BuscaComponent } from './pages/busca/busca.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'adm', component: AdmComponent},
    { path: 'login', component: LoginComponent},
    { path: 'busca/:busca', component: BuscaComponent},
];
