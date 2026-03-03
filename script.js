/* 
    The First Place Palace - Final JS Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');

    // Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar ? navbar.classList.add('scrolled') : null;
        } else {
            if (!navbar.classList.contains('internal-nav')) {
                navbar ? navbar.classList.remove('scrolled') : null;
            }
        }
    });

    // Unified Mobile Menu Toggle
    if (mobileMenu && mobileNav) {
        mobileMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            const icon = mobileMenu.querySelector('i');
            if (!mobileNav.classList.contains('hidden')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close when link clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // Palace Form Handling
    const contactForm = document.getElementById('palace-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Transmitting to Palace Authority...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${name}! Your booking request for property management/purchase has been received. Our team at The First Place Palace will contact you shortly.`);
                btn.innerHTML = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 2500);
        });
    }

    // Standard Form Logic for other potential forms
    const genericForms = document.querySelectorAll('form:not(#palace-form)');
    genericForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Request received! We will be in touch soon.');
            form.reset();
        });
    });
});
