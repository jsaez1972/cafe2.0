export interface Order {
  id: number;
  idVendor: number;
  tableNumber: number;
  comments: string;
  total: number;
  tip: number;
  status: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
}
