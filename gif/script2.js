function animateTypingEffect(containerId, text) {
    const heading = document.getElementById(containerId);

    // Check if heading element exists
    if (!heading) {
        console.error(`Element with ID '${containerId}' not found.`);
        return;
    }

    // Clear existing content
    heading.innerHTML = '';

    // Create a cursor element
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    heading.appendChild(cursor);

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            const char = text.charAt(charIndex);
            const span = document.createElement('span');
            span.textContent = char;
            heading.insertBefore(span, cursor);
            charIndex++;
            setTimeout(type, 50); // Adjust typing speed here (milliseconds)
        } else {
            // Keep cursor blinking at the end
            cursor.style.display = 'inline-block'; // Ensure cursor is visible
            cursor.style.animation = 'blink 0.7s infinite alternate'; // Apply blink animation
        }
    }

    type(); // Start typing animation
}

// Start animation when the page loads
window.onload = function() {
    // Call animateTypingEffect for animation-container-1 in file1.html
    animateTypingEffect('animation-container-1', 'I am learning data visualization.');

    // Call animateTypingEffect for animation-container-2 in file2.html
    animateTypingEffect('animation-container-2', 'Flourish');

     // Call animateTypingEffect for animation-container-2 in file2.html
    animateTypingEffect('animation-container-3', 'Chart.js');

    // Call animateTypingEffect for animation-container-2 in file2.html
    animateTypingEffect('animation-container-4', 'Personal Projects');
};
