//assign 1
const txtArea = document.querySelector(".txtArea");
const btn = document.querySelector(".btn");
btn.textContent = "Click Me";

btn.addEventListener("click", () => {
  btn.textContent = txtArea.value;
});

//assign 2
const image = document.querySelector(".image");
image.style.width = "700px";
image.style.height = "400px";
image.src = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

//assign 3
const img2 = document.querySelector(".img2");
img2.style.width = "700px";
img2.style.height = "400px";
const link = document.querySelector(".link");
img2.alt = "Picture of nature";
link.href =
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

//assign 4
const item = document.querySelector(".item");
item.textContent = "Blue";
