let myLinks = []
const socialNetworks = ["GitHub", "Youtube", "Linkedin", "Twitter", "email"]

const socialNetworkButtons = [
  document.querySelector("#GitHubLink"),
  document.querySelector("#YoutubeLink"),
  document.querySelector("#LinkedinLink"),
  document.querySelector("#TwitterLink"),
  document.querySelector("#E-mailLink")
]

function toggleLinks() {
  const linkContainer = document.getElementById("linkContainer");
  linkContainer.style.display =
    linkContainer.style.display === "none" || linkContainer.style.display === ""
      ? "block"
      : "none";
}

function showLinks() {
  const showLinksButton = document.querySelector("#showLinks")
  const showProfileDetailsButton = document.querySelector("#showProfileDetails")
  showLinksButton.addEventListener("click", (e) => {
    const linksPage = document.querySelector('#linksPage')
    const profileDetailsPage = document.querySelector('#profileDetailsPage')
    profileDetailsPage.style.display = "none"
    linksPage.style.display = ""
    showLinksButton.classList.add("btn-active")
    showProfileDetailsButton.classList.remove("btn-active")
  })
}

function showProfileDetails() {
  const showProfileDetailsButton = document.querySelector("#showProfileDetails")
  const showLinksButton = document.querySelector("#showLinks")
  showProfileDetailsButton.addEventListener("click", (e) => {
    const linksPage = document.querySelector('#linksPage')
    const profileDetailsPage = document.querySelector('#profileDetailsPage')
    linksPage.style.display = "none"
    profileDetailsPage.style.display = ""
    showProfileDetailsButton.classList.add("btn-active")
    showLinksButton.classList.remove("btn-active")
  })
}

function saveLinks() {
  const saveLinksButton = document.querySelector("#saveLinks")
  saveLinksButton.addEventListener("click", (e) => {
    
    const socialNetworkN1 = document.querySelector("#socialNetworkSelectN1")
    const socialNetworkLinkN1 = document.querySelector("#socialNetworkLinkN1")
    const socialNetwork = socialNetworkN1.value
    console.log(socialNetwork);
    const i = socialNetworks.findIndex(network => network==socialNetwork)
    const socialNetworkButton =  socialNetworkButtons[i]
    socialNetworkButton.style.display=""
  })
}

saveLinks()
showLinks()
showProfileDetails()


function changerImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = new Image();
      image.onload = function () {
        const carreau = document.getElementById("carreau");
        carreau.style.backgroundImage = "url('" + e.target.result + "')";
        carreau.style.backgroundSize = "cover";
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}