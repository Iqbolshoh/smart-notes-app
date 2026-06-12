let notes = JSON.parse(localStorage.getItem("notes")) || [];

function save(){
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote(){
  let title = document.getElementById("title").value;
  let tag = document.getElementById("tag").value;
  let content = document.getElementById("content").value;

  if(!title || !content) return;

  notes.push({title, tag, content});
  save();
  render();
}

function render(){
  let box = document.getElementById("notes");
  if(!box) return;

  box.innerHTML = "";

  notes.forEach((n)=>{
    box.innerHTML += `
      <div class="card">
        <img src="https://source.unsplash.com/400x300/?technology,workspace,desk" />
        <h3>${n.title}</h3>
        <small style="color:#22c55e">${n.tag || "#note"}</small>
        <p style="color:#94a3b8">${n.content}</p>
      </div>
    `;
  });
}

render();