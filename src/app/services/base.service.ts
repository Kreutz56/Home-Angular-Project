import { HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { throwError } from "rxjs";

export abstract class BaseService {
    protected UrlServiceV1: string = "https://localhost:3000/users";

    protected getJsonHeader() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === "Unknown Error") {
                customError.push("An unknown error happened");
                response.error.errors = customError;
            }
        }

        return throwError(() => response);
    }
}