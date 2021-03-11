import { Component, OnInit } from '@angular/core';
import { AdmincommonService } from '../admincommon.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private comser: AdmincommonService) {
         this.catget();
         this.subcatget();
         this.subsubcatget();
   }

  ngOnInit(): void {
  }

///getting operations
CatData:any = [];
SubcatData:any = [];
SubsubcatData:any = [];

catget(){
  this.comser.serCatsetter().subscribe((dt:any)=>{
     this.CatData = dt;
     if(this.CatData == null){
        this.comser.serCatgetter().subscribe((dt:any)=>{
           this.CatData = dt;
        })
     }
  })
}

subcatget(){
  this.comser.serSubcatSetter().subscribe((dt:any)=>{
      this.SubcatData = dt;
      if(this.SubcatData == null){
        this.comser.serSubcatGetter().subscribe((dt:any)=>{
          this.SubcatData = dt;
        })
      }
  })
}

subsubcatget(){
  this.comser.serSubsubcatSetter().subscribe((dt:any)=>{
    this.SubsubcatData = dt;
    if(this.SubsubcatData == null){
       this.comser.serSubsubcatGetter().subscribe((dt:any)=>{
           this.SubsubcatData = dt;
       })
    }
  })
}






prdtxt:string;
catTxt:string;
subtxt:string;
subsubtxt:string;
Products:object;

insert(){
   var obj = {
     ProductName: this.prdtxt,
     Cat_Id: this.catTxt,
     Subcat_Id: this.subtxt,
     Subsubcat_Id: this.subsubtxt
   }
   this.comser.serProductinsert(obj).subscribe((dt:any)=>{
     this.Products = dt;
     if(this.Products == null){
       alert('Not Insert')
     }else(
       alert('Inserted')
     )
   })
}















}
