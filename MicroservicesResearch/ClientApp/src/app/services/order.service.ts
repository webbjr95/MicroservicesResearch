import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Order } from "../models/order";
import { OrderListViewResponse } from "../models/responses/order-list-view-response";

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<OrderListViewResponse> {
    // TODO.JW: Might need to extend this based on the sort, page, and filter.
    const baseUrl = environment.apiSettings.orderUrl
    const href = `${baseUrl}/GetOrders`

    return this.httpClient.get<OrderListViewResponse>(href);
  }

  getOrdersMock(): Observable<OrderListViewResponse> {
    const numOfItems = 24

    var response = new OrderListViewResponse()
    response.total = numOfItems

    for (let index = 0; index < numOfItems; index++) {
      const id = Math.floor(100000 + Math.random() * 900000)
      response.items.push(new Order(id.toString()))
    }

    return of(response)
  }
}