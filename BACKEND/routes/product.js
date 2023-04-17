const router = require("express").Router();

let Product = require("../models/product");

router.route("/addPRODUCT").post((req, res) => {
    const pCategory = req.body.pCategory;
    const pName = req.body.pName;
    const pCode = Number(req.body.pCode);
    const uCode = Number(req.body.uCode);
    const pDescription = req.body.pDescription;
    const fdate = req.body.fdate;
    const ldate = req.body.ldate;
    const price = req.body.price;
   


    const newProduct = new Product({
        pCategory,
        pName,
        pCode,
        uCode,
        pDescription,
        fdate,
        ldate,
    price
    })

    newProduct.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/").get((req, res) => {
    Product.find().then((products) => {
        res.json(products)
    }).catch((err) => {
        console.log(err)
    })
})
router.route("/updatePRODUCT/:id").put(async (req, res) => {
    let userID = req.params.id;
    const { pCategory, pName, pCode, uCode, pDescription, fdate, ldate,   price } = req.body;

    const updateProduct = {
        pCategory,
        pName,
        pCode,
        uCode,
        pDescription,
        fdate,
        ldate,
      
        price
    }
    const update = await Product.findByIdAndUpdate(userID, updateProduct)
        .then(() => {
            res.status(200).send({ status: "Product updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });

        })

})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await Product.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "Product deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })
})

router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;

    const user = await Product.findById(userID)
        .then((product) => {
            res.status(200).send({ status: "product fetched", product });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetche product", error: err.message });
        })

        
        router.route("/find").get(async (req, res) => { 
    
            let categoryVal = req.query.category;
        
            var query = {};
        
            if(categoryVal === "All"){
                query = {}
            }
            else{
                query = {
                    category: categoryVal
                }
            }     
            
            await Product.find(query).then((products) => {
                res.json(products);
                
            }).catch((err) => {
                console.log(err.message);
                res.status(500).send({status: "error with fetched data", error: error.message});
            })
        
        });
      
})




module.exports = router;
