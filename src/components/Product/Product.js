import styles from './Product.module.scss';
// import clsx from 'clsx';
// import Button from '../Button/Button';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  
  const [currentColor, setCurrentColor] = useState(colors.length ? colors[0] : '');
  const [currentSize, setCurrentSize] = useState(sizes.length ? sizes[0].name : '');

  const getPrice = () => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Summary');
  //   console.log('=========');
  //   console.log('Name:', title);
  //   console.log('Price:', getPrice());
  //   console.log('Color:', currentColor);
  //   console.log('Size:', currentSize);
  // };


  // return (
  //   <article className={styles.product}>
  //     <div className={styles.imageContainer}>
  //       <img
  //         className={styles.image}
  //         alt={title}
  //         src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}/>
  //     </div>
  //     <ProductImage></ProductImage>
  //     <div>
  //       <header>
  //         <h2 className={styles.name}>{title}</h2>
  //         <span className={styles.price}>Price: {getPrice()}$</span>
  //       </header>
  //       <form onSubmit={handleSubmit}>
  //         <div className={styles.sizes}>
  //           <h3 className={styles.optionLabel}>Sizes</h3>
  //           <ul className={styles.choices}>
  //             {sizes.map(size => (
  //               <li key={size.name}>
  //                 <button type='button' className={size.name === currentSize ? styles.active : ''} onClick={() => setCurrentSize(size.name)}>
  //                   {size.name}
  //                 </button>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className={styles.colors}>
  //           <h3 className={styles.optionLabel}>Colors</h3>
  //           <ul className={styles.choices}>
  //            {colors.map(color => (
  //             <li key={color}>
  //               <button type="button" className={clsx(styles[`color${color[0].toUpperCase()}${color.slice(1)}`], color === currentColor && styles.active)}
  //               onClick={() => setCurrentColor(color)}/>
  //             </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <Button className={styles.button}>
  //           <span className="fa fa-shopping-cart" />
  //         </Button>
  //       </form>
  //     </div>
  //   </article>
  // )
    return (
    <article className={styles.product}>
      {/* Komponent obrazka */}
      <ProductImage 
        name={name} 
        title={title} 
        currentColor={currentColor} 
      />

      {/* Formularz */}
      <ProductForm
        name={name}
        title={title}
        basePrice={basePrice}
        price={getPrice()}
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