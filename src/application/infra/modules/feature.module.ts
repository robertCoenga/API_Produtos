import {Module} from "@nestjs/common";
import {FeatureResolver} from "../../resolvers/feature.resolver";
import {FeatureService} from "../../service/feature.service";

@Module({
    providers:[FeatureResolver,FeatureService],
    exports:[FeatureResolver, FeatureService],
})
export class FeatureModule{}