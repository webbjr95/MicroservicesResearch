import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-nav-menu',
  styleUrls: ['./nav-menu.component.scss'],
  templateUrl: './nav-menu.component.html'
})

export class NavMenuComponent implements OnInit {
  constructor(
    private toastrService: ToastrService,
    private validationService: ValidationService
  ) { }

  homeRoute: string = ''
  invoiceListRoute: string = '/invoices'
  orderListRoute: string = '/orders'

  searchForm: FormGroup

  ngOnInit() {
    this.setupSearchForm()
  }

  setupSearchForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required, this.validationService.identifierSearch()])
    })
  }

  onSubmit() {
    if (!this.searchForm.valid)
      return this.toastrService.error('Invalid identifier for search.', 'Error')

    this.toastrService.success('TODO.JW: Update the submit.', 'Success')
  }
}
