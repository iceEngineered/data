document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('mouseenter', () => {
        game.style.transform = 'translateY(-20px)';
    });

    game.addEventListener('mouseleave', () => {
        game.style.transform = 'translateY(0)';
    });
});

function updateClock() {
    const now = new Date();
    const options = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const formatter = new Intl.DateTimeFormat([], options);
    document.getElementById('clock').innerText = formatter.format(now);
}

setInterval(updateClock, 1000);
updateClock(); // initial call to display the clock immediately
