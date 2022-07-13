import { Card, Container, Row, Text, Popover, Grid, Button, Table } from "@nextui-org/react";
import Frontend from "interface/Frontend";

export default function FrontendCard({ frontend }: { frontend: Frontend }) {
    return (
        <Container>
            <Popover isBordered disableShadow>
                <Popover.Trigger>
                    <Card css={{ zIndex: '$2', minWidth: '300px' }} isPressable>
                        <Card.Body>
                        <Table
                        aria-label="Example table with static content"
                        shadow={false}
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        >
                        <Table.Header>
                            <Table.Column>Frontend</Table.Column>
                            <Table.Column>{ }</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell><Text b>Project Title</Text></Table.Cell>
                                <Table.Cell>{frontend.title}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell><Text b>Description</Text></Table.Cell>
                                <Table.Cell>{frontend.description}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell><Text b>Source Code</Text></Table.Cell>
                                <Table.Cell>{frontend.sourceCode}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell><Text b>Application Name</Text></Table.Cell>
                                <Table.Cell>{frontend.appName}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="5">
                                <Table.Cell><Text b>Tech used</Text></Table.Cell>
                                <Table.Cell>{frontend.tech?.join(', ')}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="6">
                                <Table.Cell><Text b>Images</Text></Table.Cell>
                                <Table.Cell>{frontend.images?.join(', ')}</Table.Cell>
                            </Table.Row> 
                            <Table.Row key="7">
                                <Table.Cell><Text b>Document Url</Text></Table.Cell>
                                <Table.Cell>{frontend.documentUrl}</Table.Cell>
                            </Table.Row> 
                            <Table.Row key="8">
                                <Table.Cell><Text b>Mentors</Text></Table.Cell>
                                <Table.Cell>{frontend.mentors?.join(', ')}</Table.Cell>
                            </Table.Row>         
                            <Table.Row key="9">
                                <Table.Cell><Text b>url:port</Text></Table.Cell>
                                <Table.Cell>{frontend.url}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                        </Card.Body>
                    </Card>
                </Popover.Trigger>
            
                <Popover.Content>
                    <Grid.Container
                        css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}
                        >
                        <Row justify="center" align="center">
                            <Text b>Confirm</Text>
                        </Row>
                        <Row>
                            <Text>
                            Are you sure you want to delete this app ? By doing this, you will
                            not be able to recover the data.
                            </Text>
                        </Row>
                        <Grid.Container justify="space-between" alignContent="center">
                            <Grid>
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            </Grid>
                            <Grid>
                            <Button size="sm" shadow color="error">
                                Delete
                            </Button>
                            </Grid>
                        </Grid.Container>
                    </Grid.Container>
                </Popover.Content>
            </Popover>
        </Container>
    );
}