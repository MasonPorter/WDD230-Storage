const images = document.querySelectorAll("[data-src]");

function preLoadImage(img) {
    const srcset = img.getAttribute("data-src");
    if (!srcset) {
        return;
    }

    img.srcset = srcset;
}

const imgOptions = {
    threshold: 0,
   rootMargin: "0px 0px -200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});