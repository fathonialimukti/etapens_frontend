import { Container, Dropdown, Spacer, Text, Row, Button, Grid, Loading } from "@nextui-org/react";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react"
import Router from 'next/router'
import User from "interface/User";
import { FrontendModal, BackendModal, DatabaseModal, FrontendCard, DatabaseCard, BackendCard } from "components/user-components";
import Frontend from "interface/Frontend";
import Backend from "interface/Backend";
import Database from "interface/Database";

// make serverside rendered
export default function Component() {
 
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [frontend, setFrontend] = useState<Frontend>();
  const [backend, setBackend] = useState<Backend>();
  const [database, setDatabase] = useState<Database>();

  const [error, setError] = useState<{ status: boolean, message: string }>({ status: false, message: '' });

  const [modal, setModal] = useState<{ frontend: boolean, backend: boolean, database: boolean }>({ frontend: false, backend: false, database: false});
  
  const getData = async () => {
    setLoading(true);
    const session = await getSession();
    await fetch("http://localhost:4000/user/"+ session?.user?.email)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError({ status: true, message: data.message });
        }
        setUser(data);
      });
    setLoading(false);
  }

  const getUserProject = async () => {
    setLoading(true);
    setBackend(undefined);
    setDatabase(undefined);
    setFrontend(undefined);
    fetch('http://localhost:4000/project/user/' + user?._id)
      .then((res) => res.json())
      .then((data) => {
        if (data.frontend) setFrontend(data.frontend);
        if (data.backend) setBackend(data.backend);
        if (data.database) setDatabase(data.database);
      });
    
    console.log('getuserproject');
    setLoading(false);
  }

  useEffect( () => {
    getData()
  }, []);

  useEffect( () => {
    getUserProject()
  }, [user]);

  if (isLoading || !user) {
    return (
      <Loading />
    ); 
  }

  if (error.status) {
    if (error.message == "User does not exist") {
      return Router.push('/user/account')
    }
    return (
      <Text>{ error.message }</Text>
    ); 
  }
  
  return (
    <>
      <Spacer y={1} />
      <Container fluid>
        <Row justify='flex-end'>
          <Dropdown>
            <Dropdown.Button flat>Create New</Dropdown.Button>
            <Dropdown.Menu>
              {!frontend && <Dropdown.Item key="frontend"><p onClick={() => setModal({ ...modal, frontend: true })}>Front End App</p></Dropdown.Item>}
              {!backend && <Dropdown.Item key="backend"><p onClick={() => setModal({ ...modal, backend: true })}>Back End App</p></Dropdown.Item>}
              {!database && <Dropdown.Item key="database"><p onClick={() => setModal({ ...modal, database: true })}>Request Database</p></Dropdown.Item>}
              <Dropdown.Item key="tutorial" color="warning" withDivider>Tutorial</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button light color="warning" onPress={()=>{getUserProject()}} auto>Refresh</Button>
        </Row>
        <Spacer y={1} />
        <Grid.Container>
          {frontend ? <Grid><FrontendCard frontend={frontend}/></Grid> : null} 
          {backend ? <Grid><BackendCard backend={backend}/></Grid> : null}  
          {database ? <Grid><DatabaseCard database={database}/></Grid> : null}  
        </Grid.Container>
      </Container>
      <FrontendModal userId={user?._id} modal={modal} setModal={setModal} /> {/* frontend={frontend} setFrontend={setFrontend} /> */}
      <BackendModal userId={user?._id} modal={modal} setModal={setModal} /> {/* backend={backend} setBackend={setBackend} /> */}
      <DatabaseModal userId={user?._id} modal={modal} setModal={setModal} />  {/* database={database} setDatabase={setDatabase} */}
    </>
  );
}
