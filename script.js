let notes = JSON.parse(localStorage.getItem("notes")) || [];

function save() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  let title = document.getElementById("title").value;
  let tag = document.getElementById("tag").value;
  let content = document.getElementById("content").value;

  if (!title || !content) return;

  notes.push({ title, tag, content });
  save();

  document.getElementById("title").value = "";
  document.getElementById("tag").value = "";
  document.getElementById("content").value = "";

  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  save();
  renderNotes();
}

function renderNotes() {
  let search = document.getElementById("search").value.toLowerCase();
  let container = document.getElementById("notes");

  container.innerHTML = "";

  notes
    .filter(n =>
      n.title.toLowerCase().includes(search) ||
      n.content.toLowerCase().includes(search) ||
      n.tag.toLowerCase().includes(search)
    )
    .forEach((note, index) => {
      container.innerHTML += `
        <div class="note">
          <button class="delete" onclick="deleteNote(${index})">X</button>

          <div class="tag">${note.tag || "#note"}</div>
          <h3>${note.title}</h3>
          <p>${note.content}</p>
        </div>
      `;
    });
}

renderNotes();