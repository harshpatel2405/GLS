// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data[0]))
//   .catch((err) => console.log(err));

// async function getPostsData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data =  await response.json();

//   console.log("Reponse from API : ", data);
// }

// getPostsData();



async function getPosts() {
  const status = document.getElementById("status")
  try {

    status.innerText = "Data Loading....";
    let storedData = localStorage.getItem("posts");
    if (storedData) {
      console.log("Getting Data from local storage");
      status.innerText = "Data Loaded Succesfully..";
      storedData = JSON.parse(storedData);
      console.log(storedData)
    }

    console.log("Getting Data from API");
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    status.innerText = "Data Loaded Succesfully..";
    storedData = JSON.parse(storedData);

    console.log("Setting Data in local storage ");
    localStorage.setItem("posts", JSON.stringify(data));
    console.log("data set to local storage");

    console.log(data)
  } catch (error) {
    status.innerText = "Error Loading Da    console.log("Error error.message);
ta"
    console.log("Error ", error);

  }
}

getPosts()
