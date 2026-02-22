import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
// import styles from './ProductForm.module.scss';
import styles from '../Product/Product.module.scss'

const ProductForm = ({
  name,
  title,
  price,
  colors,
  currentColor,
  setCurrentColor,
  sizes,
  currentSize,
  setCurrentSize
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      name,
      title,
      price,
      color: currentColor,
      size: currentSize
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {price}$</span>
      </header>
      <OptionColor 
        colors={colors} 
        currentColor={currentColor} 
        setCurrentColor={setCurrentColor} 
      />
      <OptionSize 
        sizes={sizes} 
        currentSize={currentSize} 
        setCurrentSize={setCurrentSize} 
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired
};

export default ProductForm;