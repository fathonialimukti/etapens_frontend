import { Grid, Pagination, Loading, Text } from '@nextui-org/react'
import { PostCard, PostWidget } from 'components/home-components'
import Frontend from 'interface/Frontend'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// make server side rendered
const Home: NextPage = () => {
  const baseUrl = 'http://localhost:4000/project'

  const [projects, setProjects] = useState<Frontend[]>([])
  const [totalPage, setTotalPage] = useState<number>()
  const [isLoading, setLoading] = useState(true)

  const [query, setQuery] = useState<{title:string, tech:string, page:number}>({title: '', tech: '', page: 1})

  useEffect(() => {
    setLoading(true)
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects)
        setTotalPage(data.totalPage)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setLoading(true)

    let path = ``;
    if (query.page != undefined) path += `?page=${query.page}`
    if (query.title != '') path += `&title=${query.title}`
    if (query.tech != '') path += `&tech=${query.tech}`

    console.log(path)

    fetch(baseUrl + path)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects)
        setTotalPage(data.totalPage)
        setLoading(false)
      })
  }, [query])


  return (
    <>
      <Head>
        <title>Etalase TA</title>
        <meta name="descriptionription" content="deskripsi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid.Container gap={1} justify="center">
          <Grid lg={9} md={12} sm={12} xs={12}>
            <Grid.Container gap={1} justify="center">
              {
                isLoading ?
                  <Grid>
                    <Loading size='xl' />
                  </Grid>
                : projects.length == 0 ? 
                    <Grid><Text>Not Found</Text></Grid>
                  : projects.map((project) =>
                    <Grid lg={4} md={4} sm={4} key={project.title}>
                        <PostCard project={project} />
                    </Grid>)
              }
            </Grid.Container>
          </Grid>
          <Grid lg={3} md sm xs={12}>
            <PostWidget query={query} setQuery={setQuery} />
          </Grid>

          <Grid lg={12} md={12} sm={12} justify="center" css={{ zIndex:"$2" }}>
            <Pagination onChange={(page: number) => setQuery({...query, page:page})} shadow loop total={totalPage} page={query.page} />
          </Grid>
        </Grid.Container>
      </main>
      </>
  )
}

export default Home
  
