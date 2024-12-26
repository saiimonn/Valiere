const addNoteButton = document.querySelector('.add-note-button');
const container = document.querySelector('.container');

// Load notes from localStorage when the page loads
window.onload = function () {
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    savedNotes.forEach(noteData => createNote(noteData.text, noteData.x, noteData.y));
};

// Add event listener to the add-note button
addNoteButton.addEventListener('click', () => {
    createNote();
});

// Create a new sticky note
function createNote(text = '', x = 100, y = 100) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.left = `${x}px`; // Fixed template literal
    note.style.top = `${y}px`; // Fixed template literal

    note.innerHTML = `
        <button class="delete-note">×</button>
        <textarea>${text}</textarea>
    `;

    makeNoteDraggable(note);

    note.querySelector('.delete-note').addEventListener('click', () => {
        note.remove();
        saveNotes();
    });

    const textarea = note.querySelector('textarea');
    textarea.addEventListener('input', saveNotes);

    container.appendChild(note);
}

// Make the note draggable
function makeNoteDraggable(note) {
    let isDragging = false;
    let offsetX, offsetY;

    note.addEventListener('mousedown', (e) => {
        isDragging = true;
        note.style.zIndex = 1000; // Bring the note to the front
        offsetX = e.clientX - note.getBoundingClientRect().left;
        offsetY = e.clientY - note.getBoundingClientRect().top;

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        if (!isDragging) return;
        note.style.left = `${e.clientX - offsetX}px`;
        note.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
        isDragging = false;
        note.style.zIndex = 'auto';
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        saveNotes();
    }
}

// Save all notes to localStorage
function saveNotes() {
    const notes = document.querySelectorAll('.note');
    const noteData = [];

    notes.forEach(note => {
        const textarea = note.querySelector('textarea');
        const x = parseInt(note.style.left, 10);
        const y = parseInt(note.style.top, 10);
        const text = textarea.value;
        noteData.push({ text, x, y });
    });

    localStorage.setItem('stickyNotes', JSON.stringify(noteData));
}