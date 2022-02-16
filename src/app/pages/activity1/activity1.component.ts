import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.scss']
})
export class Activity1Component implements OnInit {

  registroMonitor = false;
  registroMonitoria = false;
  sinRegistroSeleccionado = true;

  constructor() { }

  ngOnInit(): void {
  }

}
