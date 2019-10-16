const readdir = require('recursive-readdir')
const fs = require('fs')

const generateTransformInput = (dir) => {
  return readdir(dir).then(files => {
    return files.map(file => {
      return {
        relativePath: file.toString().replace(dir, ''),
        raw: fs.readFileSync(file)
      }
    })
  })
}

module.exports = generateTransformInput
