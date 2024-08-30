import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Route} from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importer FormsModule ici





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


  ],
    // Pas besoin de déclarer LoginComponent ici

  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(Route),
    FormsModule, // Ajouter FormsModule à la liste des imports
   
  ],
  exports:[RouterModule],
  providers: [  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
