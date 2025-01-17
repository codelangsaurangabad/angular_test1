import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  address = environment.flyviewDetails.address
contact = environment.flyviewDetails.contact
email = environment.flyviewDetails.email

}
