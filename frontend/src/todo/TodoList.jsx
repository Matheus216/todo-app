import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const line = () => {
        const current = props.list || []
        return  current.map(x => (
            
            <tr key={x._id}>
                <td className={x.done ? 'desabilited' : ''}  >{x.description}</td>
                <td>{x.createdAt}</td>
                <td>
                    <IconButton 
                        style='danger btn-sm ' 
                        hide={!x.done ? 'true' : ''} 
                        click={() => props.handleDelete(x)} 
                        icon='trash'/>
                    <IconButton 
                        style='success btn-sm '  
                        hide={x.done ? 'true' : ''}  
                        click={() => props.handleMarkedAsDone(x)} 
                        icon='check'/>
                    <IconButton 
                        style='warning btn-sm ' 
                        hide={!x.done ? 'true' : ''} 
                        click={() => props.handleMarkedAsPending(x)} 
                        icon='undo'/>
                </td>
            </tr>) 
        )
    }

    return (
        <table className='table' > 
            <thead>
                <tr>
                    <th scope='col'>Descrição</th>
                    <th scope='col'>Data</th>
                    <th className='tableAction' scope='col'>Ação</th>
                </tr>
            </thead>
            <tbody>
                {line()}
            </tbody>
        </table>
    )
}