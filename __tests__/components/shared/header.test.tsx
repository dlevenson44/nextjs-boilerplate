import { render, screen, waitFor } from '@testing-library/react'
import jest from 'jest'
// import { JSDOM } from 'jsdom'

import { Header } from '../../../components/shared'

it('should render the Header component', async () => {
  const PAGE_TITLE = 'PAGE_TITLE'
  const { getByTestId } = render(<Header pageTitle={PAGE_TITLE} />)
  const node = getByTestId('header_wrapper')
  expect(node).toBeTruthy()
})
