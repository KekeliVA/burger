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
      location.reload();
  })
  .catch(() => {
      console.log("burger could not be added");
  });
});


$(".devour-button").on("click", function (event) {
  event.preventDefault();
  const id = $(this).attr("data-id");
  console.log(id);
  
  $.ajax({
    url: "/api/editburger/" + id,
    method: "PUT",
    data: JSON.stringify({
      devoured: 1
    }),
    dataType: "json",
    contentType: "application/json; charset=utf-8"
  }).then(() => {
      console.log("burger devoured");
  }).catch(() => {
      console.log("burger could not be devoured")
  }); 
  location.reload();
})

