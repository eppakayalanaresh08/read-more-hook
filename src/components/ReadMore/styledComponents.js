import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`

export const Title = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.5;
  }
`
export const Subtitle = styled.p`
  text-align: center;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.5;
  }
`
export const Image = styled.img`
  width: 100%;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`
export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: 1.7;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`
export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  background-color: #1f81ff;
  border: none;
  border-radius: 6px;
  margin-top: 8px;
  padding: 8px 16px;
  align-self: flex-start;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    align-self: center;
  }
`

// import styled from 'styled-components'

// export const BgContainer = styled.div`
//   height: 100vh;
// `

// export const Heading = styled.h1`
//   font-family: 'Roboto';
// `

// export const Paragraph = styled.p`
//   font-family: 'Roboto';
// `

// export const Image = styled.img`
//   height: 300px;
// `

// export const ParagraphElement = styled.p`
//   font-size: 20px;
// `

// export const ButtonRead = styled.button`
//   background-color: #1f81ff;
// `
