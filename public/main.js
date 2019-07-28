var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        //getting data atribute form the html and adding a click event
        const distance = element.getAttribute("data-distance")
        const time = element.getAttribute("data-time")
          console.log("Distance: ", distance, "Time: ", time)
          //sending the location for the rout to change true or false in the database
        fetch('decrease', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'distance': distance,
            'time': time
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const distance = element.getAttribute("data-distance")
        const time = element.getAttribute("data-time")
          console.log("Distance: ", distance, "Time: ", time)
        fetch('increase', {
          //sending the location for the rout to change true or false in the database
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'distance': distance,
            'time': time
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const distance = element.getAttribute("data-distance")
        const time = element.getAttribute("data-time")
          console.log("Distance: ", distance, "Time: ", time)
        fetch('messages', {
          //sending the location for the rout to delete in the collection
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'distance': distance,
            'time': time
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
