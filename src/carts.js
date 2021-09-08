module.exports = {
  get: async (req, res) => new Promise((resolve, reject) => {
    res.send({
      success: true,
      data: [
        // 1 product
        { id: 1, 
          products: [
            {
              price: 10,
              weight: 500,
            },
          ],
          userId: 1,
        },
        // 0 product
        { id: 2, 
          products: [],
          userId: 1,
        },
        { id: 3, 
          products: [
            {
              price: 10,
              weight: 500,
            },
            {
              price: 5,
              weight: 200,
            },
            {
              price: 10.20,
              weight: 200,
            },
            {
              price: 1.25,
              weight: 50,
            },
          ],
          userId: 1,
        },
      ],
    });
    resolve();
  }),
};
