const deleteCommentHandler = async (event) => {
    event.preventDefault();
  
    const currentUserId = document
      .querySelector(".sessionUserId")
      .getAttribute("data-id");
  
    if (!currentUserId) {
      alert("Please log in to add or delete comments.");
      return;
    }
  
    if (event.target.hasAttribute("data-id")) {
      const deleteData = event.target.getAttribute("data-id");
  
      var deleteDataArr = deleteData.split(",");
  
      var id = deleteDataArr[0];
      var user_id = deleteDataArr[1];
      var sess_user_id = currentUserId;
  
      if (user_id === sess_user_id) {
        const response = await fetch(`/api/comment/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          document.location.reload();
        } else {
          alert(
            "We could not delete your comment at this time, please try again later."
          );
        }
      } else {
        alert("You can only delete your own comment");
      }
    }
  };
  
  document.querySelectorAll(".deletebtn").forEach((item) => {
    item.addEventListener("click", deleteCommentHandler);
  });