var exp = require('express');
 app = exp();

var bp = require('body-parser');
app.use(bp.json());

var cor = require('cors');
app.use(cor());

var mongojs = require('mongojs');
 ObjId = mongojs.ObjectId;

conn = mongojs('mongodb://localhost:27017/database');


var category = require('./serverfiles/category');
app.use('/catpath', category);

var subcategory = require('./serverfiles/subcategory');
app.use('/subcatpath', subcategory);

var subsubcategory = require('./serverfiles/subsubcategory');
app.use('/subsubcatpath', subsubcategory);

var products = require('./serverfiles/products');
app.use('/productpath', products)



app.listen(1000);
console.log('server start');