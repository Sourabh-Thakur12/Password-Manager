import React, { useLayoutEffect } from 'react'
import { useState, useEffect } from 'react'

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])
    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: [e.target.value] })
    }


    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" mycontainer ">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>MANAGER/&gt;</span>
                </h1>
                <p className='text-green-700 text-lg text-center'>manage your password</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website Url' className='border-green-500 rounded-full border w-full px-4' type="text" name="site" id="" />
                    <div className="flex w-full  justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='border-green-500 rounded-full border w-full px-4' type="text" name="username" id="" />

                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className=' border-green-500 rounded-full border w-full px-4' type="password" name="password" id="" />
                            <span className='absolute '>
                                show

                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-500 hover:bg-green-300 w-fit border rounded-full p-2 px-8 gap-4' >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Password</h2>
                    {passwordArray.length === 0 && <div> non passwords currently</div>}
                    {passwordArray.length !=0 &&
                    <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className=' bg-green-500 text-white'>
                            <tr>
                                <th className='py-4'> Site </th>
                                <th className='py-4'>Username</th>
                                <th className='py-4'>Password</th>
                            </tr>
                        </thead>
                        <tbody className=' bg-green-100'>
                            {passwordArray.map((item, index) => {
                              return <tr key = {index}>
                                <td className=' py-2 border border-white text-center w-32'> <a href={item.site} target = '_blank' > {item.site}</a></td>
                                <td className=' py-2 border border-white text-center w-32'>{item.username}</td>
                                <td className=' py-2 border border-white text-center w-32'>{item.password}</td>
                            </tr>
                            })
                            }
                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
    )
}

export default Manager
