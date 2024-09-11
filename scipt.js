document.addEventListener('DOMContentLoaded', function() {
    console.log('欢迎来到我的网站！');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const nameInput = document.getElementById('nameInput');
    const image = document.getElementById('image');
    
    // 更新欢迎信息
    nameInput.addEventListener('input', function() {
        welcomeMessage.textContent = `欢迎${nameInput.value}`;
    });
    
    // 图片切换
    let imageIndex = 0;
    const images = [
        'mmexport1723115494268.jpg',
        'mmexport1723115494269.jpg', // 假设你有另一张图片
        'mmexport1723115494270.jpg'  // 假设你有第三张图片
    ];
    
    image.addEventListener('click', function() {
        imageIndex = (imageIndex + 1) % images.length;
        image.src = images[imageIndex];
    });
});
