import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mba",
      email: "mbajames346@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "john",
      email: "username@gmail.com",
      password: bcrypt.hashSync("555555"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "shirt",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rate: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      //_id: "2",
      name: "Adidas Fit shirt",
      slug: "Adidas-fit-shirt",
      category: "shirt",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 20,
      brand: "Adidas",
      rate: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "3",
      name: "Nike Slim pant",
      slug: "nike-slim-pant",
      category: "pant",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 10,
      brand: "Nike",
      rate: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: "4",
      name: "Adidas Slim pant",
      slug: "Adidas-slim-pant",
      category: "pants",
      image: "/images/p4.jpg",
      price: 120,
      countInStock: 2,
      brand: "Nike",
      rate: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
  ],
};

export default data;
