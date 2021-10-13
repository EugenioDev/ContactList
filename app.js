// https://jsonplaceholder.typicode.com/users

document.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      users.splice(0,5)
      console.log(users);
      let divContentBody = "";

      for (let user of users) {
        divContentBody += `

        <div class="contact-body-contact">
        <div class="contact-image">
          <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net

          C/O https://placeholder.com/" alt="">
        </div>
        <div class="contact-info">
          <h2>${user.username}</h2>
          <p>${user.company.bs}</p>
          <p>${user.website}</p>
        </div>
      </div>
        `;
      }
      document.querySelector(".contacts-body").innerHTML = divContentBody;
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
});
