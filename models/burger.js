// $(function() {
//     $("create-form").on("submit", function(event) {
//         event.preventDefault();

//         var newBurger = {
//         burger_name: $("#adding_burger").val().trim(),
//         devoured: 0
//         };

//         $.ajax("/", {
//             type: POST,
//             data: newBurger
//         }).then(
//             function() {
//                 console.log("New burger Created");
//                 location.reload();
//             }
//         )

//     })
// })