import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() { }

  isLoading: boolean = true
  loadingNameState: string = 'Application loading...'

  ngOnInit() {
    // TODO.JW: Remove timeout once done testing and when we're ready for demos.
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  }
}
