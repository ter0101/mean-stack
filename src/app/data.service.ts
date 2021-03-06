import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: Http) {}

  getBuilding() {
    return this.http.get("/api/show").pipe(
      map(
        res => res.json(),
        catchError(err => {
          return throwError(err);
        })
      )
    )
  }
  getBuildingAndRoom(id: String) {
    return this.http.get("/api/show/" + id).pipe(map(res => res.json()));
  }
}
