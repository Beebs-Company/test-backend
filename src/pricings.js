module.exports = {
  get: async (req, res) => new Promise((resolve, reject) => {
    res.send({
      success: true,
      data: [
        {
          "fromWeight": 0,
          "toWeight": 200,
          "price": 0.99
        },
        {
          "fromWeight": 201,
          "toWeight": 500,
          "price": 1.99
        },
        {
          "fromWeight": 501,
          "toWeight": 1000,
          "price": 2.99
        },
        {
          "fromWeight": 1001,
          "toWeight": 2000,
          "price": 3.99
        },
        {
          "fromWeight": 2001,
          "toWeight": 5000,
          "price": 4.99
        },
        {
          "fromWeight": 5001,
          "toWeight": 10000,
          "price": 5.99
        },
        {
          "fromWeight": 10001,
          "toWeight": 15000,
          "price": 6.99
        },
      ],
    });
    resolve();
  }),
};
