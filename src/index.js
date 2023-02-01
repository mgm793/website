(function main() {
  function changeContent() {
    const laodingPage = document.getElementById("loading-page");
    const homePage = document.getElementById("home-page");
    laodingPage.style.display = "none";
    homePage.style.display = "block";
  }
  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", changeContent);
})();
