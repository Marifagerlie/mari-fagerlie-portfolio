// ---------- Render project cards ----------
const grid = document.getElementById('projectsGrid');

function toolIcon(name) {
  return TOOL_ICONS[name] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/></svg>`;
}

PROJECTS.forEach(p => {
  const card = document.createElement('a');
  card.href = `project.html?id=${p.id}`;
  card.className = 'project-card';
  card.innerHTML = `
  <div class="project-cover" style="background-image:${p.detail.cover}"></div>
    <div class="project-meta-row"><span>${p.role}</span> · <span>${p.channel}</span></div>
    <h3>${p.title}</h3>
    <p>${p.blurb}</p>
    <div class="tool-icons">
      ${p.tools.map(t => `<span title="${t}">${toolIcon(t)}</span>`).join('')}
    </div>
    <span class="learn-more">Learn more
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </span>
  `;
  grid.appendChild(card);
});

// ---------- Dot nav active state ----------
const sections = document.querySelectorAll('.snap-section');
const dots = document.querySelectorAll('.dot-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      dots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === `#${id}`));
    }
  });
}, { threshold: 0.6 });

sections.forEach(s => observer.observe(s));

// ---------- Contact form ----------
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';
  status.className = 'form-status';

  if (form.action.includes('YOUR_FORM_ID')) {
    status.textContent = 'Form not connected yet — set up Formspree (see comment in index.html) to receive messages.';
    status.className = 'form-status err';
    return;
  }

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      status.textContent = "Thanks — your message is on its way. I'll get back to you soon!";
      status.className = 'form-status ok';
      form.reset();
    } else {
      status.textContent = 'Something went wrong sending that — try again, or email me directly.';
      status.className = 'form-status err';
    }
  } catch (err) {
    status.textContent = 'Something went wrong sending that — try again, or email me directly.';
    status.className = 'form-status err';
  }
});
