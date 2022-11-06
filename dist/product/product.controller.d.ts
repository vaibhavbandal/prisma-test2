import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    all(): Promise<import(".prisma/client").Product[]>;
}
