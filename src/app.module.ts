import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repository/Product';
import { PrismaService } from './core/config';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, PrismaService],
})
export class AppModule {}
