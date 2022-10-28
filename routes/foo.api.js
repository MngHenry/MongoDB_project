const express = require("express");
const router = express.Router();
const {
  createFoo,
  getAllFoos,
  updateFooById,
  deleteFooById,
} = require("../controllers/foo.controllers.js");

/**
 * @route GET api/foo
 * @description get list of foos
 * @access public
 */
router.get("/",getAllFoos)

//CREATE
/**
 * @route POST api/foo
 * @description create a foo
 * @access public
 */
router.post("/",createFoo)

//UPDATE
/**
 * @route PUT api/foo
 * @description update a foo
 * @access public
 */
router.put("/:id",updateFooById )

//DELETE
/**
 * @route DELETE api/foo
 * @description delet a foo
 * @access public
 */
router.delete("/:id",deleteFooById)

//EXPORTS
const fooRouter = require("./foo.api.js");
router.use("/foo", fooRouter);

module.exports = router;
