document.addEventListener('DOMContentLoaded', () => {
    // 1. Booking Widget Logic


    // 2. Nav Link Smooth Scroll + Active State (Optional but nice)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetHeader = document.querySelector(targetId);

            if (targetHeader) {
                targetHeader.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. CTA Buttons
    const bookBtns = document.querySelectorAll('.btn-book, .link-arrow');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Just scroll to booking widget as a fallback action
            document.querySelector('.booking-widget').scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Highlight widget
            const widget = document.querySelector('.booking-widget');
            widget.style.transition = 'box-shadow 0.3s';
            widget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)'; // Gold glow
            setTimeout(() => {
                widget.style.boxShadow = '';
            }, 1000);
        });
    });
});
