export interface IResponse {
  count: number;
}

export interface IProduct {
  _id: string;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: string;
}

export type ProductsResponse = IResponse & { products: IProduct[] };


export type QueryProducts = Record<string, string | string[]>;
