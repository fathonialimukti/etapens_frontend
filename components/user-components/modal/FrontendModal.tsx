import { Modal, Text, Button, Input, Spacer, Loading } from "@nextui-org/react";
import Frontend from "interface/Frontend";
import { useState } from "react";

export default function FrontendModal({ modal, setModal, userId }: { modal: any, setModal: any, userId: string }) {
  let frontend: Frontend = {};
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async () => {
    setLoading(true);
    frontend.creator = userId;
    await fetch("http://localhost:4000/project?type=frontend", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(frontend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) setMessage("Registration success, Deploying...");
        else setMessage(data.message)
        frontend = data;
      });
    await fetch("http://localhost:5000/project/create", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(frontend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) setMessage("App Deployed, Finishing...");
        else setMessage(data.message)
        frontend.url = data.port;
      });
    await fetch("http://localhost:4000/project?type=frontend", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(frontend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) setMessage("ok");
        else setMessage(data.message)
      });
    setLoading(false);
  }

  return (
      <Modal
        preventClose
        blur
        aria-labelledby="modal-title"
        open={modal.frontend}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Create{" "}
            <Text b size={18}>
              Frontend
            </Text>
            {" "} App
          </Text>
        </Modal.Header>
      <Modal.Body>
        <Input clearable underlined required aria-label="title" labelLeft="Project_Title" onChange={e => { frontend.title = e.target.value }} />
        <Input clearable underlined required aria-label="description" labelLeft="Description" onChange={e => {frontend.description = e.target.value }} />
        <Input clearable underlined required aria-label="sourceCode" labelLeft="Source_Code" onChange={e => {frontend.sourceCode = e.target.value }} />
        <Input clearable underlined required aria-label="documentUrl" labelLeft="documentUrl" onChange={e => {frontend.documentUrl = e.target.value }} />
        {/* <Input clearable underlined required aria-label="images" labelLeft="images" onChange={e => {frontend.images = e.target.value }} />
        <Input clearable underlined required aria-label="tech" labelLeft="Tech_list" onChange={e => {frontend.tech = e.target.value }} />
        <Input clearable underlined required aria-label="mentors" labelLeft="Mentors" onChange={e => {frontend.mentors = e.target.value }} /> */}
      </Modal.Body>
      <Modal.Footer>
        {loading ? null : <Button auto color="error" onPress={() => setModal({ ...modal, frontend: !modal.frontend })}>Close</Button>}
        {message != 'ok' ? <Button aria-label="submit" onPress={handleSubmit}>{loading ? <Loading type="points" color="currentColor" size="sm" /> : "submit"}</Button> : <Button color='success'>App successfully deployed</Button>}
        {message != 'ok' ? <Text>{message}</Text> : null}
      </Modal.Footer>
      </Modal>
  );
}