import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Feature{
    @Field(()=>ID)
    id: string
    @Field(()=>String)
    description: string
    @Field(()=>String)
    productId: string
}