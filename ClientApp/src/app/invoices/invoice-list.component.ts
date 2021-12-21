import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { Invoice } from "../models/invoice";
import { InvoiceService } from "../services/invoice.service";

@Component({
    selector: 'app-invoice-list',
    styleUrls: ['./invoice-list.component.scss'],
    templateUrl: './invoice-list.component.html'
})

export class InvoiceListComponent implements OnInit, AfterViewInit {
    constructor(
        private invoiceService: InvoiceService,
        private toastrService: ToastrService) { }

    isLoading: boolean = true
    loadingNameState: string = 'Loading...'

    // TODO.JW: Add more defs once we expand the object.
    displayedColumns: string[] = ['id', 'countryCode', 'productCode', 'quantity', 'price', 'totalCost', 'status']
    invoiceDataSource = new MatTableDataSource<Invoice>()
    invoiceTotalLength: number = 0

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.invoiceService.getInvoicesMock().subscribe(response => {
            this.invoiceTotalLength = response.total
            this.invoiceDataSource = new MatTableDataSource(response.items)
            this.isLoading = false
        },
            (error) => {
                this.isLoading = false
                this.toastrService.error('Failed to load table data.', 'Error')
            })
    }

    ngAfterViewInit() {
        // TODO.JW: Update the mat sort and paginator here
        this.invoiceDataSource.paginator = this.paginator;
        this.invoiceDataSource.sort = this.sort;
    }
}