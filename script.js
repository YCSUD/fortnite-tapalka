let clickCount = 0;

document.getElementById('catButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});
