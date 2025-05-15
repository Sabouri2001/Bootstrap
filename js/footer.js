// about us
export async function AboutUs() {
    try {
      const res = await fetch("http://localhost:3060/AboutLinks");
      const links = await res.json();
  
      const container = document.querySelector(".about-container");
      if (!container) return;
  
      const linkHTML = links.map(link => `
        <span class="AboutUs text-white fw-bold fs-6 rounded-1 text-nowrap">${link.text}</span>
      `).join("");
  
      container.innerHTML = linkHTML;
    } catch (err) {
      console.error("Error links", err);
    }
  }
  
// social icons
export async function SocialIcons() {
    try {
      const res = await fetch("http://localhost:3060/SocialIcons");
      const icons = await res.json();
  
      const container = document.querySelector(".social-icons");
      if (!container) return;
  
      const iconsHTML = icons.map(icon => `
        <div class="rounded-circle social d-flex justify-content-center align-items-center">
          ${icon.svg}
        </div>
      `).join("");
  
      container.innerHTML = iconsHTML;
    } catch (err) {
      console.error("Error loading social icons:", err);
    }
  }
  

//   last footer
export function Rules() {
    fetch('http://localhost:3060/Notes')
      .then(response => response.json())
      .then(data => {
        const rulesContainer = document.getElementById('notes');
  
        data.forEach(rule => {
          const span = document.createElement('span');
          span.className = 'rules';
          span.textContent = rule.text;
          rulesContainer.appendChild(span);
        });
      })
      .catch(error => console.error('Error fetching rules:', error));
  }
  
