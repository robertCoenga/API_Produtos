import {ArgsType, Field} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@ArgsType()
export class GetFeatureArgs{
    @Field(()=>String)
    @IsNotEmpty()
    id:string
}