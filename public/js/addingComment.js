const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const id = document.getElementById("submitbtn").getAttribute("data-id");
    const comment_body = document.querySelector("#comment_body").value.trim();
  
    if (comment_body) {
      const response = await fetch(`/api/post/${id}`, {
        method: "POST",
        body: JSON.stringify({ comment_body, id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.replace(`/api/post/${id}`);
      } else {
        alert("We were unable to add your comment, please try again!");
      }
    }
  };
  
  document
    .querySelector(".newCommentForm")
    .addEventListener("submit", commentFormHandler);