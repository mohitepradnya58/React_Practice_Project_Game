import React from 'react'
import styled from "styled-components"
const Rules = () => {
  return (
    <RuleContainer>
      <h2>How To Play Dice Game</h2>
      <div className='text'>
      <p>
      Select any number
      </p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
   
    </RuleContainer>
  )
}

export default Rules;

const RuleContainer=styled.div`
max-width: 800px;
margin: 40px auto;
border-radius: 10px;
background-color: #FBF1F1;
padding: 20px;
h2{
    font-size:24px;
    font-weight: bold;
    
}
.text{
    margin-top: 24px;
}
`;
