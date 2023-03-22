import React from 'react'

const HeadingWithPara = ({heading,para}) => {
  return (
    <div style={{margin:"5px"}}>
      <h5 style={{fontSize:"24px",color:"rgba(0, 0, 0, 0.87)"}}>{heading}</h5>
      <div style={{color:"rgba(0, 0, 0, 0.54)",fontSize:"16px"}}>{para}</div>
    </div>
  )
}

export default HeadingWithPara
