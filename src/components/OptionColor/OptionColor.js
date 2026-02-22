import PropTypes from 'prop-types';
import clsx from 'clsx';
// import styles from './OptionColor.module.scss';
import styles from '../Product/Product.module.scss'

const OptionColor = ({ colors, currentColor, setCurrentColor }) => (
  <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {colors.map(color => (
        <li key={color}>
          <button
            type="button"
            className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], {
              [styles.active]: currentColor === color
            })}
            onClick={() => setCurrentColor(color)}
          />
        </li>
      ))}
    </ul>
  </div>
);

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default OptionColor;