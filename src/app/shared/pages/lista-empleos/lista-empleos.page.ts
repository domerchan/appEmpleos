import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {

  empleos: Observable<any[]>

  constructor(private EmpleosService: EmpleosService,
    public router: Router) { }

  ngOnInit() {
    this.empleos = this.EmpleosService.getEmpleos()
  }

  showEmpleo(id: any) {
    this.router.navigate([`empleo/${id}`])
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

  showCrearEmpleo() {
    this.router.navigate([`crear-empleo`])
  }

}
