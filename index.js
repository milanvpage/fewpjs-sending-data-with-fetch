// Add your code here
function submitData(userName, userEmail) {
    let formData = {
      name: userName,
      email: userEmail
    }
  
    // makes a POST request to /user with a name and email
    // obj given propertis - 3 core components
      // method (HTTP verb)
      // headers (metadata about data sent)
      // body (data sent in fetch) - must be converted from obj to str/ JSON
        // JSON allows us to preseve key/value pairs of obj within str
        // when sent to server, server will convert str back to k/v pairs
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // pass object in to return a string, formatted and ready to send in req
      body: JSON.stringify(formData)
    };
  
    // Sending POST req w fetch()
    // takes desination URL as 1st arg; JS object as 2nd obj
    return fetch("http://localhost:3000/users", configObj)
    // handles POST request response, 
    // retrieves the new id value and appends it to the DOM
    // w JSON server running, successfuly send POST req & persist data to db.json
      .then(function(response) {
        // response obj represening what destination server sent back to us
          // .json () converts `body` of response from JSON to JS obj
        return response.json();
      })
      //// result of json() is returned and made available in second then
      .then(function(object) {
        // json server sending back data sent (+id)
        console.log(object); //{name: "Sam", email: "sam@sam.com", id: 5}
        document.body.innerHTML = `<p>id: ${object.id}</p><br><p>name: ${object.name}`
      })
      // handles a failed POST request using catch, 
      // appends the error message to the DOM
      .catch(function(error) {
        alert("Bad things!");
        console.log(error.message);
        document.body.innerHTML = error.message
      });
  }