import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  @Input() visitor : Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
