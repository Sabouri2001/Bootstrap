// slider 
export async function mySlider() {
    let response = await fetch("http://localhost:3060/MySlides");
    let slides = await response.json();

    let indicatorsHTML = slides.map((slide, index) => {
        return `
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></li>
        `;
    }).join("");

    let slidesHTML = slides.map((slide, index) => {
        return `
            <div class="carousel-item ${index === 0 ? 'active' : ''} position-relative">
                <img src="${slide.imageAboveLg}" class="d-lg-block w-100 custom-carousel position-relative d-none" alt="">
                <img src="${slide.imageBelowLg}" class="d-block d-lg-none w-100 custom-carousel position-relative" alt="">
                <div class="position-absolute d-flex flex-column justify-content-center align-items-center custom-width h-100 top-0 start-0">
                    <img src="${slide.titleImg}" class="w-25 h-auto myImg" alt="">
                    <h2 class="text-white myh2">${slide.title}</h2>
                    <a class="btn w-50 btn-primary text-capitalize px-0" href="${slide.btnLink}">${slide.btnText}</a>
                </div>
            </div>
        `;
    }).join("");

    document.querySelector(".carousel-indicators").innerHTML = indicatorsHTML;
    document.querySelector(".carousel-inner").innerHTML = slidesHTML;
}


// cards 
export async function loadCards() {
    const response = await fetch("http://localhost:3060/cards");
    const data = await response.json();
  
    const cardContainer = document.querySelector(".cardG");
  
    const hideClasses = [
      "",
      "d-none d-sm-block",
      "d-none d-md-block",
      "d-none d-xl-block",
      "d-none d-xxl-block"
    ];
  
    const cardsHTML = data.slice(0, 5).map((card, index) => {
      const hideClass = hideClasses[index] || "";
  
      return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 ${hideClass} p-0">
          <div class="card custom-card text-white border-0 shadow-sm">
            <img src="${card.img}" class="card-img-top custom-img" alt="">
            <div class="card-header d-flex align-items-center gap-2 pt-2 border-0">
              <img src="${card.gameLogo}" alt="" class="img-fluid" width="28" height="24">
              <h5 class="fs-6 fw-bold m-0 text-nowrap d-none d-md-block">${card.gameName}</h5>
            </div>
            <div class="card-body py-0">
              <h3 class="fs-5 fw-bold">${card.title}</h3>
              <p class="fs-6 custom-text py-0">${card.description}</p>
              <p class="fs-6 text-secondary">${card.category}</p>
            </div>
            <div class="card-footer border-0 px-4 py-3">
              <span class="fs-5">${card.price}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  
    cardContainer.innerHTML = cardsHTML;
  }
export async function loadCardsSecond() {
    const response = await fetch("http://localhost:3060/cards");
    const data = await response.json();
  
    const cardContainer = document.querySelector(".cardGSec");
  
    const hideClasses = [
      "",
      "d-none d-sm-block",
      "d-none d-md-block",
      "d-none d-xl-block",
      "d-none d-xxl-block"
    ];
  
    const cardsHTML = data.slice(0, 5).map((card, index) => {
      const hideClass = hideClasses[index] || "";
  
      return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 ${hideClass} p-0">
          <div class="card custom-card text-white border-0 shadow-sm">
            <img src="${card.img}" class="card-img-top custom-img" alt="">
            <div class="card-header d-flex align-items-center gap-2 pt-2 border-0">
              <img src="${card.gameLogo}" alt="" class="img-fluid" width="28" height="24">
              <h5 class="fs-6 fw-bold m-0 text-nowrap d-none d-md-block">${card.gameName}</h5>
            </div>
            <div class="card-body py-0">
              <h3 class="fs-5 fw-bold">${card.title}</h3>
              <p class="fs-6 custom-text py-0">${card.description}</p>
              <p class="fs-6 text-secondary">${card.category}</p>
            </div>
            <div class="card-footer border-0 px-4 py-3">
              <span class="fs-5">${card.price}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  
    cardContainer.innerHTML = cardsHTML;
  }


// buttons 
export async function Buttons() {
    try {
      const res = await fetch("http://localhost:3060/Buttons");
      const buttons = await res.json();
  
      const container = document.querySelector(".button-container");
      if (!container) return;
  
      const buttonHTML = buttons.map(btn => {
        let iconSVG = "";
  
        if (btn.icon === "mac") {
          iconSVG = `
            <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.773 22.773">
              <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
                  c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/>
              <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
                  c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
                  c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
                  c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
                  c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
                  c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
            </svg>
          `;
        }
  
        return `
          <a href="#" class="${btn.class} text-white fs-6 px-4 py-2 fw-bolder d-flex justify-content-center align-items-center gap-2 col-lg-8 col-xl-auto col-sm-5 col-7">
            <p class="m-0 text-nowrap">${btn.text}</p>
            ${iconSVG}
          </a>
        `;
      }).join("");
  
      container.innerHTML = buttonHTML;
    } catch (error) {
      console.error("Error Buttons", error);
    }
  }
