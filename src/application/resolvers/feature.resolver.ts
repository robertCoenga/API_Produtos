import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Feature} from "../models/feature.model";
import {GetFeatureArgs} from "../dto/feature/args/get-feature.args";
import {FeatureService} from "../service/feature.service";
import {CreateFeatureInput} from "../dto/feature/input/create-feature.input";
import {UpdateFeatureInput} from "../dto/feature/input/update-feature.input";
import {DeleteFeatureInput} from "../dto/feature/input/delete-feature.input";

@Resolver()
export class FeatureResolver{
    constructor(
        private featureService: FeatureService
    ) {
    }
    @Query(()=>Feature)
    getFeature(@Args()getFeatureData: GetFeatureArgs):Promise<Feature>{
        return this.featureService.getFeature(getFeatureData);
    }

    @Query(()=>[Feature])
    getFeatures():Promise<Feature[]>{
        return this.featureService.getFeatures();
    }

    @Mutation(()=> Feature)
    createFeature(@Args('createFeatureData')createFeatureData: CreateFeatureInput): Promise<Feature>{
        return this.featureService.createFeature(createFeatureData);
    }
    @Mutation(()=> Feature)
    updateFeature(@Args('updateFeatureData')updateFeatureData: UpdateFeatureInput): Promise<Feature>{
        return this.featureService.updateFeature(updateFeatureData);
    }
    @Mutation(()=> Feature)
    deleteFeature(@Args('deleteFeatureData')deleteFeatureData: DeleteFeatureInput): Promise<Feature>{
        return this.featureService.deleteFeature(deleteFeatureData);
    }
}