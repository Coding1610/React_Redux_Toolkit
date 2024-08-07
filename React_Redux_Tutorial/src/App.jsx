import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement } from './Slices/Counter/counterSlice'

export default function App(){

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // console.log(count);

  return (
    <>
    <div className='flex justify-center h-screen items-center'>
      <span className='p-5 bg-slate-400 rounded-[50px] text-white font-thin ml-3 text-2xl'> Count : <span className='text-black font-bold'> {count} </span></span>
      <button className='p-5 bg-slate-500 rounded-[50px] text-white font-thin ml-3 text-2xl outline-none' onClick={() => dispatch(increment())}>Increment</button>
      <button className='p-5 bg-slate-600 rounded-[50px] text-white font-thin ml-3 text-2xl outline-none' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    </>
  )
}