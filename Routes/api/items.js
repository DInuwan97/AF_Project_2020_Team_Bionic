const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");

//getting all the items
//public access
router.get("/", async (req, res) => {
  try {
    const Items = await Item.find();
    if (!Items) {
      return res.status(400).json({ msg: "No Items Found" });
    }

    res.json(Items);
    console.log(Items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//getting a specific item
//publuic access
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById({ _id: req.params.id });
    if (!item) {
      return res.status(400).send({ msg: "No item found" });
    }
    res.json(item);
    console.log(item);
  } catch (error) {
    res.status(500).json({ msg: "Sever Error" });
    console.error(error);
  }
});

//adding a new item to the store &  checking whether the
//item exist from the name if exist update the stock quantity and other details
// update other values
//access private
//Here the authorization has to implemented
router.post("/", async (req, res) => {
  let {
    itemName,
    price,
    category,
    size,
    color,
    Brand,
    stockQuantity,
    rating
  } = req.body;
  const checkItemExist = await Item.findOne({ itemName });
  let result = null;
  let newItem = null;
  try {
    if (checkItemExist) {
      stockQuantity =
        parseInt(checkItemExist.stockQuantity) + parseInt(stockQuantity);
      newItem = await Item.findOneAndUpdate(
        { itemName },
        {
          itemName,
          price,
          category,
          size,
          color,
          Brand,
          stockQuantity,
          rating
        }
      );
    } else {
      newItem = await new Item({
        itemName,
        price,
        category,
        size,
        color,
        Brand,
        stockQuantity,
        
        rating
      });
    }

    result = await newItem.save();
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

//update and item
//access private
//put request
router.patch("/updateItem/:id", async (req, res) => {
try {
  const checkItemExist = await Item.findOne({ _id: req.params.id });
  if (!checkItemExist) {
    return res.status(400).json({ msg: "No item Exist" });
  }
  let {
    itemName,
    price,
    category,
    size,
    color,
    Brand,
    stockQuantity,
    rating
  } = req.body;

  checkItemExist.set({
    itemName,
    price,
    category,
    size,
    color,
    Brand,
    stockQuantity,
    rating
  })

  const result = await checkItemExist.save();
  res.send(result);
  console.log(result);
} catch (error) {
  res.status(500).json({msg : 'Server error'});
  console.error(error)
}
});

//delete a specifi Item
//private access
//delete request
router.delete("/:id", async (req, res) => {
  //check if item exist
  try {
    const checkItemExits = await Item.findOne({ _id: req.params.id });
    if (!checkItemExits) {
      return res.status(400).json({ msg: "Item does not exist" });
    }
    res.status(200).json(checkItemExits);
    await checkItemExits.remove();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//delete a aspecfic item by a user
//authentication is required
//private access
//delete request
/*
  Implementation required here
*/

//adding a discount to a item
//patch request
//authentication required
//private access

router.patch("/addDiscount", async (req, res) => {
  //check whetaher the item exist
  try {
    const checkItemExits = await Item.findOne({ itemName: req.body.itemName });
    if (!checkItemExits) {
      return res.status(400).json({ msg: "Item does not exist" });
    }

    checkItemExits.set({
      discount: req.body.discount
    });
    const result =  await checkItemExits.save();

    res.json(result);
    console.log(result);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
    console.error(error);
  }
});

module.exports = router;
