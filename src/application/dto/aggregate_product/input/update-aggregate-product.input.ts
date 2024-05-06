import {Field, InputType, PartialType} from "@nestjs/graphql";
import {CreateAggregateProductsInput} from "./create-aggregate-products.input";
import {IsNotEmpty} from "class-validator";

@InputType()
export class UpdateAggregateProductInput extends PartialType(CreateAggregateProductsInput){
    @Field(()=>String)
    @IsNotEmpty()
    id:string
}