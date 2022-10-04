import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from "@okta/okta-angular";
import { AuthState, OktaAuth } from '@okta/okta-auth-js';
import { filter, map, Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'books-pwa';
  searchForm!: FormGroup;
  isAuthenicated$: Observable<boolean>;

  constructor(private fb: FormBuilder, private router: Router, @Inject(OKTA_AUTH)  private oktaAuth: OktaAuth, public oktaAuthStateService: OktaAuthStateService) {  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
      this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
          filter((s: AuthState) => !!s),
          map((s: AuthState) => s.isAuthenticated ?? false)
      );
  }

    onSearch(): void {
        if (!this.searchForm.valid) { return; }
        this.router.navigate(['search'], { queryParams: {query: this.searchForm.get('search')!.value}});
    }
}
