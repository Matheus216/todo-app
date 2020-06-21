import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import axios from 'axios'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        
        this.state = { description: '' , list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.handleMarkedAsDone = this.handleMarkedAsDone.bind(this);
        this.handleMarkedAsPending = this.handleMarkedAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh()
    }
    
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(x => {
            this.setState({...this.state, list: x.data, description })
        })
    }

    handleAdd(){
        const description = this.state.description; 
        axios.post(URL, {description}).then(x => console.log('funcionou x'))
        this.refresh()
    }
    
    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }

    handleDelete(todo){
        axios.delete(`${URL}/${todo._id}`).then(x => this.refresh(this.state.description))
    }

    handleMarkedAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {done: true})
            .then(x => this.refresh(this.state.description))
            console.log(this.state.description)
    }
    
    handleMarkedAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {done: false})
            .then(x => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return (
            <div>
                <PageHeader Name='Tarefas' Description='Cadastro'/>
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange} 
                    handleClear = {this.handleClear}
                    value={this.state.description} />
                <TodoList 
                    handleDelete={this.handleDelete} 
                    list={this.state.list}
                    handleMarkedAsDone={this.handleMarkedAsDone}
                    handleMarkedAsPending={this.handleMarkedAsPending}/>
            </div>
        )
    }
}