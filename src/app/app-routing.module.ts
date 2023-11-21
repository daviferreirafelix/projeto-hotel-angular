import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { SuporteComponent } from './components/pages/suporte/suporte.component';
import { FormComponent } from './components/form/form.component';
import { DormitorioSimplesComponent } from './components/quartos/dormitorio-simples/dormitorio-simples.component';
import { QuartoLuxoComponent } from './components/quartos/quarto-luxo/quarto-luxo.component';
import { QuartoModernoComponent } from './components/quartos/quarto-moderno/quarto-moderno.component';
import { QuartoSimplesComponent } from './components/quartos/quarto-simples/quarto-simples.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components/pages/sobre', component: SobreComponent},
  {path: 'components/pages/suporte', component: SuporteComponent},
  {path: 'components/form', component: FormComponent},
  {path: 'components/quartos/dormitorio-simples', component: DormitorioSimplesComponent},
  {path: 'components/quartos/quarto-luxo', component: QuartoLuxoComponent},
  {path: 'components/quartos/quarto-moderno', component: QuartoModernoComponent},
  {path: 'components/quartos/quarto-simples', component: QuartoSimplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
