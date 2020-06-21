import React from 'react'
import If from './iF'

export default props => ( 
    <If test={props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.click} >
            <i className={'fa fa-' + props.icon} ></i>
        </button>
    </If>
)