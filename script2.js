function animateTypingEffect(containerId, text) {
    const heading = document.getElementById(containerId);

    if (!heading) {
        console.error(`Element with ID '${containerId}' not found.`);
        return;
    }

    heading.innerHTML = '';

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
            setTimeout(type, 50);
        } else {
            cursor.style.display = 'inline-block';
            cursor.style.animation = 'blink 0.7s infinite alternate';
        }
    }

    type();
}

window.onload = function() {
    animateTypingEffect('animation-container-1', 'I am learning data visualization.');
    animateTypingEffect('animation-container-2', 'Flourish');
    animateTypingEffect('animation-container-3', 'Chart.js');
    animateTypingEffect('animation-container-4', 'Personal Projects');
    animateTypingEffect('animation-container-5', 'Resources');
};
