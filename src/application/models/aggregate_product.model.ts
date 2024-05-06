import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Aggregate_Product as Aggregate_ProductDB} from "@prisma/client"

@ObjectType()
export class AggregateProduct{
    @Field(()=>ID, {nullable:false})
    id: Aggregate_ProductDB['id']
    @Field(()=>String, {nullable:false})
    productId: Aggregate_ProductDB['productId']
}