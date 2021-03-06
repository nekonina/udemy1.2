import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.module';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
    place: Place;
    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private loadplaces: PlacesService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            this.place = this.loadplaces.getPlace(paramMap.get('placeId'));
            console.log(this.place);
        });
  }

}
