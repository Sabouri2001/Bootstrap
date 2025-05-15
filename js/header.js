
// top buttons
export async function fetchmyData() {
    let data = await fetch("http://localhost:3060/header");
    let res = await data.json();
    
    let html = res.map(elem => {
        if (elem.subMenu.length === 0) {
            return `
            <li class="d-flex dl justify-content-start align-items-center gap-1 myHover bg-darkcounstom2 p-3">
              ${elem.svg}
              <span class="text-nowrap dl">${elem.text}</span>
            </li>
            `;
        } else {
            let subMenuHtml = elem.subMenu.map((subElem, index) => {
                if (index === 0) {

                    return `
                    <li>
                        <a class="btn w-100 btn-primary text-capitalize px-0" href="#">
                            ${subElem.svg || ""} ${subElem.text}
                        </a>
                    </li>
                    `;
                } else {
                    
                    return `
                    <li>
                        <a class="dropdown-item myHover px-0 p-3" href="#">
                            ${subElem.icon || ""} ${subElem.text}
                        </a>
                    </li>
                    `;
                }
            }).join("");

            return `
            <li class="dropdown position-static" >
                <a href="#" class="d-flex dl justify-content-start align-items-center gap-1 myHover bg-darkcounstom2 p-3 " >
                    ${elem.svg}
                    <span class="text-nowrap dl">${elem.text}</span>
                </a>
                <ul class="dropdown-menu bg-dark rounded-sm   px-0 pb-0 p-4   position-absolute end-0" >
  ${subMenuHtml}
</ul>
            </li>
            `;
        }
    }).join(""); 
  
    document.querySelector(".test").innerHTML = html;
}

// right menu

export async function fetchSecondMenu() {
    let data = await fetch("http://localhost:3060/menuRight");
    let res = await data.json();
  
    let buttonItem = res.find(item => item.type === "button");
    if (buttonItem) {
      document.querySelector(".loginContainer").innerHTML = `
        <a class="btn btn-primary text-capitalize w-100" href="${buttonItem.href}">
          ${buttonItem.text}
        </a>
      `;
    }
  
    let listHtml = "";
    res.forEach(item => {
      if (item.type === "item") {
        listHtml += `
          <li>
            <a class="dropdown-item myHover p-3 px-4 d-flex align-items-center gap-2" href="${item.href}">
              ${item.svg || ""}
              <span>${item.text}</span>
            </a>
          </li>
        `;
      }
    });
  
    document.querySelector("#menuList").innerHTML = listHtml;
  }

//   left menu
export function Accordion(){
    if(document.readyState === "loading"){
      document.addEventListener("DOMContentLoaded", Accordion)
      return
    }
  
    fetch("http://localhost:3060/Accordion")
    .then(res => res.json())
    .then(data => {
      let accordion = document.getElementById("myAccordion")
      if(!accordion) return
      accordion.innerHTML = ""
  
      data.forEach((item, i) => {
        let collapseId = `collapse${i}`
        let submenuHTML = ""
  
        item.submenus.forEach(sub => {
          submenuHTML += `
            <div class="d-flex align-items-center gap-2 mb-2">
              <div class="myLogo">${sub.svg}</div>
              <div class="d-flex flex-column">
                <p class="text-white p-0 m-0">${sub.name}</p>
                <p class="text-secondary p-0 m-0">${sub.description}</p>
              </div>
            </div>
          `
        })
  
        let accItem = document.createElement("div")
        accItem.className = "accordion-item bg-dark"
        accItem.innerHTML = `
          <h2 class="accordion-header">
            <button class="accordion-button collapsed text-white bg-dark" type="button"
              data-bs-toggle="collapse" data-bs-target="#${collapseId}">
              ${item.title}
            </button>
          </h2>
          <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="accordion-body p-3 text-white bg-dark">
              ${submenuHTML}
            </div>
          </div>
        `
        accordion.appendChild(accItem)
      })
    })
  }
  
// bottom menu
export async function fetchData() {
    let response = await fetch("http://localhost:3060/menuBottom");
    let menuItems = await response.json();

    
    let html = menuItems.map(item => {
        if (item.type === "dropdown") {
            let subMenuHtml = item.items.map(subItem => {
                return `
                <li class="p-2">
                    <a class="dropdown-item d-flex gap-2 text-white" href="${subItem.href}">
                        ${subItem.svg}
                        <span class="myHover d-flex flex-column w-100 h-100">
                            <span>${subItem.text}</span>
                            <span class="text-secondary">${subItem.subText}</span>
                        </span>
                    </a>
                </li>
                `;
            }).join("");

            let dropdownClass = '';
            if (item.class === "firstType") {
                dropdownClass = 'bg-darkcounstom d-lg-block d-none';
            } else if (item.class === "secondType") {
                dropdownClass = 'bg-secondType d-none d-xl-block';
            }

            return `
            <div class="dropdown myHover p-3 ${dropdownClass}">
                <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${item.label}
                </div>
                <ul class="dropdown-menu bg-dark rounded-1">
                    ${subMenuHtml}
                </ul>
            </div>
            `;
        }
    }).join("");

    document.querySelector(".myNav").innerHTML = html;
}



