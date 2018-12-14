import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  id: String;
  result: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.onload(this.id);
  }

  ngOnInit() {}

  onload(id: String) {
    this.dataService.getBuildingAndRoom(id).subscribe(res => {
      this.result = res;
      console.log(this.result);
    });
  }
}
