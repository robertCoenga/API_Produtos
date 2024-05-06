import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@InputType()
export class DeleteFeatureInput{
    @Field(()=>String,{nullable:false})
    @IsNotEmpty()
    id:string;
}