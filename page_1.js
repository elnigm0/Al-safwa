document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentPanels = document.querySelectorAll('.content-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contentPanels.forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');

function openVideo(videoUrl) {
    videoIframe.src = videoUrl + "?autoplay=1";
    videoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    videoModal.style.display = 'none';
    videoIframe.src = '';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == videoModal) closeVideo();
}
