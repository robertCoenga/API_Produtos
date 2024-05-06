import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Aggregate_Product} from "@prisma/client";
import {GetAggregateProductArgs} from "../dto/aggregate_product/args/get-aggregate-product.args";
import {AggregateProduct} from "../models/aggregate_product.model";
import {CreateAggregateProductsInput} from "../dto/aggregate_product/input/create-aggregate-products.input";
import {UpdateAggregateProductInput} from "../dto/aggregate_product/input/update-aggregate-product.input";
import {DeleteAggregateProductInput} from "../dto/aggregate_product/input/delete-aggregate-product.input";
import {AggragateProductService} from "../service/aggragate_product.service";

@Resolver()
export class AggregateProductResolver{
    constructor(private aggragate_productService: AggragateProductService) {}

    @Query(()=>AggregateProduct)
    async getAggragateProduct(@Args()getAggregateProductData: GetAggregateProductArgs):Promise<AggregateProduct>{
        return await this.aggragate_productService.getAggragateProduct(getAggregateProductData);
    }

    @Query(()=>[AggregateProduct])
    async getAggragateProducts():Promise<Aggregate_Product[]>{
        return await this.aggragate_productService.getAggragateProducts()
    }

    @Mutation(()=>AggregateProduct)
    async createAggragateProduct(@Args('createAggregateProductData')createAggregateProductData: CreateAggregateProductsInput):Promise<AggregateProduct>{
        return await this.aggragate_productService.createAggragateProduct(createAggregateProductData);
    }

    @Mutation(()=>AggregateProduct)
    async updateAggragateProduct(@Args('updateAggregateProductData')updateAggregateProductData: UpdateAggregateProductInput):Promise<AggregateProduct>{
        return await this.aggragate_productService.updateAggragateProduct(updateAggregateProductData);
    }

    @Mutation(()=>AggregateProduct)
    async deleteAggragateProduct(@Args('deleteAggregateProductData')deleteAggregateProductData: DeleteAggregateProductInput):Promise<AggregateProduct>{
        return await this.aggragate_productService.deleteAggragateProduct(deleteAggregateProductData);
    }
}