
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`http://28.244.56.144/test/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details', error);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body1">Company: {product.company}</Typography>
      <Typography variant="body1">Category: {product.category}</Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
      <Typography variant="body1">Rating: {product.rating}</Typography>
      <Typography variant="body1">Discount: {product.discount}%</Typography>
      <Typography variant="body1">Availability: {product.availability ? 'In stock' : 'Out of stock'}</Typography>
    </Container>
  );
};

export default ProductPage;
