/* Global Variables */

const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const myKey = "&appid=2f7719a84afb59c77dda0bc36089b05a&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) + "." + d.getDate() + "." + d.getFullYear();

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

// Retrieve data from openweathermap
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    const data = await request.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Retrieve data from server
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temperature;
    document.getElementById("content").innerHTML = allData.userResponse;
  } catch (error) {
    console.log("error", error);
  }
};

// Chaining promises
const perform = () => {
  const zip = document.getElementById("zip").value;
  retrieveData(baseURL + zip + myKey)
    .then((data) => {
      postData("/add", {
        date: newDate,
        temperature: data.main.temp,
        userResponse: document.getElementById('feelings').value,
      }).then(updateUI())
    })
    
};
// Call the chained function
document.getElementById("generate").addEventListener("click", perform);
