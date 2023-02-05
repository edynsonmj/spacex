import { Component, Host, Injectable, OnInit } from '@angular/core';
import { RocketService } from '../service/rocket.service';
import { RocketInterface } from '../service/rocket.service';

@Component({
  selector: 'app-rocketlist',
  templateUrl: './rocketlist.component.html',
  styleUrls: ['./rocketlist.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RocketlistComponent implements OnInit{
  rockets: any
  constructor(private service:RocketService){
    this.rockets = []
  }
  async ngOnInit(): Promise<void> {
    this.rockets = await this.service.load();
  }
}
