import {ArgsType, Field} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@ArgsType()
export class GetAggregateProductArgs{
    @Field(()=>String)
    @IsNotEmpty()
    id:string
}