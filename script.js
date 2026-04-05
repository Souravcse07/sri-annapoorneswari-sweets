// ── LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 1400);
});

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 60);
});

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('up'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));

// ── MENU FILTER ──
function doFilter(cat, btn) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.sweet-row').forEach(row => {
    const show = cat === 'all' || row.dataset.c === cat;
    row.style.transition = 'opacity 0.35s, max-height 0.4s, padding 0.4s';
    row.style.opacity = show ? '1' : '0';
    row.style.maxHeight = show ? '200px' : '0';
    row.style.overflow = 'hidden';
    row.style.paddingTop = show ? '' : '0';
    row.style.paddingBottom = show ? '' : '0';
  });
}

// ── TESTIMONIALS ──
const testis = [
  {
    text: 'The kaju katli melts on your tongue like a prayer answered. We have ordered for three weddings and the quality never wavers.',
    author: '— MEENA KRISHNAMURTHY, BENGALURU'
  },
  {
    text: 'Sri Annapoorneswri is our family sweet shop for every Diwali. The festive boxes are simply beautiful — inside and out.',
    author: '— RAJAN IYER, MYSURU'
  },
  {
    text: 'We ordered 200 boxes for our daughter\'s wedding. Every guest commented on the quality. Truly a shop that honours its name.',
    author: '— LAKSHMI SUBRAMANIAM, CHENNAI'
  }
];

function setTesti(i) {
  const textEl = document.getElementById('testiText');
  const authorEl = document.getElementById('testiAuthor');
  textEl.style.opacity = '0';
  setTimeout(() => {
    textEl.textContent = testis[i].text;
    authorEl.textContent = testis[i].author;
    textEl.style.opacity = '1';
  }, 300);
  document.querySelectorAll('.testi-dot').forEach((d, j) => d.classList.toggle('on', j === i));
}

// Auto-rotate testimonials every 5s
let testiIndex = 0;
setInterval(() => {
  testiIndex = (testiIndex + 1) % testis.length;
  setTesti(testiIndex);
}, 5000);

// ── FORM SUBMIT ──
document.querySelector('.form-send').addEventListener('click', () => {
  const name = document.querySelector('input[type="text"]').value;
  if (name.trim()) {
    alert(`Thank you, ${name}! We will get back to you shortly. 🙏`);
  } else {
    alert('Please fill in your name to proceed.');
  }
});
