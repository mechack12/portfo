// Load saved posts or use default
let posts = JSON.parse(localStorage.getItem("posts")) || [
  {
    title: "How We Built Our Portfolio Website",
    date: "April 22, 2025",
    content: "We used HTML, CSS, and JavaScript to create a team portfolio."
  },
  {
    title: "Top 5 Tools Every Developer Should Know",
    date: "April 20, 2025",
    content: "We love using VS Code, Git, GitHub, Figma, and DevTools."
  }
];

const blogContainer = document.getElementById("blog-posts");
const form = document.getElementById("blog-form");

function showPosts() {
  blogContainer.innerHTML = "";
  posts.forEach((post, index) => {
    blogContainer.innerHTML += `
      <article class="blog-post">
        <h3>${post.title}</h3>
        <p><em>${post.date}</em></p>
        <p>${post.content}</p>
        <button onclick="deletePost(${index})">Delete</button>
      </article>
    `;
  });
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value;

  posts.unshift({ title, date, content });
  savePosts();
  showPosts();
  form.reset();
});

function deletePost(index) {
  posts.splice(index, 1);
  savePosts();
  showPosts();
}

showPosts();
