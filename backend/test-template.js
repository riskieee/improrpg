// test TEMPLATE

function findAverage(numOfPhotos, numOfUsers) {
  if (typeof numOfPhotos !== 'number' || typeof numOfUsers !== 'number') throw new TypeError()

  if (numOfUsers <= 0) return 0

  return numOfPhotos / numOfUsers
}

function sum(a, b) {
  return a + b
}

module.exports = { findAverage, sum }
