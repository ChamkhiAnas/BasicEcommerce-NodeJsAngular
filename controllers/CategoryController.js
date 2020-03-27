const Category = require('./../models/category');
const Product = require('./../models/product')

exports.getAllCategories = (req, res) => {
   
    Category
        .findAll()
        .then((categories) => {

            // res.render('category/index', { listCategories: categories })
            res.status(200).json({error:false,data:categories})
        })
        .catch(err => res.status(404).json({error:true,message:"catégorie not found"}))

}

exports.storeCategory = (req, res) => {

    let { title, active } = req.body;

    Category.create({
        title: title,
        active: active
    })
    // .then(() => res.redirect('/categories'))
    .then((category)=>{
        res.status(201).json({error:false,data:category})
    })
    .catch((err) => res.status(400).json({erro:true,message:'categorie not found'}))
   
}

exports.updateCategory = (req, res) => {
    console.log(req.body)
    let { title, active } = req.body;

    Category.update({
        title: title,
        active: (active == 'on') ? 1 : 0
    }, {
        where: { id: req.params.id }
    })
    // .then(() => res.redirect('/categories'))
    // .catch((err) => console.log(err))
    .then((result)=>{
        res.status(202).json({error:false,data:result})
    })
    .catch((err)=>{
        res.status(400).json({error:true,message:"bad request !"})
    })
}

exports.showOneCategory = async (req, res) => {

    // Category.findAll({include:[{model:Product}]})
    //   .then(cat=>{
    //       console.log("smiya dyal cat "+cat)

    // })

    // chars=[];

    // Category.findAll()
    //         .then((char)=>{
    //             chars=char;
    //         })

    // Category.findByPk(req.params.id,{include:[{model:Product}]})
    //   .then(cat=>{
    //     // console.log("hada table"+chars[0].title)
    //     console.log("hello user hello");
    //     console.log(cat.products);
    //     res.render('category/show', { cat: cat ,chars:chars})
    // })

//    second method  you can work with getProducts() method that is created
//    automatically with  sequlizer based on relations,the method is bellow
//    let categories=await Category.findAll();
    // category.getProducts()
    // .then((products)=>{
        // res.render('category/show',{category:category,products:products})
        try {
            let category=await Category.findByPk(req.params.id);
            return res.status(200).json({error:false,data:category})
        }
        catch(error){
            return res.status(404).json({error:true,message:'category not found'})
        }
//    })
}

exports.deleteCategory =  (req, res) => {
    return res.send('suppression')
}

// exports.editCategory =  (req, res) => {
//     Category.findByPk(req.params.id)
//            .then(category => {
//                res.render('category/edit', {
//                    category: category
//                })
//            })
// }

exports.patchCategory = (req, res) => {
    // return res.send('modification partielle')
    Category.update(req.body,{
        where:{id:req.params.id}
    })
    .then(result=>{
        res.status(200).json({error:false,data:result})
    })
    .catch((error)=>{
        res.status(400).json({error:true,message:"Bad request"})
    })
}


// exports.createCategory = (req, res) => {
//     res.render('category/create')
// }