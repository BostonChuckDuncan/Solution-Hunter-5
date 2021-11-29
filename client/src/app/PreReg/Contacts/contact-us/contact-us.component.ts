import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;
  isSubmitted: boolean;

  constructor(private fb: FormBuilder) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.contactUsForm = this.fb.group({
       email: ['', [Validators.required,
          Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
       phone: ['', Validators.pattern('^([1-9]{1}-)?[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
       message: ['', [Validators.required, Validators.minLength(10)]]
   });

  }

  get f() { return this.contactUsForm.controls; }

  submitContactUs() {
    this.isSubmitted = true;
    // let url = environment.apiUrl;
    // url = url + 'Contacts/SendNewMessage';

    // const msg = new UserSendMsg();
    // msg.email = this.f.email.value;
    // msg.phone = this.f.phone.value;
    // msg.message = this.f.message.value;

    // this.http.post(url, msg).subscribe(() => {
    //   console.log('OK');
    // });
  }

}
