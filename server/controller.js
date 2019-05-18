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
    }, 

    create: (req, res, next) => {
        const dbInstance = req.app.get('db'); 
        const {name, price, image_url} = req.body; 

        dbInstance.create_product([name, price, image_url])
        .then((works) => {
                res.status(200).send(works)
                console.log(works)
            })
            .catch(err => {
                console.log(err); 
                res.status(500).send('You messed up girl!')
             })
    }, 

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db'); 
        const {product_id} = req.params; 

        dbInstance.delete_product([product_id])
        .then ( (deletes) => {
            res.status(200).send(deletes)
        })
        .catch(err => {
            res.status(500).send('You messed up girl!')
        })
    }

}