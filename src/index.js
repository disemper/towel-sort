module.exports = function towelSort (matrix) {
  matrix = matrix || [];
  let newMatrix = [];
  for(let x = 0; x < matrix.length; x++) {
    if ((x)%2 !== 0) matrix[x].reverse();
    for (let y = 0; y < matrix[x].length; y++) {
      newMatrix.push(matrix[x][y]);
    }
  }
  return newMatrix;
};
