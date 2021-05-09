const updateFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the update form
    const title = document.querySelector('#update-title').value.trim();
    const content = document.querySelector('#update-content').value.trim();
   //Code used from https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);
  
    if (title && content) {
      // Send a PUT request to the API endpoint
      const response = await fetch(`/api/articles/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

document
.querySelector('.update-form')
.addEventListener('submit', updateFormHandler);