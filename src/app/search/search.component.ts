import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "../books/books.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;

    displayedColumns: string[] = ["title", "author", "publication", "details"];
    books = new MatTableDataSource<any>();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookService: BooksService) {
    }

    ngOnInit(): void {
        this.subscription = this.route.queryParams.subscribe(params => {
            this.searchBooks(params['query']);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    async searchBooks(query: string) {
        const results = await this.bookService.searchBooks(query);
        this.books.data = results.docs;
    }

    viewDetails(book: any) {
        console.log("Book: " + book);
        this.router.navigate(['details'], { queryParams: {
                title: book.title,
                authors: book.author_name && book.author_name.join(', '),
                year: book.first_publish_year,
                cover_id: book.cover_edition_key
            }});
    }
}
