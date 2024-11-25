import { randomUUID } from "crypto";

export class Product {
    public id: string;
    public user_id: string;
    public name: string;
    public value: number;
    public quantity: number;
    public sold: boolean;
    public created_at: Date;
    public updated_at?: Date;
    public deleted_at?: Date;

    constructor(user_id: string, name: string, value: number, quantity: number){
        this.id = randomUUID();
        this.name = name;
        this.value = value;
        this.quantity = quantity;
        this.created_at = new Date();
        this.user_id = user_id;
        this.sold = false;
     }

     public static build(user_id: string, name: string, value: number, quantity: number) {
        return new Product(user_id, name, value, quantity);
     }
}