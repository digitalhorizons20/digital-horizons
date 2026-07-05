<script>
  document.addEventListener("DOMContentLoaded", function() {
    const coursesLink = document.getElementById("courses-link");
    const courseBar = document.getElementById("course-bar");

    coursesLink.addEventListener("click", function(e) {
      e.preventDefault(); // stop page reload
      courseBar.style.display =
        courseBar.style.display === "block" ? "none" : "block";
    });
  });
</script>
<script>
  document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card'); // ✅ safer than parentElement
      card.classList.toggle('active');
      button.textContent = card.classList.contains('active') ? 'See Less' : 'See More';
    });
  });
</script>

