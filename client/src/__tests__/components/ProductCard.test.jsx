import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '../../components/ProductCard';
import { CartProvider } from '../../context/CartContext';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  price: 29.99,
  imageUrl: 'https://example.com/image.jpg',
  description: 'Test product description',
  category: 'Electronics',
  rating: 4.5
};

const ProductCardWithProvider = ({ product }) => (
  <CartProvider>
    <ProductCard product={product} />
  </CartProvider>
);

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCardWithProvider product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('Test product description')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  it('displays add to cart button', () => {
    render(<ProductCardWithProvider product={mockProduct} />);

    const addToCartButton = screen.getByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();
  });

  it('handles image error gracefully', () => {
    render(<ProductCardWithProvider product={mockProduct} />);

    const image = screen.getByAltText('Test Product');
    fireEvent.error(image);

    expect(image.src).toContain('placeholder');
  });
});