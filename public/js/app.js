$("#submit-button").on("click", (event) => {
  event.preventDefault();
  const burger_name = $("#new-burger").val();
  console.log(burger_name);

  $.ajax({
    url: "/api/burger",
    method: "POST",
    data: JSON.stringify({
      burger_name: burger_name
    }),
    dataType: "json",
    contentType: "application/json; charset=utf-8" 
  }).then(() => {
      console.log("burger added");
  })
  .catch(() => {
      console.log("burger could not be added");
  });
});

// how to make an ajax call send json