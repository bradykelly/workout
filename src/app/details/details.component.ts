import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;
    book: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.subscription = this.route.queryParams.subscribe(params => {
            this.updateDetails(params);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateDetails(book: any) {
        this.book = book;
    }
}
