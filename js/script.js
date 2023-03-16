// Bold button
document.getElementById("bold-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("fw-bold");
});

// Italic button
document.getElementById("italic-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("fst-italic");
});

// Underline button
document.getElementById("underline-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("text-decoration-underline");
});

// left button
document.getElementById("left-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  if (
    textArea.classList.contains("text-center") ||
    textArea.classList.contains("text-end")
  ) {
    textArea.classList.remove("text-center");
    textArea.classList.remove("text-end");
  } else {
    textArea.classList.add("text-start");
  }
});

// Middle button
document.getElementById("middle-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  if (
    textArea.classList.contains("text-start") ||
    textArea.classList.contains("text-end")
  ) {
    textArea.classList.remove("text-start");
    textArea.classList.remove("text-end");
  } else {
    textArea.classList.add("text-center");
  }
});

// Right button
document.getElementById("right-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  if (
    textArea.classList.contains("text-center") ||
    textArea.classList.contains("text-start")
  ) {
    textArea.classList.remove("text-center");
    textArea.classList.remove("text-start");
  } else {
    textArea.classList.add("text-end");
  }
});

// Color button
document.getElementById("color-picker").onchange = (e) => {
  console.log(e.target.value);
  const textArea = document.getElementById("text-area");

  //   const colorPicker = document.getElementById("color-picker").value;
  //   console.log(colorPicker);
};

// copy clipboard
document.getElementById("copy").addEventListener("click", function () {
  const textArea = document.getElementById("text-area").value;
  navigator.clipboard.writeText(`${textArea}`);
  // Get the toast container and toast element
  let toastContainer = document.querySelector(".toast-container");
  let toast = toastContainer.querySelector(".toast");

  // Set the title and message of the toast message dynamically
  let toastMessage = "Successfully Copied to clipboard";
  toast.querySelector(".toast-body").textContent = toastMessage;

  // Display the toast message
  let toastInstance = new bootstrap.Toast(toast);
  toastInstance.show();
  // .then(() => alert("Text copied to clipboard"))
  // .catch((err) => console.error("Failed to copy text: ", err));
});
