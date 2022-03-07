import { useEffect, useState } from 'react'
import Form from './components/Form/Form'
import User from './components/User/User'

function App() {
  let [data, setData] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((res) => res.json())
      .then((data) => {
        let newEmp = data.results.map((i) => {
          let user = {
            id: i.login.uuid,
            name: `${i.name.title} ${i.name.first} ${i.name.last}`,
            image: i.picture.thumbnail,
            phone: i.phone,
            email: i.cell,
          }
          return user
        })
        setData(newEmp)
      })
  }, [])

  const addEmployee = (obj) => {
    setData([...data, obj])
    console.log(obj)
  }

  const fireOutEmployee = (id) => {
    console.log(id)
    setData(data.filter((i) => i.id !== id))
  }

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="w-[100%] mx-auto min-h-[1000%] flex flex-wrap">
      <div className="w-[100%] lg:w-[30%] xl:w-[50%] mb-[100px] lg:mb-0">
        <Form add={addEmployee} open={open} toggle={toggle} />
      </div>
      <div className="w-[100%] lg:w-[70%] xl:w-[50%] h-[100vh] bg-white">
        <User info={data} num={data.length} out={fireOutEmployee} />
      </div>
    </div>
  )
}

export default App
