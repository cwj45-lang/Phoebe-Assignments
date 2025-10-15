document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    document.body.addEventListener('keydown', e => {
        if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
    });

    console.log('Welcome to John Doe's portfolio!');

    function daysUntilDeadline() {
	const targetDate = new Date("2026-05-23")
  	const now = new Date();
  	const timeDiff = targetDate - now;

  	const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    	document.getElementById("countdown").textContent =
     	daysLeft > 0 ? daysLeft + " days left" : "The day has arrived!";
  		  }
});
