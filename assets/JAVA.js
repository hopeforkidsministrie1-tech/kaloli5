// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Donation amount functions - Remitly Integration
function openRemitly(amount) {
    const recipientInfo = `
💚 REMITLY DONATION GUIDE 💚

Please send $${amount} USD to:

📝 Names: Ssebuliba Charles
🌍 Country: UGANDA
🏙️ City: MITYANA
📞 Phone: +256 768 170 144
📍 Address: MARKET STREET
🚚 Delivery: MOBILE MONEY
💰 Wallet: MTN MOBILE MONEY

Thank you for supporting God's_will_ministry Uganda! 🇺🇬
    `;
    
    alert(recipientInfo);
    window.open('https://www.remitly.com/app/send', '_blank');
}

function openRemitlyCustom() {
    const amount = document.getElementById('customAmount').value;
    if (amount && amount > 0) {
        openRemitly(amount);
    } else {
        alert('Please enter a valid donation amount');
    }
}

function setAmount(amount) {
    document.getElementById('customAmount').value = amount;
    console.log('Donation amount set to: $' + amount);
}

function donateAmount() {
    const amount = document.getElementById('customAmount').value;
    if (amount && amount > 0) {
        openRemitly(amount);
    } else {
        alert('Please enter a valid donation amount');
    }
}

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input')[2].value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (name && email && subject && message) {
        alert('Thank you for your message!\n\nYour message has been received. We will get back to you soon at ' + email);
        this.reset();
        
        // In a real implementation, this would send data to a backend
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, subject, message })
        // });
    } else {
        alert('Please fill in all fields');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterInputs = document.querySelectorAll('.newsletter-input');
    newsletterInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (this.value) {
                    alert('Thank you for subscribing!\n\nYou will receive updates on our latest programs and impact stories.');
                    this.value = '';
                }
            }
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to cards
document.querySelectorAll('.impact-card, .program-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Add active link highlighting based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Copy to Clipboard Function for Bank Details
function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
    
    // Remove the temporary element
    document.body.removeChild(textarea);
    
    // Get the button that was clicked
    event.target.classList.add('copied');
    
    // Show feedback message
    const originalText = event.target.textContent;
    event.target.textContent = '✓ Copied!';
    
    // Reset button after 2 seconds
    setTimeout(() => {
        event.target.classList.remove('copied');
        event.target.textContent = originalText;
    }, 2000);
    
    // Show notification
    console.log('Copied to clipboard: ' + text);
}