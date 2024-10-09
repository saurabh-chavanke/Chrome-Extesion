function connectAndScroll() {
    const connectButtons = document.querySelectorAll('button[aria-label*="connect"]');

    connectButtons.forEach((button) => {
        button.click();
    });

    window.scrollTo(0, document.body.scrollHeight);

   
    setTimeout(() => {
        if (document.querySelectorAll('button[aria-label*="Connect"]').length > 0) {
            connectAndScroll(); 
        }
    }, 2000);
}

connectAndScroll();
