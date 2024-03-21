import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent implements OnInit {

  constructor(private sharedService: SharedLibService) { }
  from: string;
  to: string;
  ngOnInit(): void {
    this.from = this.sharedService.from;
    this.to = this.sharedService.to;
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}
