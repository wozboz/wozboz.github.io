let animate = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target);
        if (entry.isIntersecting) {
            console.log("Starting Animation!");
            let elem = entry.target;
            elem.classList.add('start')
        }
    })
};

let options = {
    root: null,
    threshold: 0.75,
}

let observer = new IntersectionObserver(animate, options)
observer.observe(document.getElementById('python'));
observer.observe(document.getElementById('dash'));
observer.observe(document.getElementById('html'));
observer.observe(document.getElementById('css'));
observer.observe(document.getElementById('javascript'));
observer.observe(document.getElementById('react'));
observer.observe(document.getElementById('nodejs'));
observer.observe(document.getElementById('mongodb'));
