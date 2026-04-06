<script>
document.addEventListener('DOMContentLoaded', function() {
  const pics = document.querySelectorAll('.profile-pic');
  pics.forEach(pic => {
    pic.style.cursor = 'pointer';
    pic.addEventListener('click', function() {
      this.classList.toggle('enlarged');
    });
  });
});
</script>
