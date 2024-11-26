import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repository/Product';
import { PrismaService } from './core/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, PrismaService, JwtService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }],
})
export class AppModule {}
