const express= require('express');
const router=express.Router();


const productController=require('../../../controller/api/v1/products_api');

router.post('/create',productController.create);
router.get('/',productController.list);
router.delete('/',productController.delete);
router.post('/:id/update_quantity',productController.updateQuantity);
module.exports=router;

