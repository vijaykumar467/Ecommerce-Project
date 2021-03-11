const { Router } = require('express');
var exp = require('express');
var router = exp.Router();

router.post('/subsubcatinsert', (req, resp)=>{
    var obj = {
        SubsubcategoryName : req.body.SubsubcategoryName,
        Subcat_Id : ObjId(req.body.Subcat_Id),
    }
    conn.tbl_Subsubcategory.save(obj, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})


router.get('/subsubcatget', (req, resp)=>{
    conn.tbl_Subsubcategory.aggregate([
        {
            '$lookup':{
                from :'tbl_subcategory',
                localField :'Subcat_Id',
                foreignField :'_id',
                as :'subsubdata'
            }
        },
        {'$unwind':'$subsubdata'}
    ],(err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result)
        }
    })
})


router.post('/subsubcatupdate', (req, resp)=>{
    var rowid = req.body[0]._id.toString();
    var obj = {
        SubsubcategoryName: req.body[1].SubsubcategoryName,
        Subcat_Id: ObjId(req.body[1].Subcat_Id)
    }
    conn.tbl_Subsubcategory.update({_id:ObjId(rowid)},{$set: obj}, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})


router.post('/subsubcatdelete', (req, resp)=>{
    var rowid = req.body._id;
    conn.tbl_Subsubcategory.remove({_id:ObjId(rowid)}, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})












module.exports = router;