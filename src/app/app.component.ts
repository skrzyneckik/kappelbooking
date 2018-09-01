import { Component, OnInit } from '@angular/core';
import { ReservationService } from './services/reservation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private reservationService: ReservationService) {
    }

    ngOnInit() {
        this.reservationService.test();
    }
}
