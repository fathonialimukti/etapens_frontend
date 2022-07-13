import { Modal, Text, Button, Input, Spacer, Dropdown, Loading } from "@nextui-org/react";
import Database from "interface/Database";
import { useState, useMemo } from "react";

export default function DatabaseModal({ modal, setModal, userId }: { modal: any, setModal: any, userId: string }) {
  let database: Database;
  const [selected, setSelected] = useState(new Set(["Database Type"]));
  const [message, setMessage] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );


  const handleSubmit = async () => {
    setLoading(true);
    database.creator = userId;
    database.type = selectedValue;
    const JSONdata = JSON.stringify( database );
    const endpoint = 'http://localhost:4000/project?type=database'
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSONdata,
    }
    await fetch(endpoint, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
    setLoading(false);
  }

  return (
      <Modal
        preventClose
        blur
        aria-labelledby="modal-title"
        open={modal.database}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Request {" "}
            <Text b size={18}>
              Database
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={()=>setSelected}
            >
              <Dropdown.Item key="mysql">Mysql</Dropdown.Item>
              <Dropdown.Item key="postgresql">Postgresql</Dropdown.Item>
              <Dropdown.Item key="mongodb">Mongodb</Dropdown.Item>
              <Dropdown.Item key="oracledb">Oracledb</Dropdown.Item>
              <Dropdown.Item key="redis">Redis</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <Input clearable underlined aria-label="dbname" labelLeft="dbname" onChange={e => {database.dbname = e.target.value} } />
        <Input clearable underlined aria-label="username" labelLeft="username" onChange={e => {database.username = e.target.value} } />
        <Input clearable underlined aria-label="password" labelLeft="password" onChange={e => {database.password = e.target.value} } />
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="error" onPress={() => setModal({ ...modal, database: !modal.database })}>Close</Button>
          {message != 'ok' ? <Button aria-label="submit" onPress={handleSubmit}>{loading ? <Loading type="points" color="currentColor" size="sm" /> : "submit"}</Button> : <Button color='success'>Request under review</Button>}  
          {message != 'ok' ? <Text>{message}</Text> : null}  
        </Modal.Footer>
      </Modal>
  );
}