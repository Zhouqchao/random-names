import {expect} from 'chai'
import randomNames from './index'

describe('random-names', () => {
  it('should have a list of all available names', () => {
    expect(randomNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(randomNames.random()).to.satisfy(isIncludedIn(randomNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
