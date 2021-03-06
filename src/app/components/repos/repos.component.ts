import { Component, OnInit, Input, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.scss"],
})
export class ReposComponent implements OnInit {
  @Input() repo: any;

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {}

  goToGitHubRepo(): void {
    const baseUrl: string = "https://github.com/";
    this.document.location.href = `${baseUrl}${this.repo.full_name}`;
  }
}
