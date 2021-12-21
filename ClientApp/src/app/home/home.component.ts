import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() { }

  isLoading: boolean = true
  loadingNameState: string = 'Application loading...'

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  }
}
