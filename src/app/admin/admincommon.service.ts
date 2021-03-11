import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Mainurl } from '../mainurl';
import { map } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmincommonService {

  objUrl:Mainurl;
  constructor(private htpp:HttpClient) { 
     this.objUrl = new Mainurl();
  }

serCatinsert(obj){
   var URL1 = this.objUrl.serverUrl+'/catpath/catinsert';
   return this.htpp.post(URL1, obj);
}
//////////
CatData:object;

serCatsetter(){
   var URL2 = this.objUrl.serverUrl+'/catpath/catget';
   return this.htpp.get(URL2).pipe(map(dt=>{
         this.CatData = dt;
   }))
}

serCatgetter(){
  return of(this.CatData);
}


serCatupdate(obj){
  var URL3 = this.objUrl.serverUrl+'/catpath/catupdate';
  return this.htpp.post(URL3, obj);
}

serCatdelete(obj){
   var URL4 = this.objUrl.serverUrl+'/catpath/catdelete';
   return this.htpp.post(URL4, obj);
}

//////////////////

serSubcatinsert(obj){
  var URL5 = this.objUrl.serverUrl+'/subcatpath/subcatinsert';
   return this.htpp.post(URL5, obj);
}

SubcatData:object = null;

serSubcatSetter(){
  var URL6 = this.objUrl.serverUrl+'/subcatpath/subcatget';
  return this.htpp.get(URL6).pipe(map(dt=>{
    return this.SubcatData = dt;
  }))
}

serSubcatGetter(){
  return of(this.SubcatData);
}

serSubcatupdate(obj){
  var URL7 = this.objUrl.serverUrl+'/subcatpath/subcatupdate';
  return this.htpp.post(URL7, obj);
}

serSubcatdelete(obj){
  var URL8 = this.objUrl.serverUrl+'/subcatpath/subcatdelete';
  return this.htpp.post(URL8, obj)
}

/////subsub operations

serSubsubcatinsert(obj){
  var URL9 = this.objUrl.serverUrl+'/subsubcatpath/subsubcatinsert';
  return this.htpp.post(URL9, obj)
}

SubsubcatData:object;

serSubsubcatSetter(){
  var URL10 = this.objUrl.serverUrl+'/subsubcatpath/subsubcatget';
  return this.htpp.get(URL10).pipe(map(dt=>{
    return this.SubsubcatData = dt;
  }))
}

serSubsubcatGetter(){
  return of(this.SubsubcatData);
}

serSubsubcatupdate(obj){
  var URL11 = this.objUrl.serverUrl+'/subsubcatpath/subsubcatupdate';
  return this.htpp.post(URL11, obj)
}

serSubsubcatdelete(obj){
   var URL12 = this.objUrl.serverUrl+'/subsubcatpath/subsubcatdelete';
   return this.htpp.post(URL12, obj)
}

/////products operations

serProductinsert(obj){
  var URL13 = this.objUrl.serverUrl+'/productpath/productinsert';
  return this.htpp.post(URL13, obj)
}






}
