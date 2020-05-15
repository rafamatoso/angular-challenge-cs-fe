import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input("userName") userName: string;
  form: any;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userName = this.userName ? this.userName : "";
    this.form = this.formBuilder.group({
      userName: this.userName,
    });
  }

  onKey(event: any) {
    this.userName = event.target.value;
  }

  onSubmit(): void {
    this.router.navigate(["/result", this.userName]);
  }
}
