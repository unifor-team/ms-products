import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { Products } from "@prisma/client";
import { CreateProduct } from "src/dto/create-product";
import { AuthGuard } from "src/guard/auth.guard";
import { ProductService } from "src/services/product.service";

@Controller("/api/products")
@UseGuards(AuthGuard)
export class ProductController {
    constructor(private service: ProductService) {}

    @Get()
    async findAll(): Promise<Products[]> {
        return await this.service.listAll();
    }

    @Post("/new")
    async create(@Body() body: CreateProduct) {
        return await this.service.create(body);
    }
}