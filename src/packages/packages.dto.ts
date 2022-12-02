import { IsArray, IsNumber, Min } from 'class-validator';
export class FindPackagesByProductDto {
  @IsArray()
  cartItems: CartItem[];
}
class CartItem {
  asin: string;
  url: string;
  price: Price;
  @IsNumber()
  @Min(1)
  qty: number;
  title: string;
}

class Price {
  @IsNumber()
  @Min(0)
  amount: number;
  currency: string;
}
