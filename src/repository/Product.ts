import { BadRequestException, Injectable } from "@nestjs/common";
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

    async listById(id: string): Promise<Products | null> {
        const product = this.prisma.products.findUniqueOrThrow({
            where: { id }
        });

        if (!product) return null;

        return product;
    }

    async update(data: Partial<Product>, id: string): Promise<Products | null> {
        const product = this.prisma.products.findUniqueOrThrow({
            where: { id }
        }); 

        if (!product) throw new BadRequestException("Produto não existente.");

        return this.prisma.products.update({
            where: { id },
            data
        });
    }
}