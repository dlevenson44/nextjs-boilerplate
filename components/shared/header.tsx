import React from 'react'

import Head from 'next/head'

interface HeaderProps {
  pageTitle: string
}

const Header: React.FC<HeaderProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{pageTitle}</title>
      </Head>
      <div data-testid="header_wrapper">{children}</div>
    </>
  )
}

export default Header
