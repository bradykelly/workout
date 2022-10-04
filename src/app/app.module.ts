import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { OKTA_CONFIG, OktaAuthModule } from "@okta/okta-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";

const oktaConfig = {
    issuer: "https://dev-48334890.okta.com/oauth2/default",
    clientId: "0oa6qd012esXmHaQ05d7",
    redirectUri: window.location.origin + "/callback"
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        OktaAuthModule
    ],
    providers: [
        {provide: OKTA_CONFIG, useValue: oktaConfig}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    aFuntion() {

    }
}
