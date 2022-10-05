const crypto = require("crypto");
const Payments = require("../models/paymentModel.js");
const Users = require("../models/userModel");
const Products = require("../models/productModel");
const Razorpay = require("razorpay");

const paymentCtrl = {
    checkout: async (req, res) => {
      try {
  const instance = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET,
          });
        

  const options = {  
amount: req.body.amount * 100,
  currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };
  const order = await instance.orders.create(options);

// console.log(order);
 res.status(200).json({
    success: true,
      order,
  })
 } catch (err) {
  console.log(err)
                return res.status(500).json({msg: err.message})
            }
        },


    paymentVerification: async (req, res) => {
        try {
         
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

    // console.log("sig received" ,razorpay_signature);
    // console.log("sig generrated" ,expectedSignature);     //for testing

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    // Database comes here

    await Payments.create({
    
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      
      isPaid: true,
      
    });
    
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
      
    } else {
    res.status(400).json({
      success: false,
    });
       }
} catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }    

}
module.exports = paymentCtrl;