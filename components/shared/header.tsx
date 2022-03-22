import React from 'react'

import Head from 'next/head'

interface HeaderProps {
  pageTitle: string
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div data-testid="header_wrapper"></div>
    </>
  )
}

export default Header
