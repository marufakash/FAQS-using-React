import React, { useState } from 'react';
import style from './faq.module.css';

const FAQ = ({id, title, des}) => {
    const [toggle, setToggle] = useState(false);

  return (
    <article className={style.faq}>
        <div>
            <h2>{id} .{title}</h2>
            <button onClick={() => setToggle(!toggle)}>{toggle ? '-' : '+'}</button>
        </div>
        {toggle && <p>{des}</p>}
    </article>
  )
}

export default FAQ;