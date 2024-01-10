import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Company} from "./Company"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'company-crud';
  compayList:Company[]=[]
  createCompany(cname:string,cgst:string){
   

    console.log(cname);
    console.log(cgst);

    
    this.compayList.push({"ComapnyName":cname,"CompanyGst":cgst})
    console.log(this.compayList);
  }
}
