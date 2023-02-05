import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RocketInterface, RocketService } from '../service/rocket.service';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.css']
})
export class ManageEditComponent {
  public rocket: RocketInterface;  
  constructor(private rutaActiva: ActivatedRoute, private service:RocketService, private router: Router){
    this.rocket = {
      id: this.rutaActiva.snapshot.params['id'],
      name: "",
      description: "",
      height: 0,
      country: "",
      flickr_images: []
    };
  }
  async ngOnInit() {
    this.rocket = await this.service.getById(this.rocket.id);
  }

  async update(){
    let respuesta = await this.service.update(this.rocket);
    if(respuesta==false){
      alert("problemas de cors")
    }
    this.router.navigate(["/"])
  }
}
