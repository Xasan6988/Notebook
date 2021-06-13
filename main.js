const newNote = document.querySelector('.new-note');
const deleteNote = document.querySelector('.delete');
let id = 0;

class Notes {
  constructor() {
    this._html = new HTML(document.querySelector('.note-list'), document.querySelector('.work-space'));
    this._notes = [];
    this._btns = [];

  }

  _showNote() {
    for (let i = 0; i < this._btns.length; i++) {
      this._btns[i].addEventListener('click', () => {
        this._hideNote();
        this._btns[i].classList.add('active-note');
        this._notes[i].classList.add('active');
      })
    }
  }

  _hideNote() {
    this._notes.forEach(note => {
      note.classList.remove('active');
    });
    this._btns.forEach(btn => {
      btn.classList.remove('active-note');
    });
  }

  createNote() {
    id++;
    this._hideNote();
    this._btns.push(this._html._createBtn());
    this._notes.push(this._html._createField());
    this._showNote();
  }

  deleteNote() {
    for (let i = 0; i < this._btns.length; i++) {
      if (this._btns[i].matches('.active-note') && this._notes[i].matches('.active')) {
        this._html._panel.removeChild(this._btns[i]);
        this._html._space.removeChild(this._notes[i]);
      }
    }
  }
}


class HTML {
  constructor(panel, space) {
    this._panel = panel;
    this._space = space;

  }
  _createField() {
    let field = document.createElement('textarea');
    field.setAttribute('id', 'input');
    field.setAttribute('cols', '70');
    field.setAttribute('rows', '30');
    field.classList.add('space');
    field.classList.add('active');
    this._space.append(field);
    return field;
  }
  _createBtn() {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    li.classList.add('note');
    li.classList.add('active-note');
    btn.classList.add('note-btn');
    btn.textContent = `Заметка ${id}`;
    li.append(btn);
    this._panel.append(li);
    return li;
  }
}
let notes = new Notes;

newNote.addEventListener('click', () => {
  notes.createNote();
})

deleteNote.addEventListener('click', () => {
  notes.deleteNote();
})
