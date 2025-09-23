import { Routes } from '@angular/router';

//Paginas 

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { AdmComponent } from './pages/adm/adm.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'adm', component: AdmComponent}
];
