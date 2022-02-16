import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.scss']
})
export class Activity1Component implements OnInit {

  registroMonitor = true;
  registroMonitoria = false;
  sinRegistroSeleccionado = true;

  constructor() { }

  ngOnInit(): void {
  }

  registrarMonitor(): void {
    if (this.registroMonitor) {
      this.registroMonitor = true
      this.registroMonitoria = false;
    }
    this.sinRegistroSeleccionado = false;
  }

}
