const params = new URLSearchParams(window.location.search);
const startId = params.get('id') || PROJECTS[0].id;

const carousel = document.getElementById('carousel');
const progressWrap = document.getElementById('slideProgress');

PROJECTS.forEach(p => {
  const slide = document.createElement('section');
  slide.className = 'project-slide';
  slide.id = `slide-${p.id}`;

  if (p.subProjects) {
    slide.innerHTML = `
      <div class="project-slide-inner">
        <h1>${p.title}</h1>
        ${p.subProjects.map(sp => `
          <div class="sub-project">
            <div class="project-hero-band" style="background-image:${sp.heroCover || sp.cover}"></div>
            <h2 class="sub-project-title">${sp.title}</h2>
            <div class="project-tags">
              <span><b>Role</b> ${sp.role}</span>
              <span><b>Channel</b> ${sp.channel}</span>
            </div>

            <h2 class="subhead">The brief</h2>
            <p>${sp.objective}</p>

            <h2 class="subhead">What I did</h2>
            <ul>${sp.approach.map(a => `<li>${a}</li>`).join('')}</ul>

            <h2 class="subhead">Results</h2>
            <p class="results-note">${sp.resultsNote || ''}</p>
            <div class="results-row ${sp.resultsLayout === 'grid-2' || sp.resultsLayout === 'grid-2-crop' ? sp.resultsLayout : 'pubhub-result'}">
              ${sp.results.map(r => r.image ? `
              <div class="result-stat">
                <img src="${r.image}" alt="${r.label || sp.title}">
              </div>` : `
              <div class="result-stat">
                <div class="val">${r.value}</div>
                <div class="lab">${r.label}</div>
              </div>`).join('')}
            </div>

            <div class="reflection-box">${sp.reflection}</div>
          </div>
        `).join('<hr class="sub-project-divider">')}
      </div>
    `;
  } else {
    slide.innerHTML = `
      <div class="project-slide-inner">
        <div class="project-hero-band" style="background-image:${p.detail.heroCover || p.detail.cover}"></div>
        <h1>${p.title}</h1>
        <div class="project-tags">
          <span><b>Role</b> ${p.role}</span>
          <span><b>Channel</b> ${p.channel}</span>
          
        </div>

        <h2 class="subhead">The brief</h2>
        <p>${p.detail.objective}</p>

        <h2 class="subhead">What I did</h2>
        <ul>${p.detail.approach.map(a => `<li>${a}</li>`).join('')}</ul>

        <h2 class="subhead">Results</h2>
        <p class="results-note">${p.detail.resultsNote || ''}</p>
        <div class="results-row ${p.detail.resultsLayout === 'grid-2' ? 'grid-2' : ''}">
          ${p.detail.results.map(r => `
            <div class="result-stat">
              <img src="${r.image}" alt="${r.label || p.title}">
            </div>`).join('')}
        </div>

        <div class="reflection-box">${p.detail.reflection}</div>
      </div>
    `;
  }

  carousel.appendChild(slide);

  const dot = document.createElement('span');
  dot.dataset.id = p.id;
  progressWrap.appendChild(dot);
});

document.title = `${PROJECTS.find(p => p.id === startId)?.title || 'Project'} — Mari Fagerlie`;

const target = document.getElementById(`slide-${startId}`);
if (target) target.scrollIntoView({ block: 'start' });

const slides = document.querySelectorAll('.project-slide');
const dots = document.querySelectorAll('.slide-progress span');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id.replace('slide-', '');
      dots.forEach(d => d.classList.toggle('active', d.dataset.id === id));
      const proj = PROJECTS.find(p => p.id === id);
      if (proj) {
        document.title = `${proj.title} — Mari Fagerlie`;
        history.replaceState(null, '', `?id=${id}`);
      }
    }
  });
}, { threshold: 0.2 });

slides.forEach(s => observer.observe(s));

dots.forEach(d => {
  d.addEventListener('click', () => {
    document.getElementById(`slide-${d.dataset.id}`).scrollIntoView({ behavior: 'smooth' });
  });
  d.style.cursor = 'pointer';
});
