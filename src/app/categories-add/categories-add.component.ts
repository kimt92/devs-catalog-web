import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,FormGroup } from '@angular/forms';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  constructor(private catService: CategoriesService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.catService.addCategory(form)
      .subscribe(res => {
      console.log('cool');
        }, (err) => {
          console.log(err);

        });

      console.log(form);
  }

}
