document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event1');
    const popup = document.getElementById('popup1');
    const closeBtn = document.querySelector('.close1');

    events.forEach(event => {
        event.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event4');
    const popup = document.getElementById('popup4');
    const closeBtn = document.querySelector('.close4');

    events.forEach(event => {
        event.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

