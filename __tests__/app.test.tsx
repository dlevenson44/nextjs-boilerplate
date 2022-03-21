import { render } from '@testing-library/react'

import Home from '../pages/index'

it('should render the Root page', () => {
  const { getByTestId } = render(<Home />)
  const node = getByTestId('home_wrapper')
  expect(node).toBeTruthy()
})
