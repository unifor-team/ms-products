import { Controller, Get } from "@nestjs/common";
import { ProductService } from "src/services/product.service";

@Controller()
export class ProductController {
    constructor(private service: ProductService) {}

    @Get("products")
    async findAll() {
        return this.service.listAll();
    }
}