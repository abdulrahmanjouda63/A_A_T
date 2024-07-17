import { Component, OnInit } from '@angular/core';
import { ObservableInputTuple } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userName:string = '';
  userAge:string = '';
  userEmail:string = '';
  userPassword:string = '';
  ngOnInit(): void {
    
  }

}
