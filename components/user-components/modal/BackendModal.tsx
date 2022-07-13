import { Modal, Text, Button, Input, Spacer, Loading } from "@nextui-org/react";
import Backend from "interface/Backend";
import { useState } from "react";

export default function BackendModal({ modal, setModal, userId }: { modal: any, setModal: any, userId: string }) {
  let backend: Backend;
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async () => {
    setLoading(true);
    backend.creator = userId;
    await fetch("http://localhost:4000/project?type=backend", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(backend),
      })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) setMessage("Registration success, Deploying...");
        else setMessage(data.message)
        backend = data;
      });
    await fetch("http://localhost:5000/project/create", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(backend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) setMessage("App Deployed, Finishing...");
        else setMessage(data.message)
        backend.url = data.port;
      });
    await fetch("http://localhost:4000/project?type=backend", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(backend),
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
        open={modal.backend}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Create{" "}
            <Text b size={18}>
              Backend
            </Text>
            {" "} App
          </Text>
        </Modal.Header>
      <Modal.Body>
        <Input clearable underlined required aria-label="appName" labelLeft="appName" onChange={e => {backend.appName = e.target.value }} />
        <Input clearable underlined required aria-label="sourceCode" labelLeft="Source_Code" onChange={e => {backend.sourceCode = e.target.value }} />
        <Input clearable underlined required aria-label="description" labelLeft="description" onChange={e => {backend.description = e.target.value }} />
      </Modal.Body>
      <Modal.Footer>
        {loading ? null : <Button auto color="error" onPress={() => setModal({ ...modal, backend: !modal.backend })}>Close</Button>}
        {message != 'ok' ? <Button aria-label="submit" onPress={handleSubmit}>{loading ? <Loading type="points" color="currentColor" size="sm" /> : "submit"}</Button> : <Button color='success'>App successfully deployed</Button>}
        {message != 'ok' ? <Text>{message}</Text> : null}
      </Modal.Footer>
      </Modal>
  );
}