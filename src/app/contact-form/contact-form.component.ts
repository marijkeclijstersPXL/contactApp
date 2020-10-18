import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  isFavorite = false;
  form: FormGroup;

  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();
  constructor() { }


  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required,
        Validators.pattern(/^[a-z0-9_.]+@[a-z0-9_.]+/i)]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(9)]),
      'isFavorite': new FormControl(false),
      'avatar': new FormControl(null)
    });
  }

  submit(form): void {
    const contact: Contact = new Contact(
      form.value.name,
      form.value.email,
      form.value.phone,
      form.value.isFavorite,
      form.value.avatar
    );
    form.reset();
    this.onSubmit.emit(contact);
  }

}
