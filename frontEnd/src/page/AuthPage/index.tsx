import React from 'react'

const AuthPage = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[400px] mt-10 p-7 border border-1 rounded-lg bg-white' style={{ boxShadow: '0px 1px 2px lightgray' }}>
        <div className='text-left'>
          <h1 className='text-2xl mb-5 font-semibold'>Welcome 🙌</h1>
          <p className='text-sm mb-2' >이름을 입력해주세요.</p>
          <input placeholder=':)홍길동' type="text" className='w-full border p-2 rounded-lg' />
        </div>
        <div className='text-right mt-3'>
          <button className='w-[90px] text-white border border-1 p-1 bg-buttonStyle rounded-md'>완료</button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage