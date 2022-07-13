import { Card, Text, Col, Row, Spacer } from '@nextui-org/react'
import { darkTheme, lightTheme } from 'theme';
import { useRouter } from 'next/router'
import Frontend from 'interface/Frontend';



export default function Components({ project }: { project: Frontend }) {
    const router = useRouter()

    return (
        <Card
            isPressable
            isHoverable
            variant="bordered"
            onPress={() => router.push('/project/' + project.title)}
            css={{
                [`.${darkTheme} &`]: {
                    background: 'transparent',
                    '&:hover': {
                        shadow: "0 0 15px " + darkTheme.colors.shadow,
                    },
                },
                [`.${lightTheme} &`]: {
                    '&:hover': {
                        shadow: "0 0 10px " + lightTheme.colors.shadow,
                    },
                },
                zIndex: "$2",
                minWidth: "300px",
                minHeight: "200px",
                mw: "600px",
                mh: "400px"
            }}
        >
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://nextui.org/images/card-example-2.jpeg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col>
                            <Text color="#d1d1d1" size={14}>
                                {project.title}
                            </Text>
                            <Row>
                            {project.tech?.map((tech) => <>
                                <Text color="#d1d1d1" size={12} key={tech}>{tech}</Text>
                                <Spacer x={1} />
                            </>)}
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}