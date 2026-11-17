function fetchDataWithCallback(callback) {
  setTimeout(function() {
    // Call the callback with 'Data fetched'
    callback('Data fetched');
  }, 2000);
}

const callbackFunction = function(data) {
  console.log(data);
}

fetchDataWithCallback(callbackFunction);

//stimulating error 

function fetchDataWithCallback(callback) {
  setTimeout( () => {
    try {
      // Simulating an error
      let error = true; // Change this to false to simulate success case

      if(error) {
        throw new Error('Fetching data failed');
      }
      // Call the callback with 'Data fetched'
      callback('Data fetched');
    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}

//Example usage:
fetchDataWithCallback((message) => {
  console.log(message);
});


  
