const API_BASE_URL =
  'https://my-json-server.typicode.com/benirvingplt/products';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};
