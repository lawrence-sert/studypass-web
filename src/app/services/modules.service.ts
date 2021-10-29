import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Modules } from 'src/app/models/modules.model';
import { UsersService } from 'src/app/auth/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  uid: any;
	crrntUsr: any;
  constructor(
  	private firestore: AngularFirestore,
  	public usersService: UsersService,
    private toastr: ToastrService
    ) {
  	// Local storage information
    this.crrntUsr = JSON.parse(localStorage.getItem('user')|| '{}');
    const id = this.crrntUsr.uid;
  }

  getModules() {
    return this.firestore.collection('modules', ref => ref.orderBy('id', 'desc')).snapshotChanges();
  }
}
