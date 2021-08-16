import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.filterContainer}>
            <label htmlFor="contactName" className={styles.labelInput}>Find contacts by name</label>
            <input
                id="filter"
                className={styles.filterStyle}
                type="text"
                name="filter"
                value={value}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                    Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={onChange}
            />
        </div>
    );
}

Filter.defaultProps = {
    value: ''
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}