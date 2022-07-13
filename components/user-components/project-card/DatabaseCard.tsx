import { Card, Container, Table, Text } from "@nextui-org/react";
import Database from "interface/Database";

export default function DatabaseCard({ database }: { database: Database }) {
    return (
        <Container>
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
                            <Table.Column>DATABASE</Table.Column>
                            <Table.Column>{''}</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell><Text b>Type</Text></Table.Cell>
                                <Table.Cell>{database.type}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell><Text b>DB Name</Text></Table.Cell>
                                <Table.Cell>{database.dbname}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell><Text b>Username</Text></Table.Cell>
                                <Table.Cell>{database.username}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell><Text b>Password</Text></Table.Cell>
                                <Table.Cell>{database.password}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="5">
                                <Table.Cell><Text b>Status</Text></Table.Cell>
                                <Table.Cell>{database.isActive ? <Text color="success">Active</Text> : 'Under review'}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="6">
                                <Table.Cell><Text b>Note</Text></Table.Cell>
                                <Table.Cell>{database.note}</Table.Cell>
                            </Table.Row>
                            <Table.Row key="7">
                                <Table.Cell><Text b>Server IP</Text></Table.Cell>
                                <Table.Cell>{database.url}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}