
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit{
  @Input() contact: Contact;
  // @Input() index: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private service: ContactService) {
  }

  ngOnInit() {
  }

  toggleFavorite(id: string, isFavorite: boolean): void {
    this.service.upDateContact(id, {isFavorite}).subscribe(() => this.onUpdate.emit());
    this.onUpdate.emit();
  }
}
