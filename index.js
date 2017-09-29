console.log(unlimitedAdventure); // Debugging

const $ = (query) => document.querySelector(query);

unlimitedAdventure.rooms
  .map(roomData => {
    const room = document.createElement('div');

    room.innerHTML = `
      <br>
      <span class="title" contenteditable="true">${roomData.id}</span>
      <br>
      <span>
        <span class="prop">NAME</span>
        <span class="value" contenteditable="true">${roomData.name}</span>
        <br>
        <br>
        <span class="prop">DESCRIPTION</span>
        <span class="value" contenteditable="true">${roomData.desc}</span>
        <br>
        <br>
        <span class="prop">ARTWORK</span>
        <br>
        <span class="apple" contenteditable="true">${roomData.img}</span><br><br>
      </span>
    `;
    room.classList.add('room'); // Style rooms
    room.classList.add('resizable'); // Make them resizable

    // Make rooms draggable
    let offsetX, offsetY;

    // Move room to mouse position (maintaining mouse position relative to room)
    const move = e => {
      room.style.top = `${e.clientY - offsetY}px`;
      room.style.left = `${e.clientX - offsetX}px`;
    };

    room.addEventListener('mousedown', e => {
      // Capture mouse position relative to element
      offsetX = e.clientX - room.offsetLeft;
      offsetY = e.clientY - room.offsetTop;

      // Only move if clicking title bar
      if (offsetY > 30) {
        return;
      }

      $('body').addEventListener('mousemove', move);
    }, false);

    $('body').addEventListener('mouseup', (e) => {
      $('body').removeEventListener('mousemove', move);
    }, false);

    room.addEventListener('mouseup', (e) => {
      $('body').removeEventListener('mousemove', move);
    }, false);

    return room;
  })
  .forEach(r => {
    $('main').appendChild(r);
  });
