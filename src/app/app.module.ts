import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShowsComponent } from "./shows/shows.component";
import { ErrorComponent } from "./error/error.component";

import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { DataService } from "./data.service";

const root: Routes = [
  { path: "", component: ShowsComponent },
  {
    path: "error",
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [AppComponent, ShowsComponent, ErrorComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(root, { enableTracing: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
