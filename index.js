function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (object) {
        document.body.innerHTML += object.id;
      })
      .catch(function (error) {
        document.body.innerHTML += error.message;
      });
  }
  // Add your code here
