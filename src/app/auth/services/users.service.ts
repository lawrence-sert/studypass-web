import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Users} from 'src/app/auth/model/users.model';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dbPath = '/users';

	uid: any;
	userRef: any;
	crrntUsr: any;
	displayName: any;
	photoUrl: any;


	UsersRef: AngularFirestoreCollection<Users>;

	constructor(
		private db: AngularFirestore,
		public router: Router,
		) {
		this.UsersRef = db.collection(this.dbPath);
	}


	create(users: Users): any {
		return this.UsersRef.add({ ...users });
	}

	update(id: string, data: any): Promise<void> {
		return this.UsersRef.doc(id).update(data);
	}

	deleteUser(id: string): Promise<void> {
		return this.UsersRef.doc(id).delete();
	}

	getUserDoc(id:any) {
		return this.db
		.collection<Users>('users')
		.doc(id)
		.valueChanges()
	}


	updateUser(user: Users, id:any) {
		let FirstRun: string;
		FirstRun = '1';
		return this.db
		.collection("users")
		.doc(id)
		.update({
			firstname: user.firstname,
			surname: user.lastname,
			displayName: user.firstname +' '+ user.lastname,
			phone: user.phone,
			location: user.country,
			firstrun: FirstRun
		});
	}

	updateAccount(user: Users, id:any) {

		return this.db
		.collection("users")
		.doc(id)
		.update({
			accountType: user.accountType,
		});
	}

	changePhone(uid:any, data:any) {
		return this.db
		.collection("users")
		.doc(uid)
		.update({
			phone: data.phone
		});
	}

	changeEmail(uid:any, data:any) {
		return this.db
		.collection("users")
		.doc(uid)
		.update({
			email: data.email
		});
	}

	changeAccountType(uid:any, data:any) {
		return this.db
		.collection("users")
		.doc(uid)
		.update({
			accountType: data
		});
	}

	changeLocation(uid:any, data:any) {
		return this.db
		.collection("users")
		.doc(uid)
		.update({
			location: data
		});
	}


	getAccountActivity(uid:any) {
		return this.db.collection(`users/${uid}/account`, ref => ref.orderBy('date', 'desc')).snapshotChanges();
	}



}
