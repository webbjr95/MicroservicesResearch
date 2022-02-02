import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { Order } from "../models/order";
import { OrderService } from "../services/order.service";

@Component({
    selector: 'app-order-list',
    styleUrls: ['./order-list.component.scss'],
    templateUrl: './order-list.component.html'
})

export class OrderListComponent implements OnInit, AfterViewInit {
    constructor(
        private orderService: OrderService,
        private toastrService: ToastrService) { }

    isLoading: boolean = true
    loadingNameState: string = 'Loading...'

    // TODO.JW: Add more defs once we expand the object.
    displayedColumns: string[] = ['id', 'countryCode', 'productCode', 'quantity', 'price', 'totalCost', 'status']
    orderDataSource = new MatTableDataSource<Order>()
    orderTotalLength: number = 0

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.orderService.getOrdersMock().subscribe(response => {
            this.orderTotalLength = response.total
            this.orderDataSource = new MatTableDataSource(response.items)
            this.isLoading = false
        },
            (error) => {
                this.isLoading = false
                this.toastrService.error('Failed to load table data.', 'Error')
            })
    }

    ngAfterViewInit() {
        // TODO.JW: Update the mat sort and paginator here
        this.orderDataSource.paginator = this.paginator;
        this.orderDataSource.sort = this.sort;
    }
}