import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { NgFor } from '@angular/common';
 
@Component({
  selector: 'app-galary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './galary.component.html',
  styleUrl: './galary.component.css'
})
export class GalaryComponent implements OnInit 
{
  constructor(public dbs: DbserviceService) { }
  myprod:any=[];
  ngOnInit(): void {
    this.dbs.getAllProducts().subscribe(res=>{
      this.myprod=res;
      
    },err=>{});
  
  }
  

}
