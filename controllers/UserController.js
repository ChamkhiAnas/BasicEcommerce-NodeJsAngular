const User = require('./../models/user');

exports.getAllUsers = (req, res) => {
   
    User.findAll()
        .then((users) => {

            res.render('user/index', { listUsers: users })
        })
        .catch(err => console.log(err))

}


exports.storeUser = (req, res) => {

    let { name, email,password } = req.body;

    User.create({
        name: name,
        email: email,
        password:password
    })
    .then(() => res.redirect('/users'))
    .catch((err) => console.log(err))
   
}



exports.updateUser = (req, res) => {
    console.log(req.body)
    let { name, email,password } = req.body;

    User.update({
        name: name,
        email: email,
        password:password
    }, {
        where: { id: req.params.id }
    })
    .then(() => res.redirect('/users'))
    .catch((err) => console.log(err))
}

exports.showOneUser = (req, res) => {
   
    User.findByPk(req.params.id)
           .then(user => {
               res.render('user/show', {
                   user: user
               })
           })
}

exports.deleteUser =  (req, res) => {

    let id = req.params.id;
    User.destroy({ where: { id: id } })
    .then(() => res.redirect('/users'))
    .catch((err) => console.log(err))

}

exports.editUser =  (req, res) => {
    User.findByPk(req.params.id)
           .then(user => {
               res.render('user/edit', {
                   user: user
               })
           })
}

exports.patchUser = (req, res) => {
    return res.send('modification partielle')
}


exports.createUser = (req, res) => {
    // User.findAll()
    //         .then((users) => {
    //             res.render('user/create', { users: users })
    //         })
    //         .catch((err) => console.log(err))
    res.render('user/create')

}

