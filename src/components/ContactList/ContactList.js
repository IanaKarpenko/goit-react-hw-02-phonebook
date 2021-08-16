import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={styles.listStyle}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={styles.item}>
                        <div className={styles.itemInternal}>
                        <span className={styles.name}>{contact.name}</span>
                            :<span className={styles.number}>{contact.number}</span>
                        
                            <button type='button' name={contact.name} className={styles.deleteButton} onClick={onDelete}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>      
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}
