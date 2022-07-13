import { Card, Container, Row, Text, Popover, Grid, Button, Table } from "@nextui-org/react";
import Backend from "interface/Backend";

export default function BackendCard({ backend }: { backend: Backend }) {
    const deleteProject = () => {

    }
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
                            <Table.Column>BACKEND</Table.Column>
                            <Table.Column>{ }</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell><Text b>Application Name</Text></Table.Cell>
                                <Table.Cell>{backend.appName}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell><Text b>Description</Text></Table.Cell>
                                <Table.Cell>{backend.description}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell><Text b>Source Code</Text></Table.Cell>
                                <Table.Cell>{backend.sourceCode}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell><Text b>url:port</Text></Table.Cell>
                                <Table.Cell>{backend.url}</Table.Cell>
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
                                <Button size="sm" light>Cancel</Button>
                            </Grid>
                            <Grid>
                                <Button size="sm" shadow color="error" onPress={()=>{deleteProject()}}>Delete</Button>
                            </Grid>
                        </Grid.Container>
                    </Grid.Container>
                </Popover.Content>
            </Popover>
        </Container>
    );
}