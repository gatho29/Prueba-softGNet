import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monitoria',
  templateUrl: './monitoria.component.html',
  styleUrls: ['./monitoria.component.scss']
})
export class MonitoriaComponent implements OnInit {

  monitoriaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.monitoriaForm = this.formBuilder.group({
      monitorAsignado: ['', Validators.required],
      materia: ['', Validators.required],
      salon: ['', Validators.required],
      fecha: ['', Validators.required],
    })
  }
}
