import "./restro-style.css";

const initialLoad = () => {
  const content = document.querySelector(".content");
  const nav = document.createElement("nav");
  content.appendChild(nav);
  const summary = document.createElement("p");
  summary.textContent = `
  The Place
  
  Inspired by India in every aspect – from our silk wallpapers to our stately, fort-inspired door, celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Yantra. Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Yantra promises a new adventure.`;
  const ol = document.createElement("ul");
  for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    li.classList.add(`li-${i}`);
    li.textContent = `List item ${i}`;
    ol.appendChild(li);
  }

  nav.appendChild(ol);
  content.appendChild(summary);
};

export { initialLoad };
