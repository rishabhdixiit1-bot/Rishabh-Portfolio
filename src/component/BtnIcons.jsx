import React from 'react'
import { FaBell, FaLanguage, FaSquareFull, FaWifi } from 'react-icons/fa'

const BtnIcons = () => {

    const data =[{icon:<FaWifi />},
                 {icon:<FaLanguage/>},
                 {icon:<FaBell/>},
                 {icon:<FaSquareFull/>}
    ]
  return (
    <div className='flex gap-10 px-10 mt-5 '>
{

  data.map((item,index)=>(
<div key={index} className=' bg-slate-100 rounded-md p-2' >
      <p className='text-black text-2xl'>{item.icon}</p>
    </div>
  ))}


    </div>
  )
}

export default BtnIcons