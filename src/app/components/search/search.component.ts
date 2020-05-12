import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() userName: string;
  form: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: [(this.userName ? this.userName : '')]
    })
  }

  onSubmit(): void {
    this.router.navigate(['/result', this.form.value.userName])
  }
}
