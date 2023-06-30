import {useState} from 'react'
import {
  MainDiv,
  MainHeading,
  ParagraphChoose,
  Ul,
  ColorName,
  ColorDiv,
  Input,
  ButtonGenerator,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [color1, setColor1] = useState('#8ae323')
  const [color2, setColor2] = useState('#014f7b')
  const [isColor1, setChangedColor1] = useState(color1)
  const [isColor2, setChangedColor2] = useState(color2)
  const [text1, setButtonText] = useState('top')
  const [activeBtn, setActive] = useState('top')
  const onChangeColor1 = event => {
    setColor1(event.target.value)
  }
  const onChangeColor2 = event => setColor2(event.target.value)
  const onChangeColor = () => {
    setChangedColor1(color1)
    setChangedColor2(color2)
  }
  const changeDirection = text => {
    setButtonText(text)
    setActive(text)
  }

  return (
    <MainDiv
      text1={text1}
      isColor1={isColor1}
      isColor2={isColor2}
      data-testid="gradientGenerator"
    >
      <MainHeading>Generate a CSS Color Gradient</MainHeading>
      <ParagraphChoose>Choose Direction</ParagraphChoose>
      <Ul>
        {gradientDirectionsList.map(each => (
          <GradientDirectionItem
            each={each}
            changeDirection={changeDirection}
            key={each.directionId}
            activeBtn={activeBtn}
          />
        ))}
      </Ul>

      <ParagraphChoose>Pick the Colors</ParagraphChoose>
      <ColorDiv>
        <div>
          <ColorName htmlFor="color1">{color1}</ColorName>
          <br />
          <Input
            type="color"
            id="color1"
            onChange={onChangeColor1}
            value={color1}
          />
        </div>
        <div>
          <ColorName htmlFor="color2">{color2}</ColorName>
          <br />
          <Input
            type="color"
            id="color2"
            onChange={onChangeColor2}
            value={color2}
          />
        </div>
      </ColorDiv>
      <ColorDiv>
        <br />
      </ColorDiv>
      <ButtonGenerator onClick={onChangeColor}>Generate</ButtonGenerator>
    </MainDiv>
  )
}
export default GradientGenerator
