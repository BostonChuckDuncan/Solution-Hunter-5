import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ConsultingComponent } from './consultingSAVE/consulting.component';
import { SupportComponent } from './support/support.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    ConsultingComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AboutUsComponent,
    ContactUsComponent,
    ConsultingComponent,
    SupportComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
