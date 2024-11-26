import { Injectable } from "@nestjs/common";
import { Products } from "@prisma/client";
import { CreateProduct } from "src/dto/create-product";
import { Product } from "src/models/Product/Product";
import { ProductRepository } from "src/repository/Product";

@Injectable()
export class ProductService {
    constructor(private respository: ProductRepository) {}

    async listAll(): Promise<Products[]> {
        return this.respository.listAll();
    }

    async listById(id: string): Promise<Products | null> {
        return this.respository.listById(id);
    }

    async create(params: CreateProduct): Promise<Products> {
        const product = Product.build(
            params.userId,
            params.name,
            params.value,
            params.quantity
        )
        return this.respository.insert(product);
    }

    async update(params: Partial<CreateProduct>, id: string): Promise<Products | null> {
        const product = Product.build(
            params.userId,
            params.name,
            params.value,
            params.quantity
        )

        return this.respository.update(product, id);
    }

}