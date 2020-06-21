import React from 'react'

export default props => (
    <header className='page-header'>
        <h2>
            {props.Name} <small>{props.Description}</small>
        </h2>
    </header>
)