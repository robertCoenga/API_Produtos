import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@InputType()
export class CreateAggregateProductsInput{
    @Field(()=>String)
    @IsNotEmpty()
    productId:string
}