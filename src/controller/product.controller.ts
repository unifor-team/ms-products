import { Controller, Get } from "@nestjs/common";
import { Products } from "@prisma/client";
import { ProductService } from "src/services/product.service";

@Controller("/api")
export class ProductController {
    constructor(private service: ProductService) {}

    @Get("/products")
    async findAll(): Promise<Products[]> {
        return await this.service.listAll();
    }
}