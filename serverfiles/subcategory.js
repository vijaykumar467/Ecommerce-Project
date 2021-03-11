var exp = require('express');
var router = exp.Router();

router.post('/subcatinsert', (req, resp)=>{
    var obj = {
        SubcategoryName:req.body.SubcategoryName,
        Cat_Id : ObjId(req.body.Cat_Id)
    }
    conn.tbl_subcategory.save(obj, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
    
})

router.get('/subcatget', (req, resp)=>{
    conn.tbl_subcategory.aggregate([
        {
            '$lookup':{
                from:'tbl_category',
                localField:'Cat_Id',
                foreignField:'_id',
                as:'catdata'
            }
        },
        {'$unwind':'$catdata'},
        // {
        //   '$group':{
        //       '_id':'$_id','items':{
        //           '$push':{
        //               'SubcategoryName':'$SubcategoryName',
        //               'CategoryName':'$catdata.CategoryName'
        //           }
        //       }
        //   }
        // },
        // {'$unwind':'$items'}
    ], (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})

router.post('/subcatupdate', (req, resp)=>{
    var rowid = req.body[0]._id.toString();
    var obj = {
        SubcategoryName:req.body[1].SubcategoryName,
        Cat_Id:ObjId(req.body[1].Cat_Id)
    }
    conn.tbl_subcategory.update({_id:ObjId(rowid)},{$set:obj}, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})

router.post('/subcatdelete', (req, resp)=>{
    var rowid = ObjId(req.body._id);
    conn.tbl_subcategory.remove({_id:rowid}, (err, result)=>{
        if(err){
            resp.send(err)
        }else{
            resp.send(result)
        }
    })
})




module.exports = router;











