import React from 'react'

const Container = ({children}) => {
  return (
    <center>

    <div className='card' style={{width:"40%"}}>
      <div className='card-body'>{children}</div>
    </div>
    </center>
  )
}

export default Container
