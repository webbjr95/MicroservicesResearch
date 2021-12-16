import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-loading-spinner',
  styleUrls: ['./loading-spinner.component.scss'],
  templateUrl: './loading-spinner.component.html'
})

export class LoadingSpinnerComponent implements OnInit {
  constructor() { }

  @Input() loadingNameState: string

  ngOnInit() { }
}
