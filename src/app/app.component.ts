import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'books-pwa';
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

    onSearch(): void {
        if (!this.searchForm.valid) { return; }
        this.router.navigate(['search'], { queryParams: {query: this.searchForm.get('search')!.value}});
    }
}
