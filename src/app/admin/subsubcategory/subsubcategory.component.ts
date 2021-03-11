import { Component, OnInit } from '@angular/core';
import { AdmincommonService } from '../admincommon.service';

@Component({
  selector: 'app-subsubcategory',
  templateUrl: './subsubcategory.component.html',
  styleUrls: ['./subsubcategory.component.scss']
})
export class SubsubcategoryComponent implements OnInit {

  constructor(private comser:AdmincommonService) {
          this.SubcatGet();
          this.SubsubcatGet();
   }

  ngOnInit(): void {
  }

subsubcategory:object;

subsubtxt:string;
subtxt:string;

insert(){
   var obj = {
     SubsubcategoryName: this.subsubtxt,
     Subcat_Id: this.subtxt,
   }
   this.comser.serSubsubcatinsert(obj).subscribe((dt:any)=>{
       this.subsubcategory = dt;
       if(this.subsubcategory == null){
         alert('Not insert')
       }else{
         alert('Inserted')
         this.subsubtxt = '';
         this.subtxt = '';
         this.SubsubcatGet();
       }
   })
}


SubcatData:any = [];

SubcatGet(){
  this.comser.serSubcatSetter().subscribe((dt:any)=>{
     this.SubcatData = dt;
     if(this.SubcatData == null){
       this.comser.serSubcatGetter().subscribe((dt:any)=>{
          this.SubcatData = dt;
       })
     }
  })
}

SubsubcatData:any = [];

SubsubcatGet(){
   this.comser.serSubsubcatSetter().subscribe((dt:any)=>{
       this.SubsubcatData = dt;
       if(this.SubsubcatData == null){
         this.comser.serSubsubcatGetter().subscribe((dt:any)=>{
            this.SubsubcatData = dt;
         })

       }
   })
}

//edit
subsubtempid:number=0;
subsubedittxt:string
subedittxt:string;
SubsubEdit(subsub){
   this.subsubtempid = subsub._id,
   this.subsubedittxt = subsub.SubsubcategoryName,
   this.subedittxt = subsub.Subcat_Id
   //alert(this.subsubedittxt)

}


Update(){
  var obj = [
    {_id:this.subsubtempid},
    {SubsubcategoryName: this.subsubedittxt, Subcat_Id: this.subedittxt}
  ]
  this.comser.serSubsubcatupdate(obj).subscribe((dt:any)=>{
      if(dt.resp == 0){
        alert('Not Update')
      }else{
        alert('Updated')
        this.subsubtempid = 0;
        this.subsubedittxt = '';
        this.subedittxt='';
        this.SubsubcatGet();
      }
  })
}


Delete(subsubid){
  var obj = {_id:subsubid};
  alert(subsubid)
  this.comser.serSubsubcatdelete(obj).subscribe((dt:any)=>{
    if(dt.resp == 0){
      alert('Not Delete')
    }else{
      alert('Deleted')
      this.SubsubcatGet();
    }
  })
}





}
