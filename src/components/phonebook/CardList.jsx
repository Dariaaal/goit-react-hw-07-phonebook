import React from "react";
import css from './CardList.module.css'

const CardList = ({contacts, onDeleteContact}) => (
<ul>
    {contacts.map(({id, name, phone}) => (
    <li key={id} className={css.user}>
        <p>{name}: {phone}</p>
        <button type="button" className={css.delete} onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
    ))}
    </ul>
);

export default CardList;