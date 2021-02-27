function transpose(arr) {
    var transposeArr = []
  
    var columns = arr[0]
  
    columns.forEach(function(col, colIndex) {
      transposeArr[colIndex] = []
      arr.forEach(function(data, rowIndex) {
        transposeArr[colIndex].push(arr[rowIndex][colIndex])
      })
    })
  
    console.log(transposeArr)
  }
  
  var input = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
  ]
  
  transpose(input)