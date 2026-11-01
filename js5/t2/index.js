const form = document.querySelector("form");

form.addEventListener("submit", search);

async function search(event) {
  event.preventDefault();
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q=" + form.elements.q.value,
    );
    if (!response.ok) {
      // Check if the response is successful (status code 200-299)
      throw new Error("HTTP error! status: " + response.status);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data; // This will return a promise that resolves to the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
