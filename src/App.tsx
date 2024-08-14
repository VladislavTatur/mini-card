import React from 'react'
import './App.css'
import {MyButton} from './components/button/button.styled'
import styled from 'styled-components'
import {Heading} from './components/h1/MyH1'
import {ImgStyled} from './components/img/ImgStyled'
import Rectangle from './img/Rectangle 1.svg'
import {TextInPage} from './components/text/TextInPage'


function App() {
  return (
    <div className="App">

      <Box>
        <Container>


          <ImgStyled src={Rectangle} alt="Rectangle"/>

          <Heading>Headline</Heading>

          <TextInPage>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
            venen.</TextInPage>

          <Buttons>
            <MyButton color="red">See more</MyButton>
            <MyButton color={'transparent'} fontColor={'#4E71FE'}>Save</MyButton>
          </Buttons>

        </Container>
      </Box>/

    </div>
  )
}

export default App

const Box = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Container = styled.div`
    border-radius: 15px;
    width: 300px;
    height: 350px;
    box-shadow: 0 4px 20px 5px #0000001A;
    



`
const Buttons = styled.div`
    gap: 15px;
    margin: 15px;
    display: flex;
    justify-content: flex-start;
`