module.exports = {
  get: async (req, res) => new Promise((resolve, reject) => {
    res.send({ 
      success: true, 
      data: {
        FREE_SHIPPING_MIN_AMOUNT: 30.0,
        FIXED_BUYER_FEE: 0.7,
        VARIABLE_BUYER_FEE: 5,
      }
    });
    resolve();
  }),
};
