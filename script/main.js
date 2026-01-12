// Authentication state
let currentUser = null;

// Simple client-side password strength check
function isStrongPasswordClient(password) {
    if (!password || password.length < 8) return false;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    return hasUpper && hasLower && hasDigit && hasSpecial;
}

// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    checkAuthStatus();

    // Force page to load at top with complete background
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 100);
    setTimeout(() => window.scrollTo(0, 0), 500);

    // Ensure complete background is visible
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 100);

    // Smooth scroll for internal navigation links
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            // Home should scroll to very top of page
            if (href === '#home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const target = document.querySelector(href);

            // Animation: scroll to the actual top of the section (no extra offset)
            if (href === '#animation' && target) {
                e.preventDefault();
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
                return;
            }
            if (target) {
                e.preventDefault();
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
                const offset = Math.max(targetTop - navbarHeight, 0);
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    // Navbar scroll handling
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Update navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for section animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Scroll indicator handling
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const featuresSection = document.querySelector('#features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Register form handling
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Authentication functions
function showLoginModal() {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

function showRegisterModal() {
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.show();
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            currentUser = data.user;
            localStorage.setItem('token', data.token);
            updateUI();
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            alert('Login successful!');
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Client-side strong password validation
    if (!isStrongPasswordClient(password)) {
        alert('Password must be at least 8 characters and include uppercase, lowercase, digit and special character.');
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            currentUser = data.user;
            localStorage.setItem('token', data.token);
            updateUI();
            bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
            alert('Registration successful!');
        } else {
            alert(data.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed');
    }
}

async function handleLogout() {
    try {
        await fetch('/api/auth/logout', {
            method: 'POST',
        });
        currentUser = null;
        localStorage.removeItem('token');
        updateUI();
        alert('Logged out successfully');
    } catch (error) {
        console.error('Logout error:', error);
    }
}

async function checkAuthStatus() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('/api/auth/me');
            if (response.ok) {
                const data = await response.json();
                currentUser = data.user;
            } else {
                localStorage.removeItem('token');
            }
        } catch (error) {
            console.error('Auth check error:', error);
            localStorage.removeItem('token');
        }
    }
    updateUI();
}

function updateUI() {
    const loginBtn = document.getElementById('login-btn');
    if (currentUser) {
        loginBtn.textContent = 'Logout';
        loginBtn.onclick = handleLogout;
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = showLoginModal;
    }
}
