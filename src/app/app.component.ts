import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Company } from "./Company"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'company-crud';
  compayList = [{cname:"man",cgst:"asd"}]
  createCompany(data:NgForm) {
    console.log(data);
    
    this.compayList.push({ 
      cname: data.form.value.cname, cgst: data.form.value.cgst})
    console.log(this.compayList);
  }
}
