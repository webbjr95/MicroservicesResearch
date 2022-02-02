import { Invoice } from "../invoice";
import { ListViewPagedResponse } from "./list-view-paged-response";

export class InvoiceListViewResponse implements ListViewPagedResponse<Invoice> {
    items: Invoice[] = []
    total: number
}