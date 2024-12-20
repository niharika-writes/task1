import React, { useState } from 'react'

const App = () => {
    const [username, setUsername] = useState('')
  
    const [company, setCompany] = useState('')
  
    const [phone, setPhone] = useState('')

    const [allUsers, setAllUsers] = useState([])

    const newArr = [...allUsers, {username, phone, company}]
  
    const newUser = (elem)=>{
      setUsername(elem.target.value)

    }
  
    const newCompany = (elem)=>{
      setCompany(elem.target.value)
    }
  
    const newPhone = (elem)=>{
      setPhone(elem.target.value)
    }
  
    const submitHandler = (e)=>{
      e.preventDefault()
      console.log("Hogya submit")
      setAllUsers(newArr)
      setCompany('')
      setPhone('')
      setUsername('')
      console.log(newArr)
    }

  return (
    <div className='bg-blue-100 h-screen p-4 flex font-arial'>
      <div className='h-screen w-1/2 bg-white drop-shadow-md p-5'>
      <h1 className='text-xl mb-5 font-bold'>Add Contact</h1>
      <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col'>
        <h1>Name*</h1>
        <input className='border-2 w-full mb-5 border-grey-100 px-4 py-2 rounded text-sm'
        placeholder='Enter name'
        value={username}
        onChange={newUser}
        type="text" />
        <h1>Company</h1>
        <input className='border-2 w-full mb-5 border-grey-100 px-4 py-2 rounded text-sm'
        placeholder='Enter Company'
        value={company}
        onChange={newCompany}
        type="text" />
        <h1>Phone*</h1>
        <input className='border-2 w-full mb-5 border-grey-100 px-4 py-2 rounded text-sm'
        placeholder='Enter phone number'
        value={phone}
        onChange={newPhone}
        type="text" />
        <br />
        
        <button className='bg-blue-700 w-full mt-4 text-white px-4 py-2 rounded-md text-sm'>Add Contact</button>
      </form>
      </div>
      
      <div className='p-4 w-1/2 font-arial'>
      <h1 className='text-2xl font-bold mb-5'>Contact List</h1>
        {allUsers.map(function(elem, idx){

          return <div>
            <div className='w-full px-4 py-2 rounded mt-8 drop-shadow-md bg-white '>
              <h2 className='text-lg font-semibold'>{elem.username}</h2>
              <h3>Company: {elem.company}</h3>
              <h3>Phone: {elem.phone}</h3>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App