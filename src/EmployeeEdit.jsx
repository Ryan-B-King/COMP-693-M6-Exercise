import React from 'react'


export default class EmployeeEdit extends React.Component {
    constructor(){
        super()
        this.state = { employee: [] }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        const id = window.location.pathname.split('/')[2]
        fetch(`/api/employees/${id}`)
        .then (response => response.json())
        .then(data => {
            data.employee.dateHired = new Date(data.employee.dateHired)
            this.setState({ employee: data.employee })
        })
        .catch(err => {console.log(err)})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('You submitted')
    }

    render() {
        return (
            <form name='employeeUpdate' onSubmit={this.handleSubmit}>
                <h1>Edit {this.state.employee.name}</h1>
                ID:<br/>
                <input type='text' name='id' readOnly='readOnly' /><br/>
                Name:<br/>
                <input type='text' name='name' /><br/>
                Extension:<br/>
                <input type='text' name='extension' /><br/>
                Email:<br/>
                <input type='text' name='email' /><br/>
                Title:<br/>
                <input type='text' name='title' /><br/>
                Date Hired:<br/>
                <input type='text' name='dateHired' readOnly='readOnly'/><br/>
                Currently Employed?<br/>
                <input type='checkbox' name='currentlyEmployed' /><br/>
                <br/><br/>
                <input type='submit' value='Update' /> 
            </form>
        )
    }
    
}