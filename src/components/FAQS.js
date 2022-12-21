import React from "react";
import { faqsData } from "./Data";
import FAQ from "./FAQ";
import style from './faqs.module.css';

const FAQS = () => {
    return (
        <div className={style.container}>
            <h1>Frequently asked questions</h1>
            {faqsData && faqsData.map((faq) => <FAQ key={faq.id} {...faq} />)}
        </div>
    )
}

export default FAQS;