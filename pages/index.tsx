import type { NextPage } from 'next'
import Head from 'next/head'
import GamePitchList from '../components/form/GamePitchList'
import { Container } from '@mui/material'
import PitchForm from '../components/form/PitchForm'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container maxWidth="sm">
        {/* <PitchForm/> */}
        <GamePitchList/>
      </Container>
    </>
  )
}

export default Home
