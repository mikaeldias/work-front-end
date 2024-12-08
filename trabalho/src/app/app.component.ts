import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent, LoginComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dados_cliente = {
    nome : 'Mikael',
    sobrenome : 'Dias',
    email : 'Mikaelsd1010@icloud.com',
    cpf : 13026034428,
    tel : 84996851948,
  };

 
}

