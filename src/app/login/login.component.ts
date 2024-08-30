import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData = {
    email: '',
    // Email: '',
    password: '',
    firstname: '',
    lastname: '',
    // Password: '',
    // role: ''
  };

  isActive: boolean = false;

  constructor(private US: UserserviceService, private router: Router) { }

  toggleActive() {
    this.isActive = !this.isActive;
  }
  requestPayload: any
  onLoginSubmit(): void {
    if (this.isActive === false) {
      this.requestPayload = {
        email: this.formData.email, // Assure-toi que ces noms correspondent à ce que ton service attend
        password: this.formData.password
      };
      console.log(this.requestPayload.email, "this.requestPayload.email")
      console.log(this.requestPayload.password, "this.requestPayload.password")

      this.US.login(this.requestPayload).subscribe(
        (response) => {
          console.log('Login successful', response);
          localStorage.setItem('accessToken', response.accessToken); // Stocke le token d'accès
          localStorage.setItem('refreshToken', response.refreshToken); // Stocke le token de rafraîchissement
          this.router.navigate(['/home']);  // Redirige vers la page d'accueil après connexion réussie
        },
        error => {
          console.error('Login failed', error);
        }
      );
    }
  }
  requestPayloadRegister:any
  onRegisterSubmit(): void {
    // if (this.formData.password !== this.formData.confirm_password) {
    //   console.error('Passwords do not match');
    //   return;
    // }
    this.requestPayloadRegister = {
      firstname: this.formData.firstname,
      lastname: this.formData.lastname,
      email: this.formData.email,
      password: this.formData.password,
      // role: this.formData.role
    };
    console.log(this.requestPayloadRegister,"requestPayloadRegister")
    this.US.register(this.requestPayloadRegister).subscribe(
      () => {
        console.log('Registration successful');
        this.router.navigate(['/login']);  // Redirige vers la page de connexion après inscription réussie
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
