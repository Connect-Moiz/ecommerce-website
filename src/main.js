import './style.css'

import products from "./api/products.json" assert { type: "json"};
import { showProductContainer } from './assets/homeProductCards';

// define a function named `showProductContainer` that takes an array of products as input 

showProductContainer(products);