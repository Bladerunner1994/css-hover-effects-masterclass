/* ==========================================================================
   CSS Hover Effects Masterclass - App Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const effectsGrid = document.getElementById('effects-grid');
  const searchInput = document.getElementById('search-input');
  const categoriesTabs = document.getElementById('categories-tabs');
  const modalBackdrop = document.getElementById('code-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCode = document.getElementById('modal-code');
  const closeModalBtn = document.getElementById('close-modal');
  const modalCopyBtn = document.getElementById('modal-copy-btn');
  const modalDownloadBtn = document.getElementById('modal-download-btn');
  const downloadAllBtn = document.getElementById('download-all-btn');
  const totalCountEl = document.getElementById('total-count');

  let currentCategory = 'All';
  let searchQuery = '';
  let activeEffect = null;

  // Initialize total count
  if (totalCountEl && window.HOVER_EFFECTS_DATA) {
    totalCountEl.textContent = `${window.HOVER_EFFECTS_DATA.length} Effects`;
  }

  // Inject dynamic styles into document head so live previews work instantly
  injectDynamicStyles(HOVER_EFFECTS_DATA);

  // Extract unique categories
  const categories = ['All', ...new Set(HOVER_EFFECTS_DATA.map(item => item.category))];
  renderCategoryTabs(categories);

  // Initial render of effects
  renderEffects();

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderEffects();
  });

  // Close modal events
  closeModalBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Modal actions
  modalCopyBtn.addEventListener('click', () => {
    if (activeEffect) {
      copyToClipboard(activeEffect.css, `Copied ${activeEffect.name} CSS!`);
    }
  });

  modalDownloadBtn.addEventListener('click', () => {
    if (activeEffect) {
      downloadCssFile(activeEffect);
    }
  });

  // Download All ZIP
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'dist/hover-effects-masterclass.zip';
      link.download = 'hover-effects-masterclass.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Downloading hover-effects-masterclass.zip archive!');
    });
  }

  function injectDynamicStyles(effects) {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = effects.map(item => item.css).join('\n\n');
    document.head.appendChild(styleSheet);
  }

  function renderCategoryTabs(cats) {
    categoriesTabs.innerHTML = '';
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        currentCategory = cat;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderEffects();
      });
      categoriesTabs.appendChild(btn);
    });
  }

  function renderEffects() {
    effectsGrid.innerHTML = '';

    const filtered = HOVER_EFFECTS_DATA.filter(effect => {
      const matchesCategory = currentCategory === 'All' || effect.category === currentCategory;
      const matchesSearch = effect.name.toLowerCase().includes(searchQuery) ||
                            effect.desc.toLowerCase().includes(searchQuery) ||
                            effect.id.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      effectsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No hover effects found matching "${searchQuery}"</p>
        <p style="font-size: 0.9rem;">Try selecting a different category or refining your search term.</p>
      </div>`;
      return;
    }

    filtered.forEach(effect => {
      const card = createEffectCard(effect);
      effectsGrid.appendChild(card);
    });
  }

  function createEffectCard(effect) {
    const card = document.createElement('div');
    card.className = 'effect-card';

    // Construct inner HTML depending on 3D vs normal elements
    let innerPreview = `<span class="preview-target hover-${effect.id}">${effect.name}</span>`;
    if (effect.id.startsWith('3d-')) {
      innerPreview = `<div class="hover-${effect.id}">
        <span class="hover-${effect.id}-inner">${effect.name}</span>
      </div>`;
    }

    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">${effect.name}</span>
        <span class="card-badge">${effect.category.split('. ')[1] || effect.category}</span>
      </div>
      <div class="preview-box">
        ${innerPreview}
      </div>
      <div class="card-desc">${effect.desc}</div>
      <div class="card-actions">
        <button class="action-btn copy-btn" title="Copy CSS Code">
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          Copy CSS
        </button>
        <button class="action-btn view-btn" title="View Code">
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          View Code
        </button>
        <button class="action-btn download-btn" title="Download .css file">
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          .CSS
        </button>
      </div>
    `;

    // Event Listeners
    card.querySelector('.copy-btn').addEventListener('click', () => {
      copyToClipboard(effect.css, `Copied ${effect.name} CSS!`);
    });

    card.querySelector('.view-btn').addEventListener('click', () => {
      openModal(effect);
    });

    card.querySelector('.download-btn').addEventListener('click', () => {
      downloadCssFile(effect);
    });

    return card;
  }

  function openModal(effect) {
    activeEffect = effect;
    modalTitle.textContent = `${effect.name} (${effect.category})`;
    modalCode.textContent = effect.css;
    modalBackdrop.classList.add('open');
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    activeEffect = null;
  }

  function downloadCssFile(effect) {
    const fileHeader = `/* ==========================================================================
   CSS Hover Effect: ${effect.name}
   Category: ${effect.category}
   Description: ${effect.desc}
   Author: Antigravity AI CSS Masterclass
   ========================================================================== */

${effect.css}`;

    const blob = new Blob([fileHeader], { type: 'text/css;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${effect.id}.css`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${effect.id}.css!`);
  }

  function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Copied to clipboard!');
    }).catch(err => {
      showToast('Failed to copy to clipboard');
    });
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="#6366f1" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
});
