import { Order } from "../order";
import { ListViewPagedResponse } from "./list-view-paged-response";

export class OrderListViewResponse implements ListViewPagedResponse<Order> {
    items: Order[] = []
    total: number
}