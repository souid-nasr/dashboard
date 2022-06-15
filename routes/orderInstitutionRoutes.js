const orderRouter = require("express").Router();
const Moderator = require("../models/moderatorModel");
const Admin = require("../models/AdminModel");
const OrderInstitution = require("../models/OrderInstitutionModel");
const expressAsyncHandler = require("express-async-handler");
const { isAuth, isAdmin, generateToken } = require('../utils.js');

// CREATE ORDER
orderRouter.post(
    "/",

    expressAsyncHandler(async (req, res) => {
      const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = req.body;
  
      if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No order items");
        return;
      } else {
        const order = new OrderInstitution({
          orderItems,
          user: req.user._id,
        });
  
        const createOrder = await order.save();
        res.status(201).json(createOrder);
      }
    })
  );
  
  // ADMIN GET ALL ORDERS
  orderRouter.get(
    "/all",

    expressAsyncHandler(async (req, res) => {
      const orders = await OrderInstitution.find({})
        .sort({ _id: -1 })
        .populate("user", "id name email");
      res.json(orders);
    })
  );
  // USER LOGIN ORDERS
  orderRouter.get(
    "/",
    expressAsyncHandler(async (req, res) => {
      const order = await OrderInstitution.find({ user: req.user._id }).sort({ _id: -1 });
      res.json(order);
    })
  );
  
  // GET ORDER BY ID
  orderRouter.get(
    "/:id",
    expressAsyncHandler(async (req, res) => {
      const order = await OrderInstitution.findById(req.params.id).populate(
        "user",
        "name email"
      );
  
      if (order) {
        res.json(order);
      } else {
        res.status(404);
        throw new Error("Order Not Found");
      }
    })
  );
  