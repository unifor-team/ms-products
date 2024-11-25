import { Injectable } from "@nestjs/common";
import { Products } from "@prisma/client";
import { ProductRepository } from "src/repository/Product";

@Injectable()
export class ProductService {
    constructor(private respository: ProductRepository) {}

    async listAll(): Promise<Products[]> {
        return this.respository.listAll();
    }
}