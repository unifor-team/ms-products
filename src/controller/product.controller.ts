import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
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

    @Get()
    async findById(@Param("id") id: string): Promise<Products | null> {
        return await this.service.listById(id);
    }

    @Post("/new")
    async create(@Body() body: CreateProduct): Promise<Products> {
        return await this.service.create(body);
    }

    @Put("/{id}")
    async update(@Body() body: Partial<CreateProduct>, @Param("id") id: string): Promise<Products | null> {
        return await this.service.update(body, id)
    }
}