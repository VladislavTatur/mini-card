import styled from 'styled-components'

type MyButtonProps = {
  color?: string
  fontColor?: string
}

export const MyButton = styled.button<MyButtonProps>`
    border: 2px solid blue;
    background-color: ${props => props.color || "#4E71FE"};
    border-radius: 5px;
    font-size: 10px;
    color: ${props => props.fontColor || "#ffffff"};
    width: 86px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        cursor: alias;
        background-color: brown;
    }
`