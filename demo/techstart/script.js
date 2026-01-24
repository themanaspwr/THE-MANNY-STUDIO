document.addEventListener('DOMContentLoaded', () => {
    // Pricing Toggle
    const toggle = document.getElementById('pricingToggle');
    const amounts = document.querySelectorAll('.amount');

    toggle.addEventListener('change', (e) => {
        const isYearly = e.target.checked;
        amounts.forEach(amount => {
            const newVal = isYearly ? amount.dataset.yearly : amount.dataset.monthly;
            // Simple animation
            amount.style.opacity = 0;
            setTimeout(() => {
                amount.innerText = newVal;
                amount.style.opacity = 1;
            }, 200);
        });
    });



    // Modal Logic
    const modal = document.getElementById('leadModal');
    const closeBtn = document.querySelector('.close-modal');
    const triggers = document.querySelectorAll('.modal-trigger');

    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) modal.style.display = 'flex';
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Intersection Observer for fade-in animation
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // CRM Simulation
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Connecting to CRM...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Request Sent!';
                btn.style.background = '#10B981';
                btn.style.borderColor = '#10B981';

                setTimeout(() => {
                    modal.style.display = 'none';
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    btn.disabled = false;
                    leadForm.reset();
                    alert('Thanks! Our sales team has received your request.');
                }, 1000);
            }, 1500);
        });
    }
});
