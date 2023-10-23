import { Order } from "./order";

export interface OrderPagedList {
  totalRows: number;
  rows: Order[];
}
