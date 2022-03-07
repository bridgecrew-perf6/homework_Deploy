import { useState } from 'react'
import React from 'react'

function Form({ add, open, toggle }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="w-fit ml-5 my-50">
      <h1 className="text-2xl font-semibold text-red-500 mb-5 mt-3 lg:mt-0 mr-3 lg:mr-20">
        Add New Employee
      </h1>
      <button
        onClick={toggle}
        className="border border-red-500 text-red-500 hover:border-[#7a0000] hover:text-[#290004] px-3 py:1"
      >
        Add
      </button>

      {open && (
        <form
          className="border-2 space-y-2 border-red-500 py-5 px-5 mt-5 rounded text-red-500"
          onSubmit={(e) => {
            e.preventDefault()

            let id = Math.floor(Math.random() * 10000)

            let obj = {
              id,
              name,
              image: !image
                ? 'https://randomuser.me/api/portraits/thumb/women/90.jpg'
                : image,
              phone,
              email,
            }

            if (name === '' || phone === '' || email === '') return

            add(obj)

            setName('')
            setEmail('')
            setImage('')
            setPhone('')
            toggle()
          }}
        >
          <div>
            <label htmlFor="Employee" className="block">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-red-500 border-2 outline-0 pl-2"
            />
          </div>
          <div>
            <label htmlFor="Employee" className="block">
              cell
            </label>
            <input
              type="number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-red-500 border-2 outline-0 pl-2"
            />
          </div>
          <div>
            <label htmlFor="Employee" className="block">
              Image
            </label>
            <input
              type="img"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border-red-500 border-2 outline-0 pl-2"
            />
          </div>
          <div>
            <label htmlFor="Employee" className="block">
              Phone
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-red-500 border-2 outline-0 pl-2"
            />
          </div>
          <input type="submit" className="border border-red-500 px-2 py-1" />
        </form>
      )}
    </div>
  )
}

export default Form
