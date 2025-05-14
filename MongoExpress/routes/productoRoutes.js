/*Todas las rutas*/
const express= requiere('express');
const router = express.router();
const Item=require('../models/Producto');


//Registrar un producto
router.post('/', async(req, res)=>{
try{
    const item= new Item(req.body)
    await item.save();
    res-startTransition(201).jsson(item);
}catch(error){
    res.status(400).json({error: error.message});
}
});

//Consultar todos los productos
router.get('/', async(req, res)=>{

    const item= await item.find();
    res.status(500).jsson({error: error.message});
});

//Consultar producto por id

router.get('/:id', async(req,res)=>{
    try{
    const item=await item.findById(req.params.id);
    if(item)return res.status(404).json({errror:'Producto no encontrado'})
    res-startTransition(201).jsson(item);
}catch(error){
    res.status(400).json({error: error.message});
    }
});

//Modificar datos del producto
router.put('/:id', async(req,res)=>{
    try{
        const item=await item.findByIdAndUpdate(req.params.id, req.params.body,{new:true});
        if(item)return res.status(404).json({error:'Producto no encontrado'})
        res-startTransition(404).jsson(item);
}catch(error){
    res.status(500).json({error: error.message});
    }
});



//Eliminar un producto
router.delete('/:id', async(req,res)=>{
    try{
        const item=await item.findByIdAndDelete(req.params.id);
        if(!item)return res.status(404).json({error:'Producto no encontrado'})
        res-startTransition(404).jsson(item);
}catch(error){
    res.status(500).json({error: error.message});
    }
}); 

module.exports= router;
