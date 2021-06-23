let info = document.querySelector(".info");
let submit = document.querySelector(".submit");
let contacts = document.querySelector(".contacts");
// let allClose = document.querySelectorAll(".close");

// allClose.forEach((each) => {
//   each.addEventListener("click", (e) => handleClose(e, each));
// });

function handleClose(e, item) {
  //   console.log(item.parentNode);
  item.parentNode.style.display = "none";
}
submit.addEventListener("click", handleClick);

function handleClick(e) {
  let eachContacts = document.createElement("div");
  eachContacts.classList.add("each-contact");
  let img = document.createElement("img");
  img.src = "./bBHe98c - Imgur.png";
  eachContacts.append(img);
  let title = document.createElement("div");
  title.classList.add("name");
  title.innerText = info.value;
  eachContacts.append(title);
  let close = document.createElement("div");
  close.classList.add("close");
  close.innerText = "X";
  close.addEventListener("click", (e) => handleClose(e, close));
  eachContacts.append(close);
  contacts.append(eachContacts);
  info.value = "";
}
