import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { MarketItem } from "../models/MarketItem";


@Injectable()

export class MarketService extends BaseService {
    constructor(private http: HttpClient) { super(); }

    addItemToMarketList(item: MarketItem): Observable<MarketItem> {
        let response = this.http
            .post(this.UrlServiceV1 + 'market', item, this.getJsonHeader())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
        return response;
    }
}