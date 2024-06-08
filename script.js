const grandparent = document.querySelector("div");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// can you do the rest ==> convert each event listener to have both a capturing and bubbling phase
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent captured");
  },
  { capture: true } // { capture: false } is the default value
);

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent bubbled");
  },
  { capture: false } // { capture: false } is the default value
);

parent.addEventListener("click", (e) => {
  console.log("Parent");
});

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent captured");
  },
  {
    capture: true,
  }
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent bubbled");
  },
  {
    capture: false,
  }
);

child.addEventListener(
  "click",
  (e) => {
    console.log("Child bubbled");
  },
  {
    capture: false,
  }
);

child.addEventListener(
  "click",
  (e) => {
    console.log("Child captured");
  },
  {
    capture: true,
  }
);
