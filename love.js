// Tạo nhiều trái tim bay lên
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.getElementById('heart-container').appendChild(heart);

    // Xóa trái tim khi animation hoàn thành
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Tạo hiệu ứng trái tim bay lên mỗi 0.5s
setInterval(createHeart, 500);