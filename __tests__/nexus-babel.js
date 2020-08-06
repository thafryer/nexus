import * as babel from '@babel/core'
import Nexus from '../nexus/nexus'

const h1 = `Text('h1','Hey')`
const h2 = `Text('h2','Bye')`

describe('Text', () => {
  it('creates a h1 with Hey', () => {
    const { code } = babel.transform(h1, { plugins: [Nexus] })
    expect(code).toMatchSnapshot()
  })

  it('creates a h2 with Bye', () => {
    const { code } = babel.transform(h2, { plugins: [Nexus] })
    expect(code).toMatchSnapshot()
  })
})
