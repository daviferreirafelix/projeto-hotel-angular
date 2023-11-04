import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { QuartoComponent } from './components/pages/quarto/quarto.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { SuporteComponent } from './components/pages/suporte/suporte.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components/pages/quarto', component: QuartoComponent},
  {path: 'components/pages/sobre', component: SobreComponent},
  {path: 'components/pages/suporte', component: SuporteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
