import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { SuporteComponent } from './components/pages/suporte/suporte.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components/pages/sobre', component: SobreComponent},
  {path: 'components/pages/suporte', component: SuporteComponent},
  {path: 'components/form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
