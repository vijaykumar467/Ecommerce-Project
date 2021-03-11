import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';

const routes: Routes = [
  {path:'', component:AdmincommonComponent, children:[
            {path:'cat', component:CategoryComponent},
            {path:'subcat', component:SubcategoryComponent},
            {path:'subsubcat', component:SubsubcategoryComponent},
            {path:'product', component:ProductsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
