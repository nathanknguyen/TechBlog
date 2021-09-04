const updatePostHandler = async (event) => {
    event.preventDefault();
    const post_title = document.querySelector("#post_title").value.trim();
    const post_body = document.querySelector("#post_body").value.trim();
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/update/${id}`, {
        method: "PUT",
        body: JSON.stringify({ post_title, post_body }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("There was an error updating your post, please try again");
      }
    }
  };
  const deletePostHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/update/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("There was an error deleting your post, please try again");
      }
    }
  };
  const cancelBtnHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute("data-id")) {
      document.location.replace("/profile");
    }
  };
  document
    .querySelector("#updatebtn")
    .addEventListener("click", updatePostHandler);
  document
    .querySelector("#deletebtn")
    .addEventListener("click", deletePostHandler);
  document
    .querySelector("#cancelbtn")
    .addEventListener("click", cancelBtnHandler);