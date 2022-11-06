import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddMarketItemComponent } from "./add-market-item/add-market-item.component";
import { MarketAppComponent } from "./market.app.component";
import { MarketRouterModule } from "./market.route";
import { MarketService } from "./services/market.service";


@NgModule({
    declarations: [
        MarketAppComponent,
        AddMarketItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MarketRouterModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        MarketService
    ]
})

export class MarketModule {}