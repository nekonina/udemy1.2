import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { BookingService } from "./booking.service";
import { Booking } from "./booking.model";
import { IonItemSliding } from "@ionic/angular";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"]
})
export class BookingsPage implements OnInit {
  private myBooking: Booking[];
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.myBooking = this.bookingService.bookings;
  }
  onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
  }
}
