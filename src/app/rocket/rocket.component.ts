import { Component, Input, OnInit } from '@angular/core';
import { RocketInterface, RocketService } from '../service/rocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit{
  @Input()
  rocket: any;

  constructor(private service:RocketService, private router:Router){

  }

  ngOnInit(): void {
  }

  isPositive() {
    return (this.rocket && this.rocket.height > 50);
  }

  isNegative() {
    return (this.rocket && this.rocket.height < 50);
  }

  async eliminar(){
    console.log("eliminar"+this.rocket.id);
    let respuesta = await this.service.remove(this.rocket);
    console.log(respuesta);
    //this.router.navigate(['/create']);
    //TODO: crear observador
    location.reload()
  }
}
