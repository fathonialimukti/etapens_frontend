import { Container, Card, Input, Spacer, Button, Textarea, Modal, Text } from "@nextui-org/react";
import User from "interface/User";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from 'theme';
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Component() {
    const [user, setUser] = useState<User>();
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const loadSession = async () => {
        const session = await getSession();
        setUser({ email: session.user.email });
    }

    useEffect(() => { loadSession() }, []);

    const handleSubmit = async () => {
        const JSONdata = JSON.stringify(user)
        const endpoint = 'http://localhost:4000/user'
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result: User = await response.json()
        setUser(result)
        setVisible(true);
    }

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <>
        <Container justify="center" align="center">
            <Spacer y={2} />
            <Card
            isHoverable
            css={{
                [`.${darkTheme} &`]: {
                    background: 'transparent',
                    '&:hover': {
                        shadow: "0 0 20px " + darkTheme.colors.shadow,
                    },
                },
                [`.${lightTheme} &`]: {
                    '&:hover': {
                        shadow: "0 0 10px " + lightTheme.colors.shadow,
                    },
                },
                zIndex: '$2',
                position: 'sticky',
                top: '80px',
                maxWidth: "500px",
            }}
            variant="bordered"
            >
                <Card.Body>
                    <Input labelLeft="Email" aria-label="email" readOnly underlined initialValue={user?.email} />
                    <Input labelLeft="Name" aria-label="name" underlined onChange={ e => setUser({ ...user, name: e.target.value })} />
                    <Input labelLeft="NRP" aria-label="nrp" type="number" underlined onChange={ e => setUser({ ...user, nrp: e.target.value })} />
                    <Spacer y={0.5} />
                    <Input label="Image" aria-label="image" underlined type="file" onChange={ e => setUser({ ...user, image: e.target.value })}/>
                    <Spacer y={0.5} />
                    <Textarea label="About" aria-label="about" onChange={ e => setUser({ ...user, about: e.target.value })} placeholder="Tells something about you."/>
                    <Spacer y={3} />
                    <Button aria-label="submit" onPress={handleSubmit}>Submit</Button>
                </Card.Body>
            </Card>
        </Container>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>Success</Text>
            </Modal.Header>
            <Modal.Body>
                <Input labelLeft="Email" aria-label="email" readOnly initialValue={user?.email} />
                <Input labelLeft="Name" aria-label="email" readOnly initialValue={user?.name} />
                <Input labelLeft="Nrp" aria-label="email" readOnly initialValue={user?.nrp} />
                <Input labelLeft="Image" aria-label="email" readOnly initialValue={user?.image} />
                <Textarea label="About" aria-label="email" readOnly initialValue={user?.about} />
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
                Edit again
            </Button>
            <Button auto onPress={ ()=> {router.push('/user')} }>
                Back
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}