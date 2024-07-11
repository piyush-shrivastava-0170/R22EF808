
import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        label="Category"
        name="category"
        value={filters.category}
        onChange={handleChange}
      />
      <TextField
        label="Company"
        name="company"
        value={filters.company}
        onChange={handleChange}
      />
      <TextField
        label="Min Price"
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleChange}
      />
      <TextField
        label="Max Price"
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleChange}
      />
      <TextField
        label="Rating"
        type="number"
        name="rating"
        value={filters.rating}
        onChange={handleChange}
      />
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select
          name="availability"
          value={filters.availability}
          onChange={handleChange}
        >
          <MenuItem value={true}>Available</MenuItem>
          <MenuItem value={false}>Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
