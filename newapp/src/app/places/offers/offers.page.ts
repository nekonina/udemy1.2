import { Component, OnInit } from '@angular/core';
import { Place } from '../place.module';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
    myplaces: Place[];
    constructor(private loadplaces: PlacesService) { }

    ngOnInit() {
        this.myplaces = this.loadplaces.places;
  }
    
}
