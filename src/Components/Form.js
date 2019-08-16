import React, { useState } from 'react';

const Form = (props) => {

    const [newMember, setNewMember] = useState(
        {
        name: '', 
        email: '', 
        role: ''
        })

    const handleChange = (event) => {
        setNewMember({...newMember, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNewMember(newMember);
        setNewMember({...newMember, [event.target.value]: ''})
    }
    return (
        <form onSubmit={ev => handleSubmit(ev)}>
            <label>
                Name:
                <input onChange={ev => handleChange(ev)} type='text' name='name' value={newMember.name} />
            </label>
            <label>
                Email:
                <input onChange={ev => handleChange(ev)} type='text' name='email' value={newMember.email}/>
            </label>
            <label>
                Role: 
                <input onChange={ev => handleChange(ev)} type='text' name='role' value={newMember.role} />
            </label>
            <button>Submit!</button>
        </form>
    )
}

export default Form