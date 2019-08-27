import { Injectable } from '@angular/core';
import { Place } from './place.module';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
        new Place(
            'p1',
            'Disney Orlando',
            'Parque de atracciones',
            'https://d2cvnaqfz8n4a8.cloudfront.net/viajes-a-medida/wp-content/uploads/2017/08/disney-orlando.jpg',
            142
        ),
        new Place(
            'p2',
            'Estatua de la Libertad',
            'Simbolo de la libertad en New York',
            'https://ae01.alicdn.com/kf/HTB1qHYnRVXXXXc9XVXXq6xXFXXXu/Fondo-de-estudio-fotogr-fico-de-la-Estatua-de-la-libertad-de-la-ciudad-de-la.jpg_640x640.jpg',
            63
        ),
        new Place(
            'p3',
            'Torre Eiffel',
            'Torre ubicada en la ciudad del amor',
            'https://cdn.atrapalo.com/common/photo/event/4/8/1/8890/625730/vertic_880_0.jpg',
            0
        ),
        new Place(
            'p4',
            'La Quinta Avenida',
            'la calle mas famosa de New York',
            'https://i2.wp.com/www.blogdenuevayork.es/wp-content/uploads/2016/12/NewYorkTimesSquare.jpg?zoom=2.625&w=1216&h=684&ssl=1',
            0
        )
    ];

    get places() {
        return [...this._places];
    }
  constructor() { }
}
