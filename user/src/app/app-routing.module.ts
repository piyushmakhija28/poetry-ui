import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NatureComponent } from './nature/nature.component';
import { RomanticComponent } from './romantic/romantic.component';
import { SadComponent } from './sad/sad.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { ReadPoetryComponent } from './read-poetry/read-poetry.component';
import { SubmitPoemComponent } from './submit-poem/submit-poem.component';
import { AppComponent } from './app.component';
import { AllPoemsComponent } from './all-poems/all-poems.component';

const routes: Routes = [
  {
    path: '',
    component: AllPoemsComponent
  }, {
    path: 'all-poems',
    component: AllPoemsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'nature',
    component: NatureComponent
  }, {
    path: 'romantic',
    component: RomanticComponent
  }, {
    path: 'sad',
    component: SadComponent
  }, {
    path: 'miscellaneous',
    component: MiscellaneousComponent
  }, {
    path: 'poetry/:id',
    component: ReadPoetryComponent
  }, {
    path: 'submit',
    component: SubmitPoemComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
