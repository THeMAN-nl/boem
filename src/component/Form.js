import React, { useState } from 'react';
const axios = require('axios').default;

function Form(props){
    const [value, setValue] = useState('');
    const [title, setTitle] = useState(props.name);
    const [date, setDate] = useState(props.name);

    const handleChange = (event) => {
        setValue(event.target.value);

    };


    const handleTitle = (event) => {
        setTitle(event.target.value);

    };

    const handleDate = (event) => {
        setDate(event.target.value);

    };

  function submitForm(e){
    e.preventDefault()

    axios.post('http://localhost:5000/post', {
    title: title,
    date: date,
    text: value,

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);

  });
  resetForm()
//   alert('Your mail has been sent to Mark-Anthony.')
  }

function resetForm(){
  setTitle('')
  setDate('')
  setValue('')
}
    return (
        <form id="form" onSubmit={submitForm} method="POST">
          <h1 className='skills-text'> Create blog post </h1>

          <table className='center'>
          <tbody>
              <tr>
                  <td> title:</td>
                  <td><input type='text' id="title-area" name="nameArea" value={title} onChange={handleTitle} /></td>
              </tr>
              <tr>
                  <td> date:</td>
                  <td><input type='text' id="date-area" name="dateArea" value={date} onChange={handleDate} /></td>
              </tr>
              <tr>
                  <td> text:</td>
                  <td><textarea id="text-area" name="textArea" value={value} onChange={handleChange} /></td>
              </tr>
                <tr>
                  <td> </td>
                  <td><input className='hire-btn' type="submit"  value="Submit" /></td>
                  </tr>
            </tbody>
          </table>
        </form>
    );
}

export default Form;