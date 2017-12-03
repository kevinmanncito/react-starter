import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Header from '../components/Header'

configure({ adapter: new Adapter() })

describe('Components render correctly', () => {
  it('Header renders correctly', () => {
    const wrapper = shallow(
      <Header />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
