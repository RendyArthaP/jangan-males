import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

/** Dynamic Import */
const Container = dynamic(import('~/components/layouts/Container'));

const Home: NextPage = () => {
  return (
    <Container>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </Container>
  )
}

export default Home
