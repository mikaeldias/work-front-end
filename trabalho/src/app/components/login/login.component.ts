import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() cliente!: {nome: string, sobrenome: string, email: string, cpf: number, tel: number};

  OnSubmit(): void{
    console.log('Foi');
    console.log(this.cliente);
  }

}
