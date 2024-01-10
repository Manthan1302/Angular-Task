import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from "../Company"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() list: Company[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteComapny(ComapnyName: string) {
    console.log(ComapnyName);

    let index = this.list.findIndex(ele => ele.ComapnyName === ComapnyName);
    console.log(index);
    if (index !== -1) {
      this.list
    }

  }
}
