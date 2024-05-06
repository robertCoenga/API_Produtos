import {Field, InputType, PartialType} from "@nestjs/graphql";
import {CreateFeatureInput} from "./create-feature.input";

@InputType()
export class UpdateFeatureInput extends PartialType(CreateFeatureInput){
    @Field(()=>String)
    id:string
}