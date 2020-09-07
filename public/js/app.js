$("#submit-button").on("click", () => {
  event.preventDefault();
  const burger_name = $("new-burger").val();

  $.ajax({
    url: "/add",
    method: "POST",
    data: {
      burger_name: burgerName
    }
  }).then(() => {
      alert("burger added");
  })
  .catch(() => {
      alert("burger could not be added");
  });
});