
import { ALL_PRODUCTS } from "@app/pages/signals-shop/data/all-products";
import { Product } from "@app/pages/signals-shop/types/product.model";

export interface ProductItemVm extends Product {
    readonly quantity: number;
}


export const sampleProductItems: ProductItemVm[] = ALL_PRODUCTS
    .slice(0, 5)
    .map((product, index) => ({
        ...product,
        quantity: index % 3
    }))
