// ===== NOTES SYSTEM =====
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function save(){
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote(){
  let title = document.getElementById("title");
  let tag = document.getElementById("tag");
  let content = document.getElementById("content");

  if(!title || !content) return;

  notes.push({
    title: title.value,
    tag: tag.value,
    content: content.value
  });

  save();
  render();

  title.value = "";
  tag.value = "";
  content.value = "";
}

function render(){
  let box = document.getElementById("notes");
  if(!box) return;

  box.innerHTML = "";

  notes.forEach(n=>{
    box.innerHTML += `
      <div class="card">
        <h3>${n.title}</h3>
        <small style="color:var(--accent)">${n.tag || "#note"}</small>
        <p style="color:var(--muted)">${n.content}</p>
      </div>
    `;
  });
}

render();


// ===== THEME SYNC FIX (MAIN FIX) =====
const toggleBtn = document.getElementById("themeToggle");

if(toggleBtn){

  // load saved theme
  const saved = localStorage.getItem("theme");

  if(saved === "light"){
    document.body.classList.add("light");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
      localStorage.setItem("theme","light");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme","dark");
      toggleBtn.textContent = "🌙";
    }
  });
}


// ===== ACTIVE NAV FIX =====
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const page = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if(link.getAttribute("href") === page){
      link.classList.add("active");
    }
  });
});
