const Product = require('./../models/product');
const Category = require('./../models/category');

exports.getAllProducts = (req, res) => {
   
    Product
        .findAll({include:[{model:Category}]})
        .then((products) => {
            // res.render('product/index', { listProducts: products }) monoléthique 
            return res.status(200).json({error:false,data:products})
            console.log(products)
        })
        .catch(err => res.status(403).json({error:true,message:'product not found'}))

}

exports.storeProduct = (req, res) => {

    let { title, description, price, urlImage, category } = req.body;

    Product.create({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage,
        categoryId: category
    })
    //!! to test api in postman you must persist in x-www-form-urlencoded
    // .then(() => res.redirect('/products'))   monolethique  
    .then((product) => res.status(201).json({error:false,data:product})) //Microservices 
    .catch((err) => res.status(400).json({error:true,message:'Bad request'}))
   
}

exports.updateProduct = (req, res) => {
    console.log(req.body)
    let { title, description, urlImage,price,categoryId } = req.body;

    Product.update({
        title: title,
        description:description,
        urlImage:urlImage,
        price:price,
        categoryId:categoryId,
    }, {
        // where: { id: req.params.id }
    })
    // .then(() => res.redirect('/categories'))
    // .catch((err) => console.log(err))
    .then((result)=>{
        res.status(202).json({data:result})
        console.log(result)
    })
    .catch((err)=>{
        res.status(400).json({error:true,message:"bad request !"})
    })
}

exports.showOneProduct = (req, res) => {
   
    Product.findByPk(req.params.id)
           .then(product => {
            //    res.render('product/show', {
            //        product: product
            //    }) Microservices

            res.status(200).json({error:false,data:product})

           })
           .catch(err=>res.status(404).json({error:true,message:'Product Not Found'}))
}

exports.deleteProduct =  (req, res) => {
    
    let id = req.params.id;

    Product.destroy({ where: { id: id } })
        //    .then(() => res.redirect('/products'))
            .then(()=>res.status(204).json({}))
           .catch((err) => res.status(403).json({error:true,message:"Impossible to delete this"}))
}


// We dont need it in monoléthique 


// exports.editProduct =  (req, res) => {
//     Product.findByPk(req.params.id)
//            .then(product => {
//                res.render('product/edit', {
//                    product: product
//                })
//            })
// }

exports.patchProduct = (req, res) => {
    return res.send('modification partielle')
}


// We dont need it in monoléthique 

// exports.createProduct = (req, res) => {
//     Category.findAll({ where: { active: 1 } })
//             .then((categories) => {

//                 res.render('product/create', { categories: categories })
//             })
//             .catch((err) => console.log(err))
// }