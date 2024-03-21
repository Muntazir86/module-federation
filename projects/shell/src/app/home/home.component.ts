import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib'
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedLibService) { }

  ngOnInit() {
    this.sharedService.from = "Lahore";
    this.sharedService.to = "Islamabad";
  }

}
