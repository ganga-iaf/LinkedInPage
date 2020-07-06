import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }

  Visitors : Array<any> = [{Name:'Bradon Wilson',Designation:'Senior UX Designer',Avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU'},
  {Name:'Kyle Fisher',Designation:'Product Designer',Avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU'},
  {Name:'Darlene Black',Designation:'HR Manager',Avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU'},
  {Name:'Jessi Lemo',Designation:'Senior UI Designer',Avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU'}
  ]

}
