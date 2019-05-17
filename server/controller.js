module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then((product) => {
            console.log(product)
            res.status(200).send(product)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Girl you messed up!')
        })
    } 

//     // create: (req, res, next) => {
//     //     const dbInstance = req.app.get('db'); 

//     //     dbInstance.add_new()
//     //     .then(products => {
//     //         console.log(products)
//     //         res.status(200).send(products 'It worked!!! Woohoo!!!')
//     //     })
//     //     .catch(err => {
//     //         console.log(err); 
//     //         res.status(500).send('You messed up girl!')
//     //     })
//     // }, 

//     // delete: (req, res, next) => {
//     //     const dbInstance = req.app.get('db'); 
//     // }

}