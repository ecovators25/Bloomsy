/* =====================================================
   BLOOMSY — script.js
   Tab system + Product/Service modals + Cart + Checkout
   ===================================================== */

/* ================================================================
   DATA: PRODUCTS & SERVICES
================================================================ */
const PRODUCTS = {
  'aloe-vera': {
    name: 'Aloe Vera',
    emoji: '🌵',
    image: 'images/aloe-vera.jpeg',
    category: 'Plant',
    tag: 'Succulent',
    price: 199,
    desc: 'Aloe Vera is a hardy succulent known for its medicinal and skincare benefits. It requires very little water and thrives in bright sunlight, making it perfect for beginners and indoor spaces. The gel inside its leaves can soothe sunburns and moisturize skin naturally. Ideal for windowsills, desks, and sunny balconies.',
  },
  'bougainvillea': {
    name: 'Bougainvillea',
    emoji: '🌸',
    image: 'images/bougainvillea.jpeg',
    category: 'Plant',
    tag: 'Flowering',
    price: 299,
    desc: 'Bougainvillea is a vibrant flowering plant that adds bright pink, purple, or orange colors to gardens and balconies. It grows well in sunny conditions and is ideal for creating a lively outdoor space. Low maintenance once established, it blooms prolifically and is perfect for trellises and fences.',
  },
  'areca-palm': {
    name: 'Areca Palm',
    emoji: '🌴',
    image: 'images/areca-palm.jpeg',
    category: 'Plant',
    tag: 'Indoor',
    price: 449,
    desc: 'The Areca Palm is a beautiful indoor plant with feathery green leaves that brighten any room. It also helps improve air quality by filtering indoor pollutants and is easy to maintain, making it a popular choice for homes and offices. Grows best in indirect bright light with regular watering.',
  },
  'jasmine': {
    name: 'Jasmine',
    emoji: '🌼',
    image: 'images/jasmine.jpeg',
    category: 'Plant',
    tag: 'Fragrant',
    price: 249,
    desc: 'Jasmine is loved for its sweet fragrance and delicate white flowers. It grows well in warm climates and is perfect for balconies, terraces, or gardens where you can enjoy its refreshing aroma. Jasmine vines can be trained on railings or trellises and bloom most prolifically in summer.',
  },
  'spider-plant': {
    name: 'Spider Plant',
    emoji: '🌿',
    image: 'images/spider-plant.jpeg',
    category: 'Plant',
    tag: 'Low Maintenance',
    price: 179,
    desc: 'The Spider Plant is a low-maintenance indoor plant known for its long arching leaves with green and white stripes. It adapts easily to different light and temperature conditions and is great for adding a fresh, green touch to your home. It also produces "baby" plants that you can propagate easily.',
  },
  'snake-plant': {
    name: 'Snake Plant',
    emoji: '🪴',
    image: 'images/snake-plant.jpeg',
    category: 'Plant',
    tag: 'Air Purifying',
    price: 219,
    desc: 'Snake Plant is one of the easiest plants to grow, perfect for absolute beginners. With its tall, striking upright leaves in green and yellow, it not only enhances décor but also helps purify the air indoors — removing toxins like formaldehyde and benzene. Thrives in low light and needs very little water.',
  },
  'hand-trowel': {
    name: 'Hand Trowel',
    emoji: '🪛',
    image: 'images/hand-trowel.jpeg',
    category: 'Gardening Tool',
    tag: 'Tool',
    price: 149,
    desc: 'A small, sturdy hand tool perfect for digging soil, transferring plants, and planting seeds or seedlings in pots or garden beds. Made from stainless steel with a comfortable grip handle, it is durable, rust-resistant, and easy to clean. An essential tool for every home gardener.',
  },
  'pruning-shears': {
    name: 'Pruning Shears',
    emoji: '✂️',
    image: 'images/pruning-shears.jpeg',
    category: 'Gardening Tool',
    tag: 'Tool',
    price: 199,
    desc: 'Sharp, precision pruning shears useful for trimming branches, deadheading flowers, and keeping plants healthy and well-shaped year-round. The ergonomic handles reduce hand fatigue during extended use. Suitable for most indoor plants, herbs, and shrubs. Safety locking mechanism included.',
  },
  'watering-can': {
    name: 'Watering Can',
    emoji: '🪣',
    image: 'images/watering-can.jpeg',
    category: 'Gardening Tool',
    tag: 'Tool',
    price: 129,
    desc: 'A practical and well-balanced watering can with a gentle-flow spout, used to water plants evenly without waterlogging the soil or damaging delicate leaves. Holds approximately 1.5 litres. Suitable for indoor plants, seedlings, and potted plants on balconies or terraces.',
  },
  'gardening-gloves': {
    name: 'Gardening Gloves',
    emoji: '🧤',
    image: 'images/gardening-gloves.jpeg',
    category: 'Gardening Tool',
    tag: 'Tool',
    price: 99,
    desc: 'Durable, breathable gardening gloves that protect your hands while planting, digging, weeding, and maintaining plants. Features a snug elastic wrist to keep out soil and a textured grip surface for better handling. Available in one universal size that fits most adult hands.',
  },
  'organic-manure-soil': {
    name: 'Organic Manure Soil',
    emoji: '🌍',
    image: 'images/organic-manure-soil.jpeg',
    category: 'Gardening Tool',
    tag: 'Soil',
    price: 179,
    desc: 'A natural, nutrient-rich organic soil mix that improves plant growth and keeps your garden healthy without any chemicals. Made from composted organic materials including cow manure, kitchen waste compost, and coco peat. Perfect for pots, garden beds, terrace gardens, and home plants. Promotes strong root development.',
  },
};

const SERVICES = {
  'garden-setup': {
    name: 'Garden Setup',
    emoji: '🏡',
    price: 1500,
    priceLabel: '₹ 1,500 onwards',
    desc: 'Our expert team helps design and set up beautiful small gardens tailored for homes, balconies, and terraces. We assess your space, sunlight availability, and personal preferences to create a garden layout that suits your lifestyle. From soil preparation to plant selection and arrangement, we handle everything so you can simply enjoy your green space.',
    benefits: [
      'Custom garden layout designed for your specific space',
      'Professional plant selection based on sunlight and climate',
      'Soil preparation and quality potting mix included',
      'Plant placement and arrangement by trained professionals',
      'Post-setup care guide and tips provided free of cost',
    ],
  },
  'plant-consultation': {
    name: 'Plant Consultation',
    emoji: '🌿',
    price: 500,
    priceLabel: '₹ 500 per session',
    desc: 'Not sure which plant will thrive in your home environment? Our plant consultants assess your indoor lighting, humidity, and lifestyle to recommend the perfect plants for you. Whether you want air-purifying plants, low-maintenance succulents, or flowering beauties, we help you make the right choice — no guesswork needed.',
    benefits: [
      'Personalised plant recommendations based on your home',
      'Guidance on care routines, watering frequency, and fertilising',
      'Advice on pot selection and placement for best results',
      'Information on common plant problems and how to solve them',
      'Follow-up support available after consultation',
    ],
  },
  'plant-maintenance': {
    name: 'Plant Maintenance',
    emoji: '🌱',
    price: 800,
    priceLabel: 'Contact for details',
    desc: 'Keep your plants healthy and thriving with our regular care visit service. Our trained team visits your home or office on a scheduled basis to water, trim, fertilise, and check the health of your plants. We identify early signs of pests, disease, or nutrient deficiency so your garden always looks its best.',
    benefits: [
      'Regular watering, pruning, and fertilising on schedule',
      'Early detection and treatment of pests and plant disease',
      'Repotting and soil refresh when needed',
      'Customised care plan based on your plant collection',
      'Health report shared after each maintenance visit',
    ],
  },
  'starter-kit': {
    name: 'Home Gardening Starter Kit',
    emoji: '🎒',
    price: 1200,
    priceLabel: '₹ 1,200 per kit',
    desc: 'The perfect gift for yourself or a loved one who wants to begin their gardening journey! Our starter kit contains everything a beginner needs — carefully selected easy-care plants, quality organic soil, essential tools, and a step-by-step care guide. We also provide an onboarding call to help you get started with confidence.',
    benefits: [
      'Curated selection of 2-3 beginner-friendly plants included',
      'Premium organic potting mix and fertiliser provided',
      'Essential gardening tools: trowel, gloves, and spray bottle',
      'Illustrated step-by-step plant care guide booklet',
      'Free 15-minute onboarding call with a Bloomsy expert',
    ],
  },
};

/* ================================================================
   TAB SWITCHING
================================================================ */
const TAB_MAP = {
  about: 'tab-about',
  services: 'tab-services',
  products: 'tab-products',
  impact: 'tab-impact',
  community: 'tab-community',
  feedback: 'tab-feedback',
  contact: 'tab-contact',
};

function switchTab(tabKey) {
  if (!TAB_MAP[tabKey]) return;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(TAB_MAP[tabKey]);
  if (panel) { panel.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  document.querySelectorAll('.tab-btn').forEach(b => { if (b.dataset.tab === tabKey) b.classList.add('active'); });
  const nav = document.getElementById('tabNav');
  if (nav) nav.classList.remove('open');
  history.replaceState(null, '', '#' + tabKey);
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function restoreTabFromHash() {
  const hash = window.location.hash.replace('#', '');
  switchTab(TAB_MAP[hash] ? hash : 'about');
}

/* ================================================================
   MOBILE MENU
================================================================ */
const mobileToggle = document.getElementById('mobileToggle');
const tabNav = document.getElementById('tabNav');

if (mobileToggle && tabNav) {
  mobileToggle.addEventListener('click', e => { e.stopPropagation(); tabNav.classList.toggle('open'); });
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) tabNav.classList.remove('open'); });
}

/* ================================================================
   MODAL HELPERS
================================================================ */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}

// Close on backdrop click
['productModalOverlay', 'serviceModalOverlay', 'checkoutModalOverlay'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', e => { if (e.target === el) closeModal(id); });
});

document.getElementById('productModalClose').addEventListener('click', () => closeModal('productModalOverlay'));
document.getElementById('serviceModalClose').addEventListener('click', () => closeModal('serviceModalOverlay'));
document.getElementById('checkoutModalClose').addEventListener('click', () => closeModal('checkoutModalOverlay'));

/* ================================================================
   PRODUCT MODAL
================================================================ */
let currentProduct = null;
let currentQty = 1;

function openProductModal(key) {
  const p = PRODUCTS[key];
  if (!p) return;
  currentProduct = { key, ...p };
  currentQty = 1;

  // Populate image — reset any prior fallback state before setting new src
  const img = document.getElementById('pmImg');
  const imgWrap = document.getElementById('pmImgWrap');
  imgWrap.classList.remove('img-fallback');
  img.style.display = '';
  img.style.opacity = '1';   // reset opacity in case a previous onerror set it to 0
  img.src = '';               // clear src first to force browser to re-evaluate
  img.alt = p.name;
  img.src = p.image;          // set new src after reset

  document.getElementById('pmImgPlaceholder').textContent = p.emoji + ' ' + p.name;
  document.getElementById('pmCategory').textContent = p.category;
  document.getElementById('pmName').textContent = p.name;
  document.getElementById('pmDesc').textContent = p.desc;
  document.getElementById('pmPrice').textContent = '₹ ' + p.price;
  document.getElementById('pmQtyVal').textContent = '1';

  openModal('productModalOverlay');
}

document.getElementById('pmQtyMinus').addEventListener('click', () => {
  if (currentQty > 1) { currentQty--; document.getElementById('pmQtyVal').textContent = currentQty; }
});
document.getElementById('pmQtyPlus').addEventListener('click', () => {
  if (currentQty < 99) { currentQty++; document.getElementById('pmQtyVal').textContent = currentQty; }
});

document.getElementById('pmAddToCart').addEventListener('click', () => {
  if (!currentProduct) return;
  addToCart(currentProduct.name, currentProduct.category, currentProduct.emoji, currentProduct.price, currentQty);
  closeModal('productModalOverlay');
  openCartDrawer();
});

document.getElementById('pmBuyNow').addEventListener('click', () => {
  if (!currentProduct) return;
  // Clear cart, add this item only, go to checkout
  cart = [];
  addToCart(currentProduct.name, currentProduct.category, currentProduct.emoji, currentProduct.price, currentQty);
  closeModal('productModalOverlay');
  openCheckout();
});

/* ================================================================
   SERVICE MODAL
================================================================ */
let currentService = null;

function openServiceModal(key) {
  const s = SERVICES[key];
  if (!s) return;
  currentService = { key, ...s };

  document.getElementById('smIcon').textContent = s.emoji;
  document.getElementById('smName').textContent = s.name;
  document.getElementById('smDesc').textContent = s.desc;
  // Show the human-readable label in the modal UI
  document.getElementById('smPrice').textContent = s.priceLabel;

  const benefitsList = document.getElementById('smBenefits');
  benefitsList.innerHTML = s.benefits.map(b => `<li>${b}</li>`).join('');

  openModal('serviceModalOverlay');
}

document.getElementById('smBookService').addEventListener('click', () => {
  if (!currentService) return;
  cart = [];
  // Pass numeric price so checkout total calculates correctly (Issues 1 & 2)
  addToCart(currentService.name, 'Service', currentService.emoji, currentService.price, 1);
  closeModal('serviceModalOverlay');
  openCheckout();
});

document.getElementById('smAddToCart').addEventListener('click', () => {
  if (!currentService) return;
  // Pass numeric price so cart total calculates correctly (Issue 2)
  addToCart(currentService.name, 'Service', currentService.emoji, currentService.price, 1);
  closeModal('serviceModalOverlay');
  openCartDrawer();
});

/* ================================================================
   CART SYSTEM
================================================================ */
let cart = [];

function addToCart(name, category, emoji, price, qty) {
  qty = qty || 1;
  const existingIdx = cart.findIndex(i => i.name === name);
  if (existingIdx >= 0) {
    cart[existingIdx].qty += qty;
  } else {
    cart.push({ name, category, emoji, price, qty });
  }
  updateCartUI();
  animateCartBadge();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

function changeCartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price ? i.price * i.qty : 0), 0);

  // Update badge
  const badge = document.getElementById('cartCount');
  badge.textContent = totalItems;

  // Update drawer
  const list = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty-msg">
        <span>🌱</span>
        <p>Your cart is empty</p>
        <small>Browse our products and services to get started!</small>
      </div>`;
    footer.style.display = 'none';
  } else {
    list.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-icon">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-cat">${item.category}</div>
          <div class="cart-item-price">${item.price ? '₹ ' + (item.price * item.qty) : 'Enquiry'}</div>
        </div>
        <div class="cart-item-qty-wrap">
          <button class="cart-qty-btn" onclick="changeCartQty(${idx}, -1)">−</button>
          <span class="cart-item-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})" aria-label="Remove">✕</button>
      </div>
    `).join('');
    footer.style.display = 'flex';
    document.getElementById('cartTotalItems').textContent = totalItems;
    document.getElementById('cartTotalPrice').textContent = '₹ ' + totalPrice;
  }
}

function animateCartBadge() {
  const badge = document.getElementById('cartCount');
  badge.classList.remove('bump');
  void badge.offsetWidth; // reflow
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

// Cart Drawer open/close
const cartIconBtn = document.getElementById('cartIconBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartDrawerClose = document.getElementById('cartDrawerClose');

function openCartDrawer() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

cartIconBtn.addEventListener('click', openCartDrawer);
cartDrawerClose.addEventListener('click', closeCartDrawer);
cartBackdrop.addEventListener('click', closeCartDrawer);

/* ================================================================
   CHECKOUT
================================================================ */
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  closeCartDrawer();
  openCheckout();
});

function openCheckout() {
  // Reset to form state
  document.getElementById('checkoutFormSection').style.display = 'block';
  document.getElementById('orderSuccessSection').style.display = 'none';
  document.getElementById('checkoutError').style.display = 'none';

  // Populate order summary
  const summary = document.getElementById('checkoutOrderSummary');
  const totalPrice = cart.reduce((sum, i) => sum + (i.price ? i.price * i.qty : 0), 0);
  summary.innerHTML = `
    <strong>Order Summary</strong>
    ${cart.map(i => `
      <div class="co-sum-item">
        <span>${i.emoji} ${i.name} × ${i.qty}</span>
        <span>${i.price ? '₹ ' + (i.price * i.qty) : 'Quote'}</span>
      </div>`).join('')}
    <div class="co-sum-item" style="font-weight:700; margin-top:4px; border-top: 1px solid rgba(74,124,89,0.2); padding-top:6px;">
      <span>Total</span>
      <span>₹ ${totalPrice}</span>
    </div>`;

  openModal('checkoutModalOverlay');
}

document.getElementById('placeOrderBtn').addEventListener('click', () => {
  const name    = document.getElementById('ck-name').value.trim();
  const phone   = document.getElementById('ck-phone').value.trim();
  const email   = document.getElementById('ck-email').value.trim();
  const address = document.getElementById('ck-address').value.trim();
  const city    = document.getElementById('ck-city').value.trim();
  const pin     = document.getElementById('ck-pin').value.trim();
  const errEl   = document.getElementById('checkoutError');

  if (!name || !phone || !email || !address || !city || !pin) {
    errEl.style.display = 'block';
    errEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  errEl.style.display = 'none';

  // Show success
  document.getElementById('checkoutFormSection').style.display = 'none';
  document.getElementById('orderSuccessSection').style.display = 'block';

  // Clear cart and form
  cart = [];
  updateCartUI();
  ['ck-name','ck-phone','ck-email','ck-address','ck-city','ck-pin'].forEach(id => {
    document.getElementById(id).value = '';
  });
});

document.getElementById('continueShopping').addEventListener('click', () => {
  closeModal('checkoutModalOverlay');
});

/* ================================================================
   COMMUNITY INTERACTIONS
================================================================ */
document.querySelectorAll('.post-actions').forEach(actionsEl => {
  actionsEl.addEventListener('click', e => {
    const btn = e.target.closest('.post-btn');
    if (!btn) return;
    const countEl = btn.querySelector('.count');
    if (!countEl) return;
    const current = parseInt(countEl.textContent, 10) || 0;
    const type = btn.dataset.type;
    if (type === 'like') {
      if (!btn.classList.contains('liked')) { countEl.textContent = current + 1; btn.classList.add('liked'); }
      else { countEl.textContent = Math.max(0, current - 1); btn.classList.remove('liked'); }
    } else {
      countEl.textContent = current + 1;
    }
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => { btn.style.transform = ''; }, 180);
  });
});

/* ================================================================
   CONTACT FORM
================================================================ */
document.getElementById('sendBtn').addEventListener('click', () => {
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();

  if (!name || !email || !message) {
    const form = document.getElementById('contactForm');
    form.style.animation = 'shake 0.4s ease';
    setTimeout(() => { form.style.animation = ''; }, 400);
    alert('Please fill in all fields before sending.');
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  const successEl = document.getElementById('formSuccess');
  successEl.style.display = 'block';
  const sendBtn = document.getElementById('sendBtn');
  sendBtn.textContent = '✓ Message Sent!';
  sendBtn.disabled = true;
  sendBtn.style.background = 'var(--sage-mid)';

  setTimeout(() => {
    successEl.style.display = 'none';
    document.getElementById('cf-name').value = '';
    document.getElementById('cf-email').value = '';
    document.getElementById('cf-message').value = '';
    sendBtn.textContent = 'Send Message 🌿';
    sendBtn.disabled = false;
    sendBtn.style.background = '';
  }, 4000);
});

/* ================================================================
   KEYBOARD ACCESSIBILITY
================================================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal('productModalOverlay');
    closeModal('serviceModalOverlay');
    closeModal('checkoutModalOverlay');
    closeCartDrawer();
    if (tabNav) tabNav.classList.remove('open');
  }
});

/* ================================================================
   DYNAMIC STYLES (shake animation)
================================================================ */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

/* ================================================================
   INIT
================================================================ */
restoreTabFromHash();
window.addEventListener('hashchange', restoreTabFromHash);
updateCartUI();
