import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class BooksService {

    private baseUrl = "http://openlibrary.org";

    constructor(private http: HttpClient) {
    }

    async get(route: string, data?: any) {
        const url = `${this.baseUrl}/${route.replace(/^\//, "")}`;
        let params = new HttpParams();

        if (data !== undefined) {
            Object.getOwnPropertyNames(data).forEach(key => {
                params = params.append(key, data[key]);
            });
        }

        const result = this.http.get(url, {responseType: "json", params});

        return new Promise<any>((resolve, reject) => {
            result.subscribe(resolve, reject);
        });
    }

    searchBooks(query: string) {
        return this.get("/search.json", {title: query});
    }
}
