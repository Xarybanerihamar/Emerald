/* Emerald Packaging | No frameworks, tracking scripts, or external dependencies. */
(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const menuButton = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  const setMenu = (open) => {
    if (!nav || !menuButton) return;
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', open);
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (innerWidth > 820) setMenu(false); });
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll(); window.addEventListener('scroll', onScroll, {passive: true});
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));

  // The interactive packaging selector changes guidance without leaving the page.
  const marketData = {
    fresh: { number: '01', title: 'Freshness from the field.', copy: 'Venting, clarity, fast line speeds, and films designed around real produce conditions.', tags: ['Wicketed bags','Breathable films','Reliable converting'] },
    ready: { number: '02', title: 'Ready for the shelf.', copy: 'From salad kits to fresh-cut vegetables, we consider oxygen transmission, anti-fog, sealing and everyday convenience.', tags: ['Specific OTR films','Anti-fog options','Resealable pouches'] },
    frozen: { number: '03', title: 'Built for the cold.', copy: 'Protecting food quality through freezing, distribution and handling with dependable barrier films and strong seals.', tags: ['Barrier films','Laminated structures','High-impact printing'] },
    other: { number: '04', title: 'Room for good ideas.', copy: 'From bakery to dry snacks, we pair graphic impact with the practical functions your food needs.', tags: ['Stand-up pouches','Custom closures','Multi-ply films'] }
  };
  const marketButtons = document.querySelectorAll('[data-market]');
  marketButtons.forEach(btn => btn.addEventListener('click', () => {
    const data = marketData[btn.dataset.market];
    if (!data) return;
    marketButtons.forEach(b => { const selected = b === btn; b.classList.toggle('is-selected', selected); b.setAttribute('aria-pressed', String(selected)); });
    document.getElementById('result-number').textContent = data.number;
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-copy').textContent = data.copy;
    document.getElementById('result-tags').replaceChildren(...data.tags.map(t => { const s = document.createElement('span'); s.textContent = t; return s; }));
  }));

  // No backend exists. This intentionally creates a pre-populated email draft in the visitor's own email client.
  const form = document.getElementById('inquiry-form');
  let lastInquiry = '';
  const inquiryText = () => {
    const val = id => document.getElementById(id)?.value.trim() || '';
    return `Emerald Packaging — New Project Inquiry\n\nName: ${val('firstName')} ${val('lastName')}\nCompany: ${val('company')}\nEmail: ${val('email')}\nInterested in: ${val('interest')}\n\nProject details:\n${val('message')}\n\n---\nSubmitted from the Emerald Packaging website`;
  };
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    lastInquiry = inquiryText();
    const subject = `Packaging inquiry — ${document.getElementById('company').value.trim()}`;
    const mailto = `mailto:info@empack.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lastInquiry)}`;
    document.getElementById('form-feedback').hidden = false;
    window.location.href = mailto;
  });
  document.getElementById('copy-inquiry')?.addEventListener('click', async (event) => {
    if (!lastInquiry) return;
    try {
      await navigator.clipboard.writeText(lastInquiry);
      event.currentTarget.textContent = 'Copied!';
    } catch (err) {
      const text = document.createElement('textarea'); text.value = lastInquiry;
      text.style.position='fixed';text.style.opacity='0';document.body.appendChild(text);text.select();
      try { document.execCommand('copy'); event.currentTarget.textContent='Copied!'; }
      catch (_) { event.currentTarget.textContent='Select the text in your email draft to copy'; }
      text.remove();
    }
  });
})();
