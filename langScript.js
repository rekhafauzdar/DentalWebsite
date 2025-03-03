function changeLanguage(language) {
    fetch(`lang/${language}.json`) // Fetch the JSON file
      .then(response => response.json())
      .then(data => {
        // Replace the content dynamically
        document.getElementById("title").innerText = data.title;
        document.getElementById("description").innerText = data.description;
        document.getElementById("contact").innerText = data.contact;
      })
      .catch(error => console.error("Error loading language file:", error));
  }
  