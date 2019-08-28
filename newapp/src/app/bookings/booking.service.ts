import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";

@Injectable({ providedIn: "root" })
export class BookingService {
  private _booking: Booking[] = [
    {
      id: "xyz",
      placfeId: "000",
      userId: "iri1",
      placeTitle: "Paris",
      guestNumber: 2
    }
  ];
  get bookings() {
    return [...this._booking];
  }
}
