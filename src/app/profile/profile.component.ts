import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile =[
    {
        Name: "ABC",
        Email_Id: "a@gmail.com",
        Country: "India"
    },
    {
        Name: "DEF",
        Email_Id: "d@gmail.com",
        Country: "USA"
    },
    {
        Name: "XYZ",
        Email_Id: "x@gmail.com",
        Country: "China"
  }
  ]
  constructor() { }

  ngOnInit() {
  }
  
}
