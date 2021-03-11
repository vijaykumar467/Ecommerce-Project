var exp = require('express');
const { ObjectID } = require('mongodb');
var router = exp.Router();

router.post('/catinsert', (req, resp)=>{
    conn.tbl_category.save(req.body, (err, result)=>{
        if(err){
            resp.send(err)
        }else{
            resp.send(result);
        }
    })
})

router.get('/catget', (req, resp)=>{
    conn.tbl_category.find().toArray((err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})

router.post('/catupdate', (req, resp)=>{
    var rowid = req.body[0]._id.toString();
    conn.tbl_category.update({_id:ObjId(rowid)},{$set:req.body[1]}, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})

router.post('/catdelete', (req, resp)=>{
    var rowid = req.body._id;
    conn.tbl_category.remove({_id:ObjId(rowid)}, (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})




module.exports = router;