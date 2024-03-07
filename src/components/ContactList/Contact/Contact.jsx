import styled from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';

export const Contact = ({ name, number, contactId }) => {
  const dispatch = useDispatch();
  return (
    <div className={styled.card}>
      <div>
        <h2>
          <span className={styled.info}>{name}</span>
        </h2>
        <a href={`tel:${number}`}>
          <span className={styled.info}>{number}</span>
        </a>
      </div>
      <button onClick={() => dispatch(deleteContact(contactId))}>Delete</button>
    </div>
  );
};
