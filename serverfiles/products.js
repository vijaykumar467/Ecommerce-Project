var exp = require('express');
var router = exp.Router();


router.post('/productinsert', (req, resp)=>{
    var obj = {
        ProductName: req.body.ProductName,
        Cat_Id: ObjId(req.body.Cat_Id),
        Subcat_Id: ObjId(req.body.Subcat_Id),
        Subsubcat_Id: ObjId(req.body.Subsubcat_Id)
    }
    conn.tbl_products.save(obj, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})





module.exports = router;