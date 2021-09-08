module.exports = {
  get: async (req, res) => new Promise((resolve, reject) => {
    res.send({ 
      success: true, 
      data: {
        FREE_SHIPPING_MIN_AMOUNT: 30.0,
      }
    });
    resolve();
  }),
};
