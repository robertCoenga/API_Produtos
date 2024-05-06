import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@InputType()
export class CreateFeatureInput{
    @Field(()=>String,{nullable:false})
    @IsNotEmpty()
    description: string
    @Field(()=>String,{nullable:false})
    @IsNotEmpty()
    productId:string
}