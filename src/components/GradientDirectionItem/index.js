import {useState} from 'react'
import {ActiveBtn, Btn, Li} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, changeDirection, activeBtn} = props
  const [opacity, setOpacity] = useState(0.5)

  const buttonColor = () => {
    changeDirection(each.value)
  }
  return (
    <Li>
      {activeBtn === each.value ? (
        <ActiveBtn type="button" onClick={buttonColor}>
          {each.displayText}
        </ActiveBtn>
      ) : (
        <Btn type="button" onClick={buttonColor}>
          {each.displayText}
        </Btn>
      )}
    </Li>
  )
}
export default GradientDirectionItem
