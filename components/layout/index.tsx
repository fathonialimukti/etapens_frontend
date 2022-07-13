import Navbar from './navbar'
import Footer from './footer'
import { keyframes, styled, Row, Container, Col } from '@nextui-org/react';
import { darkTheme, lightTheme } from 'theme';

export default function Layout({ children } : { children:React.ReactNode}) {
  const StyledImg = styled('img', {});
  const appears = keyframes({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  
  return (
    <>
      <Navbar />
      {children}
      <Row>
        <StyledImg
        src="/gradient-left-dark.svg"
        alt="gradient blue background"
          css={{
          zIndex: '$1',
          display: 'none',
          opacity: 0,
          position: 'fixed',
          bottom: '-50%',
          left: '-10%',
          right: '-50%',
          animation: `${appears} 200ms 100ms ease forwards`,
          [`.${darkTheme} &`]: {
            display: 'block'
          },
        }}
      />
      <StyledImg
        src="/gradient-right-dark.svg"
        alt="gradient violet background"
        css={{
          zIndex: '$1',
          display: 'none',
          top: 0,
          opacity: 0,
          position: 'fixed',
          animation: `${appears} 200ms 100ms ease forwards`,
          '@lg': {
            top: '-50%',
            right: '-50%'
          },
          '@mdMax': {
            top: '-35%',
            right: '-45%'
          },
          [`.${darkTheme} &`]: {
            display: 'block'
          }
        }}
      />
      <StyledImg
        src="/gradient-left-light.svg"
        alt="gradient blue background"
        css={{
          zIndex: '$1',
          display: 'none',
          opacity: 0,
          position: 'fixed',
          bottom: '-50%',
          left: '-10%',
          right: '-50%',
          animation: `${appears} 200ms 100ms ease forwards`,
          [`.${lightTheme} &`]: {
            display: 'block'
          }
        }}
      />
      <StyledImg
        src="/gradient-right-light.svg"
        alt="gradient violet background"
        css={{
          zIndex: '$1',
          display: 'none',
          top: 0,
          opacity: 0,
          position: 'fixed',
          animation: `${appears} 200ms 100ms ease forwards`,
          '@lg': {
            top: '-50%',
            right: '-50%'
          },
          '@mdMax': {
            top: '-35%',
            right: '-45%'
          },
          [`.${lightTheme} &`]: {
            display: 'block'
          }
        }}
      />
      </Row>
      <Footer />
    </>
  )
}