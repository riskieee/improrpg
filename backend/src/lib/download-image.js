const fs = require('fs')
const path = require('path')
const axios = require('axios')

module.exports = async function downloadImage(url, filename) {
  const imagePath = path.resolve(__dirname, '..', '..', 'images', filename)
  const writer = fs.createWriteStream(imagePath)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', () => resolve(imagePath))
    writer.on('error', reject)
  })
}
