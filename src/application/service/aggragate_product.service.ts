import {Injectable} from "@nestjs/common";
import {PrismaService} from "../infra/data/prisma.service";
import {Aggregate_Product} from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import {GetAggregateProductArgs} from "../dto/aggregate_product/args/get-aggregate-product.args";
import {CreateAggregateProductsInput} from "../dto/aggregate_product/input/create-aggregate-products.input";
import {UpdateAggregateProductInput} from "../dto/aggregate_product/input/update-aggregate-product.input";
import {DeleteAggregateProductInput} from "../dto/aggregate_product/input/delete-aggregate-product.input";
import {AggregateProduct} from "../models/aggregate_product.model";

@Injectable()
export class AggragateProductService{
    constructor(private readonly prisma:PrismaService) {}

    async getAggragateProduct(getAggregateProductData: GetAggregateProductArgs):Promise<AggregateProduct>{
        return this.prisma.aggregate_Product.findFirst({where:{id:getAggregateProductData.id}});
    }
    async getAggragateProducts():Promise<AggregateProduct[]>{
        return this.prisma.aggregate_Product.findMany();
    }
    async createAggragateProduct(createAggregateProductData: CreateAggregateProductsInput):Promise<AggregateProduct>{
        return this.prisma.aggregate_Product.create({
            data:{
                id: uuidv4(),
                ...createAggregateProductData
            }
        });
    }
    async updateAggragateProduct(updateAggregateProductData: UpdateAggregateProductInput):Promise<AggregateProduct>{
        return this.prisma.aggregate_Product.update({
            where: {id:updateAggregateProductData.id},
            data: updateAggregateProductData
        })
    }
    async deleteAggragateProduct(deleteAggregateProductData: DeleteAggregateProductInput):Promise<Aggregate_Product>{
        return this.prisma.aggregate_Product.delete({where:{id:deleteAggregateProductData.id}});
    }
}