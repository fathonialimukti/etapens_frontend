import React from 'react';
import { Container, Row, Text, Link, CSS } from '@nextui-org/react';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({ css, containerCss }) => {
  // const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="footer__container"
      gap={2}
      css={{
        zIndex: '$max',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs'
        },
        ...containerCss
      }}
    >
      <Row justify="center" css={css}>
        <Text
          span
          className="footer__by"
          css={{
            fontSize: '$xs',
            color: '$accents7',
            '@mdMax': {
              fontSize: '$xs'
            }
          }}
        >
          Created&nbsp;by&nbsp;
          <Link href="#" rel="noreferrer" target="_blank">
            Fathoni Ali Mukti
          </Link>
        </Text>
      </Row>
    </Container>
  );
};

export default Footer;
