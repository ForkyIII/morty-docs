const transformContent = require('../../src/transform-content.js')
const parseToHTML = require('../../src/markdown-to-html-parser')

jest.mock('../../src/markdown-to-html-parser')

const options = { contentTitle: 'Some Title' }

describe('Transformed content passed to html parser is of correct type', () => {
  it('Content passed into the html parser is a string', () => {
    const inputObj = {
      relativePath: 'file-name.md',
      raw: Buffer.from(`some text here`, 'utf-8')
    }

    transformContent(inputObj, options)

    expect(parseToHTML).toHaveBeenCalledWith(expect.any(String))
  })
})
