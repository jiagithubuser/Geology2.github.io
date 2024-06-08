document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 鼠标移动，背景也动
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        body.style.backgroundPosition = `${x}% ${y}%`;
    });
});





