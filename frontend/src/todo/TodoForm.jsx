import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
    <div role='form' className='todoForm'>
        
        <Grid cols='12 10 10 10' >
            <input 
                type="text" 
                placeholder='Digite sua tarefa'  
                className='form-control' 
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.value}/>    
        </Grid>        

        <Grid cols='12 2 2 2'>
            <IconButton style='info button-space' icon='plus' click={props.handleAdd}/>
            <IconButton style='primary' icon='search' click={props.handleSearch}/>
            <IconButton style='dark' icon='remove' click={props.handleClear}/>
        </Grid>
    </div>
)}