
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';
import Container from '@mui/material/Container';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: 0,
    maxPrice: 10000,
    rating: 0,
    availability: true,
  });

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('http://28.244.56.144/test/products', {
        params: filters,
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  }, [filters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <FilterBar filters={filters} setFilters={setFilters} />
      <ProductList products={products} />
    </Container>
  );
};

export default HomePage;
