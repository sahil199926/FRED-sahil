import React from 'react'

const Page3Card = ({image,heading}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"5px",gap:"10px"}}>
        <div style={{color:"#0066B2",fontSize:"16px"}}><b>{heading}</b></div>
        <img src={image} alt={heading} height="220" />
    </div>
  )
}

export default Page3Card