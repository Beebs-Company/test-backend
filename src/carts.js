module.exports = {
  get: async (req, res) => new Promise((resolve, reject) => {
    res.send({
      success: true,
      data: [
        // (sum product)*(var fees) + (fixed fees) + (-wallet) + (shipping)
        // 1 product => to pay (10)*(1.05) + (0.7) + (-0) + (0.99) = 12.19
        { 
          id: 1, 
          products: [
            {
              price: 10,
              weight: 500,
            },
          ],
          userId: 1,
        },
        // 0 product => to pay 0
        { 
          id: 2, 
          products: [],
          userId: 1,
        },
        // n product => to pay (10 + 5 + 10.2 + 1.25)*(1.05) + (0.7) + (-0) + (2.99) = 31.46 [31.4625]
        { 
          id: 3, 
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
        // n product + min free shipping => to pay (10 + 5 + 15 + 9.95 + 5.95)*(1.05) + (.7) + (-0) + (0) = 48.90 [48.89500000000001]
        { 
          id: 4, 
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
              price: 15,
              weight: 200,
            },
            {
              price: 9.95,
              weight: 50,
            },
            {
              price: 5.95,
              weight: 150,
            },
          ],
          userId: 1,
        },
        // n product < free shipping + shipping credit => to pay (15 + 9.95 + 4.95)*(1.05) + (.7) + (-0) + (0) = 32.10 [32.095]
        { 
          id: 5, 
          products: [
            {
              price: 15,
              weight: 200,
            },
            {
              price: 9.95,
              weight: 50,
            },
            {
              price: 4.95,
              weight: 150,
            },
          ],
          userId: 2,
        },
        // n product > free shipping + shipping credit => (15 + 19.95 + 4.95)*(1.05) + (.7) + (-0) + (0) = 42.60 [42.595]
        { 
          id: 6, 
          products: [
            {
              price: 15,
              weight: 200,
            },
            {
              price: 19.95,
              weight: 50,
            },
            {
              price: 4.95,
              weight: 150,
            },
          ],
          userId: 2,
        },
        // n product < free shipping + walletBalance => to pay (15 + 9.95 + 4.95)*(1.05) + (.7) + (-5.25) + (1.99) = 28.83 [28.834999999999997]
        { 
          id: 7, 
          products: [
            {
              price: 15,
              weight: 200,
            },
            {
              price: 9.95,
              weight: 50,
            },
            {
              price: 4.95,
              weight: 150,
            },
          ],
          userId: 3,
        },
        // n product < free shipping + walletBalance => to pay (15 + 9.95 + 4.95)*(1.05) + (.7) + (-0) + (1.99) = 34.09 [34.085]
        { 
          id: 8, 
          products: [
            {
              price: 15,
              weight: 200,
            },
            {
              price: 9.95,
              weight: 50,
            },
            {
              price: 4.95,
              weight: 150,
            },
          ],
          userId: 3,
        },
        // n product > free shipping + wallet balance => to pay (15 + 9.95 + 5.95)*(1.05) + (.7) + (-15.25) + (0) = 17.90 [17.895000000000003]
        { 
          id: 9, 
          products: [
            {
              price: 15,
              weight: 200,
            },
            {
              price: 9.95,
              weight: 50,
            },
            {
              price: 5.95,
              weight: 150,
            },
          ],
          userId: 4,
        },
        // n product < free shipping + shippingCredit => to pay (5.95)*(1.05) + (.7) + (-0) + (0) = 6.95 [6.947500000000001]
        { 
          id: 10, 
          products: [
            {
              price: 5.95,
              weight: 150,
            },
          ],
          userId: 4,
        },
        // n product < free shipping => to pay (15)*(1.05) + (.7) + (-0) + (4.99) = 21.44 [21.439999999999998]
        { 
          id: 11, 
          products: [
            {
              price: 15,
              weight: 2001,
            },
          ],
          userId: 4,
        },
      ],
    });
    resolve();
  }),
};
