import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModulesService } from 'src/app/services/modules.service';
import { Modules } from 'src/app/models/modules.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-modules',
  templateUrl: './all-modules.component.html',
  styleUrls: ['./all-modules.component.css']
})
export class AllModulesComponent implements OnInit {

	modules: any;

	constructor(
		public db: AngularFirestore,
		public formBuilder: FormBuilder,
		public modulesService: ModulesService,
		) { }

	ngOnInit(): void {

		//read Posts
		this.modulesService.getModules().subscribe((data:any) => {
			this.modules = data.map((e:any)=>{
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as {}),
				} as Modules;
			});
		});
	}

}
