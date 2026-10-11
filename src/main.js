import './styles.css';

const cards = [
  {
    title: 'Lorem Ipsum',
    kicker: 'Chapter 01',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mi nec lectus volutpat cursus.',
  },
  {
    title: 'Dolor Sit',
    kicker: 'Chapter 02',
    text: 'Praesent commodo, massa vel fringilla tempor, lorem purus feugiat neque, vitae cursus nunc urna non erat.',
  },
  {
    title: 'Amet Vitae',
    kicker: 'Chapter 03',
    text: 'Suspendisse potenti. Etiam id augue at sapien malesuada luctus sed ut turpis.',
  },
];

const updates = [
  'Vestibulum ante ipsum primis in faucibus orci luctus.',
  'Donec sed neque nec odio tincidunt aliquet.',
  'Morbi facilisis sem sit amet magna porttitor.',
];

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="HeartBeatsAt25 home">
      <span class="brand-mark"></span>
      <span>HeartBeatsAt25</span>
    </a>
    <nav class="nav" aria-label="Primary navigation">
      <a href="#story">Story</a>
      <a href="#world">World</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="icon-button" id="themeToggle" type="button" aria-label="Toggle theme" title="Toggle theme">
      <span aria-hidden="true">◐</span>
    </button>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-art" aria-hidden="true">
        <div class="pulse-ring ring-one"></div>
        <div class="pulse-ring ring-two"></div>
        <div class="pulse-core"></div>
        <div class="wave wave-one"></div>
        <div class="wave wave-two"></div>
      </div>
      <div class="hero-copy">
        <p class="eyebrow">Interactive Frontend</p>
        <h1>HeartBeatsAt25</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          luctus, velit at blandit faucibus, sem arcu elementum lorem.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#story">Explore</a>
          <a class="button secondary" href="#contact">Start</a>
        </div>
      </div>
    </section>

    <section class="section" id="story">
      <div class="section-heading">
        <p class="eyebrow">Story Blocks</p>
        <h2>Lorem ipsum chapters</h2>
      </div>
      <div class="card-grid">
        ${cards
          .map(
            (card) => `
              <article class="feature-card">
                <p>${card.kicker}</p>
                <h3>${card.title}</h3>
                <span>${card.text}</span>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="split-section" id="world">
      <div>
        <p class="eyebrow">Status</p>
        <h2>Placeholder content, real layout</h2>
        <p>
          Curabitur maximus libero non lacus porttitor, id congue arcu
          ultricies. Replace these blocks later with final copy, images, or API
          driven data.
        </p>
      </div>
      <div class="timeline" aria-label="Recent updates">
        ${updates
          .map(
            (update, index) => `
              <button class="timeline-item" type="button" data-index="${index}">
                <span>0${index + 1}</span>
                <strong>${update}</strong>
              </button>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section contact-section" id="contact">
      <div class="section-heading">
        <p class="eyebrow">Contact</p>
        <h2>Drop a placeholder note</h2>
      </div>
      <form class="contact-form">
        <label>
          Name
          <input name="name" type="text" placeholder="Lorem Ipsum" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Dolor sit amet..." required></textarea>
        </label>
        <button class="button primary" type="submit">Send</button>
        <p class="form-status" role="status"></p>
      </form>
    </section>
  </main>
`;

const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  root.dataset.theme = 'light';
}

document.querySelector('#themeToggle').addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

document.querySelectorAll('.timeline-item').forEach((item) => {
  item.addEventListener('click', () => {
    document
      .querySelectorAll('.timeline-item')
      .forEach((entry) => entry.classList.remove('is-active'));
    item.classList.add('is-active');
  });
});

document.querySelector('.timeline-item')?.classList.add('is-active');

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.querySelector('.form-status').textContent =
    'Message saved locally as a demo interaction.';
});
