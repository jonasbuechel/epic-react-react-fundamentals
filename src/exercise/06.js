// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef } from "react";

function UsernameForm({onSubmitUsername}) {
    const [userName, setUserName] = React.useState('');
    const inputRef = useRef(null);

  // 🐨 add a submit event handler here (`handleSubmit`).
    function handleSubmit(event) {
        event.preventDefault();
        onSubmitUsername(userName);
    }

    function handleUsernameChange(event) {
        const currentValueLowerCase = event.target.value.toLowerCase();
        setUserName(currentValueLowerCase);
    }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input value={userName} type="text" ref={inputRef} id="username" onChange={handleUsernameChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
