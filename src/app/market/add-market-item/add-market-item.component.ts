import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MarketItem } from "../models/MarketItem";
import { MarketService } from "../services/market.service";

@Component({
    selector: 'app-market-item',
    templateUrl: './add-market-item.component.html'
})

export class AddMarketItemComponent implements OnInit {

    marketForm: FormGroup;
    item: MarketItem;

    constructor(
        private formBuilder: FormBuilder,
        private marketService: MarketService
    ) {}

    ngOnInit(): void {
        this.marketForm = this.formBuilder.group({
            marketItem: ['']
        });
    }

    onSubmit() {
    }
}