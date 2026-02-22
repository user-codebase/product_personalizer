import styles from './Product.module.scss';
// import clsx from 'clsx';
// import Button from '../Button/Button';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  
  const [currentColor, setCurrentColor] = useState(colors.length ? colors[0] : '');
  const [currentSize, setCurrentSize] = useState(sizes.length ? sizes[0].name : '');

  // const getPrice = () => {
  //   const selectedSize = sizes.find(size => size.name === currentSize);
  //   return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  // };

  const price = useMemo(() => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }, [currentSize, basePrice, sizes]);
  
    return (
    <article className={styles.product}>
      <ProductImage 
        name={name} 
        title={title} 
        currentColor={currentColor} 
      />

      <ProductForm
        name={name}
        title={title}
        basePrice={basePrice}
        // price={getPrice()}
        price={price}
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Product;