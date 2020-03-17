setTimeout(() => {
    let img = document.createElement('img');
    img.src = $('#theCanvasHolder>canvas')[0].toDataURL('image/png');
    img.style = 'position:fixed;z-index:1000;bottom:0;right:0;width:160px;';
    document.body.appendChild(img);
}, 5000);
