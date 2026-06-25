import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from "primeng/inputtext";

@Component({
  selector: 'app-form-empleado',
  imports: [ReactiveFormsModule, InputText],
  templateUrl: './form-empleado.html',
  styleUrl: './form-empleado.css',
})
export class FormEmpleado implements OnInit {

  title = signal<string>("Crear empleado");

  private fbservice = inject(FormBuilder);

  form!: FormGroup;

  empresaService = inject(EmpresaService);

  ngOnInit(): void {
    this.form = this.fbservice.group({
      nombre : ["", [Validators.required]],//tiene 3 partes:  1era: valor por defect, 2do: validation, 3: funcion asincorinica. por ej: si el usuario esta registrado
      apellido : [],
      empresa : []
    })
  }

  sendEmpleado(){

  }
}
