import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',

  template: "<p>Aquí iria un empleado</p>",
  templateUrl: './empleado.component.html',
  
  styleUrls:['./empleado.component.css']

  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";

  apellido = "Díaz";

  private edad = 7;

  //empresa = "Píldoras Informáticas";

  // llamaEmpresa(value:String){

  // }

  getEdad(){
    return this.edad
  }

  constructor() { }

  ngOnInit(): void {
  }

}
