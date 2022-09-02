import type { NextPage } from 'next'

import { Header } from '../components/shared'
const Home: NextPage = () => {
  return (
    <div data-testid="home_wrapper">
      <Header pageTitle="root" />
    </div>
  )
}

export default Home
