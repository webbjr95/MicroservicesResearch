import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Invoice } from "../models/invoice";
import { InvoiceListViewResponse } from "../models/responses/invoice-list-view-response";

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  constructor(private httpClient: HttpClient) { }

  getInvoices(): Observable<any> {
    const baseUrl = environment.apiSettings.invoiceUrl
    const href = `${baseUrl}/GetInvoices`

    return this.httpClient.get<any>(href);
  }

  getInvoicesMock(): Observable<InvoiceListViewResponse> {
    const numOfItems = 76

    var response = new InvoiceListViewResponse()
    response.total = numOfItems

    for (let index = 0; index < numOfItems; index++) {
      const id = Math.floor(100000 + Math.random() * 900000)
      response.items.push(new Invoice(id.toString()))
    }

    return of(response)
  }
}