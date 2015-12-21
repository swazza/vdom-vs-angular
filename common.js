var numRows = 500,
  numCols = 4,
  bufferSize = 100;

var dataBuffer = [];

var fillBuffer = function() {

  for (var k = 0; k < bufferSize; k++) {
    
    var rows = [];
    for(var i = 0; i < numRows; i++) {

      var cols = [];
      for(var j = 0; j < numCols; j++) {
        cols.push(Math.random());
      }

      rows.push(cols);
    }

    dataBuffer.push(rows);
  }
};

fillBuffer();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getData = function() {
  var randomIndex = getRandomInt(0, bufferSize - 1);
  return dataBuffer[randomIndex];
};
