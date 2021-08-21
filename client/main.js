// create eventlisteners to handle html interactions (ie: keydown, click)

// create initial fetch request after DOMContentLoaded

// inside initial DOMContentLoaded listener, declare event handlers for the below...
// Three buttons to make fetch requests to /messages:
// 1. Createing (POST) a message
// 2. Updating (PATCH)a message
// 3. Deleting (DELETE) a message

// create an additional login button event handler
// have it make a fetch (POST) request to /signin

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded...");
  const mainBoard = document.getElementById("maindiv");

  mainBoard.style =
    "height: 500px; width: 500px; border: dotted; color: purple; width: 700px; overflow: auto";

  // create fetch to database to get ALL messages and usernames to display
  fetch("/messages")
    .then((data) => data.json())
    .then((allMessages) => {
      console.log("all messages: ", allMessages);
      for (let i = 0; i < allMessages.length; i++) {
        const textBox = document.createElement("div");
        const message = document.createElement("span");
        const user = document.createElement("span");
        message.innerHTML = allMessages[i].message;
        user.innerHTML = allMessages[i].username;
        mainBoard.appendChild(textBox);
        textBox.appendChild(message);
        textBox.appendChild(user);
      }
    });

  const createMessageButton = document.createElement("button");
  const text = document.createElement("input");
  mainBoard.appendChild(text);
  mainBoard.appendChild(createMessageButton);

  createMessageButton.addEventListener("click", () => {
    fetch("/messages", {
      method: "POST",
      body: JSON.stringify({ message: text.value }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => console.log("this is our new message: ", response));
  });
});
