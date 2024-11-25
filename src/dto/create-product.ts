import { IsInt, IsNotEmpty, IsNumber, IsUUID, Length, Min } from "class-validator";

export class CreateProduct {
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @IsNotEmpty()
    @Length(1, 255)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    value: number;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    quantity: number;
}