import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@InputType()
export class DeleteAggregateProductInput{
    @Field(()=>String)
    @IsNotEmpty()
    id: string
}