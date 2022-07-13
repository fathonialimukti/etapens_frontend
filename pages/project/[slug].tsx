import Project from "interface/Project";
import { GetServerSideProps } from 'next';
import { Spacer, Container, Card, Text, Button, Grid } from "@nextui-org/react";

export const getServerSideProps: GetServerSideProps = async ({ params: { slug } }) => {
  const res = await fetch('http://localhost:4000/project/'+slug);
  const project: Project = await res.json()
  console.log(project);
  return {
    props: {
      project: project,
    },
  };
}

export default function Component({ project }:{ project: Project }) {
    return (
      <>
        <Spacer y={1} />
        <Container fluid>
          <Card css={{ zIndex: '$2' }}>  
            <Card.Header css={{ p: 0}}>
              <Card.Image
                src="https://nextui.org/images/card-example-2.jpeg"
                objectFit="cover"
                alt="Relaxing app background"
              />
            </Card.Header>
            <Card.Body >
              <Container>
                <Grid><Text b>Judul</Text></Grid>
                <Grid><Text>{ project.title }</Text></Grid>
                
                <Spacer y={1}></Spacer>
                <Grid><Text b>Deskripsi</Text></Grid>
                <Grid><Text>{ project.description }</Text></Grid>
                
                <Spacer y={1}></Spacer>
                <Grid><Text b>Mahasiswa Pembuat </Text></Grid>
                <Grid><Text>{ project.creator }</Text></Grid>
                
                <Spacer y={1}></Spacer>
                <Grid><Text b>Dosen Pembimbing</Text></Grid>
                <Grid><Text>{ project.mentors } </Text></Grid>

                <Spacer y={1}></Spacer>
                <Grid><Text>{ project.tech }</Text></Grid>

              </Container>
            </Card.Body>

            <Card.Divider />
            
            <Card.Footer>
              <Grid.Container justify="space-around">
                <Grid><a target="_blank" rel="noopener noreferrer" href="https://google.com"><Button>Website</Button></a></Grid>
                <Grid><a target="_blank" rel="noopener noreferrer" href="https://asurascans.com"><Button>Buku</Button></a></Grid>
              </Grid.Container>
            </Card.Footer>
          </Card>
        </Container>
      </>
    );
}
