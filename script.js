// Replace this URL after uploading the final EXE to GitHub Releases.
const WINDOWS_DOWNLOAD_URL = "REPLACE_WITH_GITHUB_RELEASE_EXE_URL";
const btn = document.getElementById("downloadBtn");
if (WINDOWS_DOWNLOAD_URL.startsWith("http")) {
  btn.href = WINDOWS_DOWNLOAD_URL;
  btn.removeAttribute("aria-disabled");
} else {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Windows download will be enabled after the final Frenzy Client EXE is uploaded.");
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
