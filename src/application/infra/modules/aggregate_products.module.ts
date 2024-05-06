import {Module} from "@nestjs/common";
import {AggregateProductResolver} from "../../resolvers/aggregate_product.resolver";
import {AggragateProductService} from "../../service/aggragate_product.service";

@Module({
    providers: [AggregateProductResolver,AggragateProductService],
    exports: [AggregateProductResolver,AggragateProductService]
})

export class AggregateProductsModule {}