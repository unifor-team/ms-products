import { Injectable } from "@nestjs/common";
import { Products } from "@prisma/client";
import { PrismaService } from "src/core/config";
import { Product } from "src/models/Product/Product";

@Injectable()
export class ProductRepository {
    constructor(private prisma: PrismaService) {}
    
    async insert(data: Product): Promise<Products> {
        return this.prisma.products.create({
            data
        });
    }

    async listAll(): Promise<Products[]> {
        return this.prisma.products.findMany();
    }

    async listById(id: string): Promise<Product | null> {
        const product = this.prisma.products.findUniqueOrThrow({
            where: { id }
        });

        if (!product) return null

        return product;
    }
}