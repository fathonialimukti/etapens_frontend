import { StyledNavContainer, StyledNavMainContainer } from './styles';
import { Row, Col, Spacer, Link, Container } from '@nextui-org/react';
import { Logo, ThemeToggle, LoginBtn } from './navbar-components';

const Navbar = () => {

    return (
        <StyledNavMainContainer >
            <StyledNavContainer detached>
                <Container
                    wrap="nowrap"
                    alignItems="center"
                    fluid
                    responsive

                >
                    <Col>
                        <Row justify="flex-start" align="center">
                            <Link href="/">
                                <Logo />
                            </Link>
                            <Spacer x={0.4} />
                        </Row>
                    </Col>
                </Container>
                <Container alignItems='center'>
                    <Col>
                        <Row justify="flex-end" align="center">
                            <ThemeToggle
                                css={{
                                    m: '0 6px',
                                    '& svg': {
                                    transition: '$default'
                                    },
                                    '&:hover': {
                                    '& svg': {
                                        opacity: 0.7
                                    }
                                    }
                                }}
                            />
                            <Spacer x={0.5} />
                            <LoginBtn />
                        </Row>
                    </Col>
                </Container>
            </StyledNavContainer>
        </StyledNavMainContainer>
    );
}

export default Navbar;