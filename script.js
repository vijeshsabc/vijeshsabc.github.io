function openLink(url) {
  window.location.href = url;
}
function clearInput() {
  document.getElementById("myInput").value = "";
  const event = new Event('change', { bubbles: true });

// 3. Dispatch the event
  document.getElementById("myInput").dispatchEvent(event);
}

function createCard(date, topic, description,isToday=false,youtubeLink="#") {
  let card = ` <div class="container my-5">
  <div class="card bg-dark text-light border-light shadow-lg">
    <!-- Header -->
    <div ${isToday ? 'id="today"' : ''} class="card-header d-flex justify-content-between align-items-center bg-secondary text-light">
      <h5 class="mb-0">Mathematics</h5>
      <span  class="p-2 badge bg-primary">${isToday ? 'Today' : ''}</span>
    </div>
    <!-- Body -->
    <div class="card-body">
      <h6 class="text-white">${date}</h6>
      <h4 class="mt-2 text-danger">${topic}</h4>
      <p class="mb-3">
      ${description}
      </p>
      <!-- Buttons -->
      <div class="d-flex flex-wrap gap-2 mb-3">
       <button class="btn btn-outline-info" disabled><s>Class Slides</s></button>
        <button class="btn btn-outline-light" disabled><s>Notes</s></button>
        <button class="btn btn-outline-success" disabled><s>Topic Covered</s></button>
        <button class="btn btn-outline-warning" disabled><s>Quiz</s></button>
      </div>
      <!-- Replay -->
      <div class="d-flex justify-content-end">
         <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#myModal" onclick="openPlayer('${youtubeLink}')">
          <i class="bi bi-play-fill"></i> <span class="text-light fs-6">Replay</span>
        </button>
      </div>
    </div>
    <!-- Footer -->
    <div onclick="openLink('https://api.whatsapp.com/send?phone=')" class="card-footer text-end bg-secondary text-light">
      <i class="bi bi-person-circle fs-4"></i>
    </div>
  </div>`;
   const myElement = document.getElementsByClassName('cardBody')[0];
     if (myElement) {
    myElement.innerHTML += card;
  }
}
     
     
function openPlayer(youtubeLink) {
  const modalBody = document.querySelector('#myModal .modal-body');
  modalBody.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${youtubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
window.onload = function() {
  console.log("Everything is loaded!");
  document.getElementsByClassName('cardBody')[0].innerHTML = "";
  loadCards();
};

   
