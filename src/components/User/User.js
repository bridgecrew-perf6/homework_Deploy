import { BsTrash } from 'react-icons/bs'

function User({ info, num, out }) {
  return (
    <div className="mx-3 sm:mx-10 ">
      <div className="text-red-500 text-2xl font-semibold mb-10">
        <div className="text-center">
          <h1>Total Employee</h1>
          <p>{num}</p>
        </div>
      </div>
      {info.map((i) => {
        return (
          <div
            key={i.id}
            className="flex justify-between items-center text-red-500 border-2 border-red-500 px-1 py-1 md:px-2 md:py-2 mt-5"
          >
            <div className="sm:flex items-center sm:space-x-2">
              <img src={i.image} alt="" />
              <p className="text-[10px] sm:text-base">{i.name}</p>
            </div>
            <div className="text-xs md:text-base md:text-center">
              <p>cell:{i.email}</p>
              <p>Ph:{i.phone}</p>
            </div>

            <div className="px-2 py-2 bg-red-500">
              <BsTrash className="text-white" onClick={(_) => out(i.id)} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default User
