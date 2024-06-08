function filterCategory(category) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        if (card.getAttribute('data-category') === category || category === '全部') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.add('active');
        setTimeout(function() {
            card.classList.remove('active');
        }, 300);
    });
});

document.querySelectorAll('.strategy-card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.add('active');
        setTimeout(function() {
            card.classList.remove('active');
        }, 300);
    });
});
