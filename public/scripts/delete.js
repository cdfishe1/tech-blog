//Code used from https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
const deleteurl = window.location.pathname;
const deleteid = url.substring(deleteurl.lastIndexOf('/') + 1);
console.log('delete id' + deleteid);

const deleteArticle = async (event) => {
    event.preventDefault();

    if (id) {
        const response = await fetch(`/api/articles/${deleteid}`, {
        method: "DELETE",
        body: JSON.stringify({
            deleteid: id,
        }),
        headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
        document.location.replace("/");
        } else {
        alert("Failed to delete!");
        }
    }
};


document
.querySelector('.deleteBtn')
.addEventListener('click', deleteArticle);