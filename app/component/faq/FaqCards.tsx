import React from 'react'
import "./faq.css"

interface Faqprops {
    head: string,
    descp: string
}

const FaqCards = (
    props: Faqprops
) => {
    return (
        <div className='faqCard'>
            <h3>{props.head}</h3>
            <p>{props.descp}</p>
        </div>
    )
}

export default FaqCards