import styled from 'styled-components'

export const MainDiv = styled.div`
  background-image: linear-gradient(
    to ${props => props.text1},
    ${props => props.isColor1},
    ${props => props.isColor2}
  );
  padding: 20px;

  display: flex;
  flex-direction: column;

  align-items: center;
`
export const MainHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: #ffffff;
`
export const ParagraphChoose = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ededed;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ColorDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ColorName = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
  margin-right: 30px;
`
export const Input = styled.input`
  height: 40px;
  width: 90px;
  border-width: 0px;
  background-color: transparent;
`
export const ButtonGenerator = styled.button`
  background-color: #00c9b7;
  font-family: 'Roboto';
  height: 30px;
  width: 90px;
  border-width: 0px;
  border-radius: 6px;
  color: #1e293b;
`
