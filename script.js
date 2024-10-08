// Data Movies
const movies = [
  {
    title: "Avatar (2009)",
    description: "Experience the world of Pandora.",
    image: "assets/avatar.jpg",
    rating: "★★★★☆",
  },
  {
    title: "Avengers: Endgame (2019)",
    description: "The epic conclusion to the Avengers saga.",
    image: "assets/avengers-endgame.jpg",
    rating: "★★★★☆",
  },
  {
    title: "Avatar: The Way of Water (2022)",
    description: "Return to Pandora with new adventures.",
    image: "assets/avatar-the-way-of-water.webp",
    rating: "★★★★★",
  },
  {
    title: "Titanic (1997)",
    description: "A tragic love story aboard the Titanic.",
    image: "assets/titanic.jpg",
    rating: "★★★★☆",
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens (2015)",
    description: "A new generation of heroes rises.",
    image: "assets/star-wars-the-force-awakens.jpg",
    rating: "★★★☆☆",
  },
  {
    title: "Avengers: Infinity War (2018)",
    description: "Thanos seeks the Infinity Stones.",
    image: "assets/avengers-infinity-war.jpg",
    rating: "★★★★☆",
  },
  {
    title: "Spider-Man: No Way Home (2021)",
    description: "Spider-Man faces multiverse challenges.",
    image: "assets/spiderman-no-way-home.jpg",
    rating: "★★★★★",
  },
  {
    title: "Inside Out 2 (2024)",
    description: "Emotions navigate new adventures.",
    image: "assets/inside-out-2.jpg",
    rating: "★★★★★",
  },
  {
    title: "Jurassic World (2015)",
    description: "Dinosaurs run amok once again.",
    image: "assets/jurassic-world.jpg",
    rating: "★★☆☆☆",
  },
  {
    title: "The Lion King (2019)",
    description: "A stunning remake of the classic tale.",
    image: "assets/the-lion-king.jpg",
    rating: "★★★★☆",
  },
];

// Populate Movie List
const movieList = document.getElementById("movie-list");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 mb-4";
  card.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${movie.title}</h5>
                <p class="rating">${movie.rating}</p>
                <p class="card-text">${movie.description}</p>
                <button class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">
                    <i class="bi bi-ticket-perforated"></i> Book Ticket
                </button>
            </div>
        </div>
    `;
  movieList.appendChild(card);
});

// Open Booking Modal and Set Movie Title
function openBookingModal(movieTitle) {
  document.getElementById("movieTitle").value = movieTitle;
}

// Handle Booking Form Submission
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  bookTicket();
});

function bookTicket() {
  const movieName = document.getElementById("movieTitle").value;
  const name = document.getElementById("name").value;
  const seatsValue = document.getElementById("seats").value;
  const email = document.getElementById("email").value;

  if (!name || !seatsValue || !email) {
    alert("Please fill in all the required fields.");
    return;
  }

  const message = `Booking Details:
    Movie: ${movieName}
    Name: ${name}
    Seats: ${seatsValue}
    Email: ${email}`;

  // Simulate booking process (In real application, send data to server)
  console.log(message);

  // Hide Booking Modal
  const bookingModal = bootstrap.Modal.getInstance(
    document.getElementById("bookingModal")
  );
  bookingModal.hide();

  // Show Success Modal
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  successModal.show();

  // Reset Form
  bookingForm.reset();
}

// Handle Login Form Submission (Simple Validation)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleLogin();
  });
}

function handleLogin() {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (!loginEmail || !loginPassword) {
    alert("Please enter both email and password.");
    return;
  }

  // Simulate login process (In real application, authenticate with server)
  console.log(
    `Logging in with Email: ${loginEmail} and Password: ${loginPassword}`
  );

  // For demonstration, just redirect to index.html after "login"
  window.location.href = "index.html";
}
