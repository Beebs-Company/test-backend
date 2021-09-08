module.exports = {
  get: async (req, res) => new Promise((resolve, reject) => {
    const users = {
      1: {
        id: 1,
        shippingCredit: 0,
        walletBalance: 0,
      },
      2: {
        id: 2,
        shippingCredit: 2,
        walletBalance: 0,
      },
      3: {
        id: 3,
        shippingCredit: 0,
        walletBalance: 5.25,
      },
      4: {
        id: 4,
        shippingCredit: 1,
        walletBalance: 15.25,
      },
    };
    

    res.send({
      success: true,
      data: users[req.params.id],
    });
    resolve();
  }),
};
