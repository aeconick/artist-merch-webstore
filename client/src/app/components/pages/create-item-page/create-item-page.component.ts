import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

import { ICreateItem } from 'src/app/shared/interfaces/ICreateItem';

@Component({
  selector: 'app-create-item-page',
  templateUrl: './create-item-page.component.html',
  styleUrls: ['./create-item-page.component.css'],
})
export class CreateItemPageComponent implements OnInit {
  createItemForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.createItemForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', Validators.required],
      tags: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get fc() {
    return this.createItemForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.createItemForm.invalid) return;

    const fv = this.createItemForm.value;

    const tagsArr = fv.tags.split(',');

    const item: ICreateItem = {
      name: fv.name,
      price: Number(fv.price),
      tags: tagsArr,
      imageUrl: fv.imageUrl,
      description: fv.description,
    };

    // this.userService.register(user).subscribe((_) => {
    //   this.router.navigateByUrl(this.returnUrl);
    // });
    this.itemService.createItem(item).subscribe((_) => {
      this.router.navigateByUrl('/');
    });
  }
}
