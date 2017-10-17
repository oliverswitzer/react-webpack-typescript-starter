import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
import MusicFileUploader from '../../src/components/MusicFileUploader'

describe('COMPONENT: MusicFileUploader', () => {
  let componentNode: Element

  beforeAll((done) => {
    const appElement: MusicFileUploader = TestUtils.renderIntoDocument(
      <MusicFileUploader/>
    )
    componentNode = ReactDOM.findDOMNode(appElement)
    done()
  })
})