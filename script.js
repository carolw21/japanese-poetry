window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

function openNav() {
  document.getElementById("sidebar-container").style.width = "17em";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("sidebar-hidden").style.display = "none";
}

function closeNav() {
  document.getElementById("sidebar-container").style.width = "5em";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("sidebar-hidden").style.display = "block";
}
