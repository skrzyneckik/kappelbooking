import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    constructor(private afs: AngularFirestore) {
    }

    test() {
        // this.afs.collection('items');
        console.log('Test');
    }
}
