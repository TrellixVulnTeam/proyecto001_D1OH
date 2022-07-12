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

  apellido = "Díaz" ;

  private edad = 7;

  habilitarCuadro = true; 

  userRegistrado = false; 

  //empresa = "Píldoras Informáticas";

  // llamaEmpresa(value:String){

  // }

  getEdad(){
    return this.edad
  }

  getRegistro(){
    this.userRegistrado = true; 

  }

  habilitacion(){

    this.habilitarCuadro === true? this.habilitarCuadro = false:this.habilitarCuadro = true; 
  }


  constructor() { }

  ngOnInit(): void {
  }

}
