import { IsArray, IsNumber, Min } from 'class-validator';
export class FindPackagesByProductDto {
  @IsArray()
  cartItems: CartItem[];
}
class CartItem {
  asnid: string;
  price: Price;
}

class Price {
  @IsNumber()
  @Min(0)
  amount: number;
  currency: string;
}
