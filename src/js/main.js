const nav = document.getElementById('navbar');
const links = nav.querySelectorAll('a');
const ids = ['home', 'about', 'gallery', 'interests', 'video', 'contact'];

function update() {
    nav.classList.toggle('shrink', window.scrollY > 40);

    const off = nav.offsetHeight + 10;
    let cur = ids[0];
    for (const id of ids) {
        if (document.getElementById(id).getBoundingClientRect().top - off <= 0) cur = id;
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        cur = ids[ids.length - 1];
    }

    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}

window.addEventListener('scroll', update);
update();

const slides = document.getElementById('slides');
const n = slides.children.length;
let i = 0;

document.querySelectorAll('#carousel .arrow').forEach((b, k) => {
    b.onclick = () => {
        i = (i + (k ? 1 : -1) + n) % n;
        slides.style.transform = 'translateX(' + (-i * 100) + '%)';
    };
});

const modal = document.getElementById('modal');
document.querySelector('#about button').onclick = () => modal.classList.remove('hidden');
modal.querySelector('#close').onclick = () => modal.classList.add('hidden');
modal.onclick = e => { if (e.target === modal) modal.classList.add('hidden'); };
