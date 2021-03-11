import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AdmincommonService } from '../admincommon.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private comser:AdmincommonService) {
         this.catget();
   }

  ngOnInit(): void {
  }
category:object;

catText:string;

insert(){
  var obj = {CategoryName: this.catText};
   this.comser.serCatinsert(obj).subscribe((dt:any)=>{
       this.category = dt;
       if(dt.resp == 0){
         alert('not inserted')
       }else{
         alert('inserted')
         this.catText = "";
         this.catget();
       }
   })
}


catget(){
  this.comser.serCatsetter().subscribe((dt:any)=>{
     this.category = dt;
     if(this.category == null){
        this.comser.serCatgetter().subscribe((dt:any)=>{
            this.category = dt;
        })
     }
  })
}


editText:string;
tempid:number = 0;

catedit(edit){
   this.tempid = edit._id;
   this.editText = edit.CategoryName;
   alert(this.editText)
}

update(){
  var obj = [
    {_id:this.tempid},
    {CategoryName:this.editText}
  ]
  this.comser.serCatupdate(obj).subscribe((dt:any)=>{
     if(dt.resp == 0){
       alert('not update');
     }else{
       alert('updated');
       this.tempid = 0;
       this.editText = "";
       this.catget();
     }
  })
}

delete(catid){
  var obj = {_id:catid};
  this.comser.serCatdelete(obj).subscribe((dt:any)=>{
       if(dt.resp == 0){
         alert('not delete')
       }else{
         alert('deleted')
         this.catget();
       }
  })
}














}
