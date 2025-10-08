const CONFIG = {
    siteUrl: location.href.replace(location.hash, ''),
    menuUrl: 'https://drive.google.com/file/d/1ccYweRhE9x1wqlN9UJpVv8AhkAvCHKS3/view',
    whatsappNumber: '60175525805',
    phoneNumber: '60199999062'
};

document.getElementById('year').textContent = new Date().getFullYear();

function buildQrUrl(data, size = 300) {
    const encodedData = encodeURIComponent(data);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedData}`;
}

(function attachQr() {
    const qrImage = document.getElementById('qrMenu');
    const menuTarget = CONFIG.menuUrl || CONFIG.siteUrl;
    qrImage.src = buildQrUrl(menuTarget, 300);
    qrImage.addEventListener('click', () => { const a = document.createElement('a'); a.href = qrImage.src; a.download = 'mastergrill-menu-qr.png'; a.click(); });
})();

document.getElementById('qrSiteBtn').addEventListener('click', () => {
    const img = buildQrUrl(CONFIG.siteUrl, 400);
    const w = window.open('', '_blank');
    w.document.write(`<title>Site QR</title><div style="display:flex;align-items:center;justify-content:center;height:100vh"><img src="${img}" alt="site qr"></div>`);
});

document.getElementById('year').textContent = new Date().getFullYear();
