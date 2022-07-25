const portfolio = document.getElementById("portfolio");

window.addEventListener("DOMContentLoaded", () => {
  portfolio.innerHTML = `<img src="../assets/Spin.gif" alt="Loading" class="loading-icon">`;
  const ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "get",
    "https://getpantry.cloud/apiv1/pantry/36d21064-c792-42f9-b80b-f9fd0c7a5dc5/basket/portfolio-websites"
  );

  ourRequest.onload = function () {
    const ourData = JSON.parse(ourRequest.responseText);
    const HTMLString = renderHTML(ourData);
    portfolio.innerHTML = HTMLString;
  };

  ourRequest.onerror = function () {
    portfolio.innerHTML = "<h4 style='color: red'>Error Loading Resource</h4>";
  };

  ourRequest.send();
});

function renderHTML(data) {
  return data.websites
    .map(item => {
      return `<article class="website__template">
      <div class="portfolio__img__wrapper">
        <img
          src="${item.imgUrl}"
          alt="website template"
          class="website__template__img"
        />
      </div>
      <div class="website__template__text">
        <h3>${item.title}</h3>
        <p>
        ${item.description}
        </p>
        <div class="btn__Wrapper">
          <a
            href="${item.demoLink}"
            target="_blank"
            rel="noopener noreferrer"
            ><button>Live Demo</button></a
          >
          <a
            href="${item.gitHubLink}"
            target="_blank"
            ><button>GitHub Repo</button></a
          >
        </div>
      </div>
    </article>`;
    })
    .join("");
}
