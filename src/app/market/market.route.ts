import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddMarketItemComponent } from "./add-market-item/add-market-item.component";
import { MarketAppComponent } from "./market.app.component";


const marketRouterConfig: Routes = [
    { path: '', component: MarketAppComponent, children: [
        { path: 'add', component: AddMarketItemComponent }
    ] },
]

@NgModule({
    imports: [
        RouterModule.forChild(marketRouterConfig),
    ],
    exports: [RouterModule]
})

export class MarketRouterModule { }
