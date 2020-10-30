const router = require("express").Router();
const Inventory = require("../models/inventoryModel")

router.get('/', async(req,res)=>{
    try {

        const book = await Inventory.find()
        res.json(book)


    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})


router.post('/', async (req,res)=>{
    try{
        let { title, bookcount } = req.body;

        const newBook = new Inventory({
            title,
            bookcount
        })
        const saveBook = await newBook.save();
        res.json(saveBook)


    }catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports = router;