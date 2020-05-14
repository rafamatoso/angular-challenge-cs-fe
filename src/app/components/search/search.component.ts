import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  userName: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = this.userName ? this.userName : "";
  }

  onKey(event: any) {
    this.userName = event.target.value;
  }

  onSubmit(): void {
    this.router.navigate(["/result", this.userName]);
  }
}
