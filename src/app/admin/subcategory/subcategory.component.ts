import { Component, OnInit } from '@angular/core';
import { AdmincommonService } from '../admincommon.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
   subcategory:object;
  constructor(private comser: AdmincommonService) {
         // this.getcatdata();
          this.subcatget();
   }

  ngOnInit(): void {
  }
////catdata get
// getcatdata(){
//   this.comser.serCatsetter().subscribe((dt:any)=>{
//     this.CatData = dt;
//     if(this.CatData == null){
//       this.comser.serCatgetter().subscribe((dt:any)=>{
//         this.CatData = dt;
//       })
//     }
//   })
// }

subcat:string;
catText:string;

insert(){
  var obj = {
    SubcategoryName:this.subcat,
    Cat_Id: this.catText
  }
  this.comser.serSubcatinsert(obj).subscribe((dt:any)=>{
      this.subcategory = dt;
      if(dt.resp == 0){
        alert('not insert')
      }else{
        alert('Inserted');
        this.subcat="";
        this.catText = "";
        this.subcatget();
        
       
      }
  })

}

CatData:any = [];
SubcatData:any = [];
subcatget(){
  this.comser.serSubcatSetter().subscribe((dt:any)=>{
    this.SubcatData = dt;
    if(this.SubcatData == null){
      this.comser.serSubcatGetter().subscribe((dt:any)=>{
          this.SubcatData = dt;
      })
    }
  })

  this.comser.serCatsetter().subscribe((dt:any)=>{
    this.CatData = dt;
    if(this.CatData == null){
      this.comser.serCatgetter().subscribe((dt:any)=>{
        this.CatData = dt;
      })
    }
  })

}

subtempid:number = 0;
 subtxtcat:string;
 txtcat: string;

//edit and update operations
  Subfunctionedit(subcategory) {
    this.subtempid = subcategory._id;
    this.subtxtcat = subcategory.SubcategoryName;
    this.txtcat = subcategory.Cat_Id;
    alert(this.subtxtcat)
    
  }

subcatUpdate(){
  var obj = [
    {_id:this.subtempid},
    {SubcategoryName:this.subtxtcat, Cat_Id:this.txtcat}
  ]
  this.comser.serSubcatupdate(obj).subscribe((dt:any)=>{
      if(dt.resp==0){
        alert('not Update');
      }else{
        alert('updated');
        this.subtempid=0;
        this.subtxtcat = '';
        this.txtcat = '';
        this.subcatget();
      }
  })

}


delete(subcat){
  var obj = {_id:subcat};
  alert(subcat)
  this.comser.serSubcatdelete(obj).subscribe((dt:any)=>{
     if(dt.resp == 0){
       alert('Not delete')
     }else{
       alert('deleted');
       this.subcatget();

     }
  })
}










}







