import {Injectable} from "@nestjs/common";
import {PrismaService} from "../infra/data/prisma.service";
import {Feature} from "../models/feature.model";
import { v4 as uuidv4 } from 'uuid';
import {CreateFeatureInput} from "../dto/feature/input/create-feature.input";
import {UpdateFeatureInput} from "../dto/feature/input/update-feature.input";
import {GetFeatureArgs} from "../dto/feature/args/get-feature.args";
import {DeleteFeatureInput} from "../dto/feature/input/delete-feature.input";

@Injectable()
export class FeatureService{
    constructor(private readonly prisma: PrismaService) {}
    async getFeature(getFeatureData: GetFeatureArgs):Promise<Feature>{
        return this.prisma.feature.findFirst({where: {id: getFeatureData.id}})
    }
    async getFeatures():Promise<Feature[]>{
        return this.prisma.feature.findMany()
    }
    async getFeatureByProductId(productId:string):Promise<Feature[]>{
        return  this.prisma.feature.findMany({where:{productId}})
    }
    async createFeature(createFeatureData: CreateFeatureInput):Promise<Feature>{
        return this.prisma.feature.create({
            data:{
                id:uuidv4(),
                ...createFeatureData
            }
        })
    }
    async updateFeature(updateFeatureData: UpdateFeatureInput):Promise<Feature>{
        return this.prisma.feature.update({
            where:{
                id:updateFeatureData.id
            },
            data:updateFeatureData
        })
    }
    async deleteFeature(deleteFeatureData: DeleteFeatureInput):Promise<Feature>{
        return this.prisma.feature.delete({where:{id:deleteFeatureData.id}})
    }
}