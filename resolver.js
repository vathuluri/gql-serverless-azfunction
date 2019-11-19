let products = [{
  id: 1,
  name: 'Avengers - End game'
}, {
  id: 2,
  name: 'Avengers - End game 2'
}]

let reviews = [{
  grade: 5,
  title: 'Great movie',
  description: 'Great actor playing Thanos',
  product: 1
}]


function getProducts() {
  return Promise.resolve(products);
}

function getProduct(id) {
  return Promise.resolve(products.find(p => p.id == id));
}

function createProduct(product) {
  const newProduct = { ...product, id: products.length + 1};
  products = [...products, newProduct];

  return Promise.resolve(newProduct);
}

function getReviews() {
  return Promise.resolve(reviews);
}

module.exports = {
  Query: {
    hello: () => "world",
    products: async() => getProducts(),
    product: async(_, { id }) => getProduct(id),
    reviews: async() => getReviews()    
  },
  Review: {
    product: async(review) => getProduct(review.product)
  },
  Mutation: {
    createProduct: async(_, { product }) => createProduct(product)
  }
};