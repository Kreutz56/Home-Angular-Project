import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarketAppComponent } from "./market.app.component";


const marketRouterConfig: Routes = [
    { path: '', component: MarketAppComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(marketRouterConfig),
    ],
    exports: [RouterModule]
})

export class MarketRouterModule { }
