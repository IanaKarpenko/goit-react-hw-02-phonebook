import { Component } from "react";
import styles from './ContactForm.module.scss';
import PropTypes from 'prop-types';

export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = (evt) => {
      this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.onClick(name, number);
        this.setState({ name: '', number: '' });
    }

    render() {
        const { name, number } = this.state;
        return (
            <form id="contactForm" className={styles.formStyle}>
                <label htmlFor="contactName" className={styles.labelInput}>Name</label>
                <input
                    id="contactName"
                    className={styles.inputStyle}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                    Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={this.handleChange}
                    required
                />
                <label htmlFor="contactNumber" className={styles.labelInput}>Number</label>
                <input
                    id="contactNumber"
                    className={styles.inputStyle}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    onChange={this.handleChange}
                    required
                />
                <button
                    type="button"
                    value="Submit"
                    className={styles.formButton}
                    onClick={this.handleSubmit}
                >Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onClick: PropTypes.func.isRequired
}
