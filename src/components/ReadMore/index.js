import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore

// import {useState} from 'react'

// import {
//   BgContainer,
//   Heading,
//   Image,
//   Paragraph,
//   ParagraphElement,
//   ButtonRead,
// } from './styledComponents'

// const ReadMore = props => {
//   const {reactHooksDescription} = props
//   const [useName, setName] = useState(false)
//   const nani =
//     'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
//   console.log(nani.length)
//   const onChangeRead = () => {
//     setName(prevState => !prevState)
//   }

//   const nameValue = useName
//     ? reactHooksDescription
//     : reactHooksDescription.slice(0, 170)
//   const buttonValue = useName ? 'Read Less' : 'Read More'
//   return (
//     <BgContainer>
//       <Heading>React Hooks</Heading>
//       <Paragraph>Hooks are a new addition to React </Paragraph>
//       <Image
//         src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
//         alt="react hooks"
//       />
//       <ParagraphElement>{nameValue}</ParagraphElement>
//       <ButtonRead onClick={onChangeRead}>{buttonValue}</ButtonRead>
//     </BgContainer>
//   )
// }

// export default ReadMore
