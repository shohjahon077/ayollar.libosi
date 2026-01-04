// DOM elementlarini tanlab olish
const loading = document.querySelector('.loading');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCart');
const cartBody = document.getElementById('cartBody');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const orderModal = document.getElementById('orderModal');
const closeOrderBtn = document.getElementById('closeOrderModal');
const orderForm = document.getElementById('orderForm');
const successModal = document.getElementById('successModal');
const continueBtn = document.getElementById('continueBtn');
const cancelModal = document.getElementById('cancelModal');
const cancelForm = document.getElementById('cancelForm');
const closeCancelBtn = document.getElementById('closeCancelModal');
const overlay = document.querySelector('.overlay');
const adminBtn = document.getElementById('adminBtn');
const telegramModal = document.getElementById('telegramModal');
const closeTelegramBtn = document.getElementById('closeTelegramModal');
const adminModal = document.getElementById('adminModal');
const closeAdminBtn = document.getElementById('closeAdminModal');
const scrollTopBtn = document.getElementById('scrollTop');

// Global o'zgaruvchilar
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let orderCounter = parseInt(localStorage.getItem('orderCounter')) || 1000;
let telegramConfig = JSON.parse(localStorage.getItem('telegramConfig')) || {
    token: '8055090268:AAHtu9cy9lnZw_GFZqo8mc860Bj9G3H7vOU',
    chatId: '8136720315'
};

// Sayt yuklanganda
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
    
    loadProducts();
    updateCart();
    loadTelegramConfig();
    setupEventListeners();
    window.addEventListener('scroll', handleScroll);
});

// Event listenerlarni o'rnatish
function setupEventListeners() {
    // Mobile menu
    if (menuBtn) menuBtn.addEventListener('click', toggleMobileMenu);
    
    // Cart
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => filterProducts(btn));
    });
    
    // Checkout
    if (checkoutBtn) checkoutBtn.addEventListener('click', openOrderModal);
    if (closeOrderBtn) closeOrderBtn.addEventListener('click', () => closeModal(orderModal));
    
    // Order form
    if (orderForm) orderForm.addEventListener('submit', handleOrderSubmit);
    
    // Success modal
    if (continueBtn) continueBtn.addEventListener('click', () => closeModal(successModal));
    
    // Cancel modal
    if (closeCancelBtn) closeCancelBtn.addEventListener('click', () => closeModal(cancelModal));
    if (cancelForm) cancelForm.addEventListener('submit', handleCancelSubmit);
    
    // Overlay
    if (overlay) overlay.addEventListener('click', closeAllModals);
    
    // Admin
    if (adminBtn) adminBtn.addEventListener('click', openAdminPanel);
    if (closeAdminBtn) closeAdminBtn.addEventListener('click', () => closeModal(adminModal));
    if (closeTelegramBtn) closeTelegramBtn.addEventListener('click', () => closeModal(telegramModal));
    
    // Scroll to top
    if (scrollTopBtn) scrollTopBtn.addEventListener('click', scrollToTop);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Admin tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab));
    });
    
    // Telegram buttons
    const saveTelegramBtn = document.getElementById('saveTelegramBtn');
    const testTelegramBtn = document.getElementById('testTelegramBtn');
    
    if (saveTelegramBtn) saveTelegramBtn.addEventListener('click', saveTelegramSettings);
    if (testTelegramBtn) testTelegramBtn.addEventListener('click', testTelegram);
    
    // Admin actions
    const clearOrdersBtn = document.getElementById('clearOrdersBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    
    if (clearOrdersBtn) clearOrdersBtn.addEventListener('click', clearAllOrders);
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearAllCart);
}

// Mahsulotlarni yuklash
function loadProducts() {
    products = [
        {
            id: 1,
            name: 'Erkaklar koylak',
            category: 'men',
            price: 120000,
            originalPrice: 150000,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Ayollar ko\'ylak',
            category: 'women',
            price: 180000,
            originalPrice: 220000,
            image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Chegirma',
            rating: 4.8
        },
        {
            id: 3,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 4,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 5,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 6,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 7,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 8,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 9,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 10,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 11,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 12,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 13,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 14,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 15,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 16,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 17,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 18,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 19,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 20,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 21,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 22,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 23,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 24,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 25,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 26,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 27,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 28,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 29,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 30,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 31,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 32,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 33,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 34,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 35,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 36,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 37,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 38,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 39,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 40,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 41,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 42,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 43,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 44,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 45,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 46,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 47,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 48,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 49,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 50,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 52,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 53,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 54,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 55,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 56,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
            id: 57,
            name: 'Ayollar yubka',
            category: 'women',
            price: 160000,
            originalPrice: 200000,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: 'Yangi',
            rating: 4.4
        },
        {
            id: 58,
            name: 'Bolalar futbolkasi',
            category: 'kids',
            price: 65000,
            originalPrice: 80000,
            image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.2
        },
        {
            id: 59,
            name: 'Erkaklar shim',
            category: 'men',
            price: 200000,
            originalPrice: 250000,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            badge: null,
            rating: 4.7
        },
        {
    id: 60,
    name: 'Zamonaviy ayollar yubkasi',
    category: 'women',
    price: 175000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 61,
    name: 'Oqsil toʻqimali yubka',
    category: 'women',
    price: 195000,
    originalPrice: 240000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 62,
    name: 'Ofis uslubidagi yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 63,
    name: 'Maxsus dizayn yubka',
    category: 'women',
    price: 245000,
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 64,
    name: 'Yozgi yengil yubka',
    category: 'women',
    price: 135000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 65,
    name: 'Qishki iliq yubka',
    category: 'women',
    price: 185000,
    originalPrice: 230000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 66,
    name: 'Kapronli klassik yubka',
    category: 'women',
    price: 155000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 67,
    name: 'Parkanli keng yubka',
    category: 'women',
    price: 210000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 68,
    name: 'Ipak matodan yubka',
    category: 'women',
    price: 275000,
    originalPrice: 340000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 69,
    name: 'Kunjara naqshli yubka',
    category: 'women',
    price: 195000,
    originalPrice: 245000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 70,
    name: 'Mini uzunlikdagi yubka',
    category: 'women',
    price: 145000,
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 71,
    name: 'Midi uzunlikdagi yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 72,
    name: 'Maksidi (uzun) yubka',
    category: 'women',
    price: 185000,
    originalPrice: 230000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 73,
    name: 'Belbogʻli yubka',
    category: 'women',
    price: 175000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 74,
    name: 'Yorqin rangli yubka',
    category: 'women',
    price: 155000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 75,
    name: 'Pasta rang yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 76,
    name: 'Raf yubka modeli',
    category: 'women',
    price: 185000,
    originalPrice: 235000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 77,
    name: 'Qogʻozli bel yubka',
    category: 'women',
    price: 195000,
    originalPrice: 245000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 78,
    name: 'Saten matodan yubka',
    category: 'women',
    price: 225000,
    originalPrice: 280000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 79,
    name: 'Shifon yengil yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 80,
    name: 'Toʻrli yubka',
    category: 'women',
    price: 155000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 81,
    name: 'Kanvas material yubka',
    category: 'women',
    price: 185000,
    originalPrice: 230000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 82,
    name: 'Kombinatsiyali yubka',
    category: 'women',
    price: 195000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 83,
    name: 'Tungi party yubka',
    category: 'women',
    price: 245000,
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 84,
    name: 'Kunlik foydalanish yubkasi',
    category: 'women',
    price: 145000,
    originalPrice: 185000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 85,
    name: 'Klasik qora yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 86,
    name: 'Oq romantik yubka',
    category: 'women',
    price: 175000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 87,
    name: 'Krem rangli yubka',
    category: 'women',
    price: 155000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 88,
    name: 'Korall rang yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 89,
    name: 'Turkuaz yubka',
    category: 'women',
    price: 155000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 90,
    name: 'Lavanda rangli yubka',
    category: 'women',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 91,
    name: 'Mint rang yubka',
    category: 'women',
    price: 155000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 92,
    name: 'Mustang yubka modeli',
    category: 'women',
    price: 185000,
    originalPrice: 235000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 93,
    name: 'Bifurcation yubka',
    category: 'women',
    price: 195000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 94,
    name: 'Assimetrik yubka',
    category: 'women',
    price: 205000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 95,
    name: 'Yopiq dizayn yubka',
    category: 'women',
    price: 175000,
    originalPrice: 225000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 96,
    name: 'Ochiq dizayn yubka',
    category: 'women',
    price: 185000,
    originalPrice: 235000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 97,
    name: 'Krujevka bilan yubka',
    category: 'women',
    price: 195000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 98,
    name: 'Zamonaviy gradus yubka',
    category: 'women',
    price: 215000,
    originalPrice: 270000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 99,
    name: 'Premium sifat yubka',
    category: 'women',
    price: 295000,
    originalPrice: 370000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 100,
    name: 'Chegirmali yangi yubka',
    category: 'women',
    price: 135000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 101,
    name: 'Yubka toʻplami 2 dona',
    category: 'women',
    price: 275000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 102,
    name: 'Bolalar uchun yubka',
    category: 'kids',
    price: 115000,
    originalPrice: 150000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 103,
    name: 'Oʻsmirlar uchun yubka',
    category: 'women',
    price: 145000,
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 104,
    name: 'Koʻp rangli yubka',
    category: 'women',
    price: 165000,
    originalPrice: 215000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 105,
    name: 'Yubka 3 dona toʻplam',
    category: 'women',
    price: 385000,
    originalPrice: 490000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 106,
    name: 'Yubka bluzka toʻplami',
    category: 'women',
    price: 295000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 107,
    name: 'Oq jez yubka',
    category: 'women',
    price: 195000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 108,
    name: 'Denim yubka',
    category: 'women',
    price: 185000,
    originalPrice: 240000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 109,
    name: 'Yubka kurtka toʻplami',
    category: 'women',
    price: 345000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 110,
    name: 'Aqliy ranglar yubka',
    category: 'women',
    price: 175000,
    originalPrice: 230000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 111,
    name: 'Hajviy naqshli yubka',
    category: 'women',
    price: 195000,
    originalPrice: 255000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 112,
    name: 'Detsembr kolleksiyasi',
    category: 'women',
    price: 225000,
    originalPrice: 290000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 113,
    name: 'Yangi yil yubkasi',
    category: 'women',
    price: 245000,
    originalPrice: 320000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 114,
    name: 'Bayram uchun yubka',
    category: 'women',
    price: 265000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 115,
    name: 'Toʻy uchun yubka',
    category: 'women',
    price: 395000,
    originalPrice: 500000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 116,
    name: 'Oʻquv yili yubkasi',
    category: 'kids',
    price: 125000,
    originalPrice: 165000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 117,
    name: 'Maktab yubkasi',
    category: 'kids',
    price: 135000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 118,
    name: 'Universitet yubkasi',
    category: 'women',
    price: 155000,
    originalPrice: 205000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 119,
    name: 'Ish uchun yubka',
    category: 'women',
    price: 185000,
    originalPrice: 240000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 120,
    name: 'Uy ishi yubkasi',
    category: 'women',
    price: 115000,
    originalPrice: 155000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 121,
    name: 'Dam olish yubkasi',
    category: 'women',
    price: 135000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 122,
    name: 'Sayr yubkasi',
    category: 'women',
    price: 145000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 123,
    name: 'Sayyohlik yubkasi',
    category: 'women',
    price: 165000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 124,
    name: 'Sport yubkasi',
    category: 'women',
    price: 155000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 125,
    name: 'Fitnes yubkasi',
    category: 'women',
    price: 145000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 126,
    name: 'Yozgi plyaj yubkasi',
    category: 'women',
    price: 125000,
    originalPrice: 170000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 127,
    name: 'Qishki yubka',
    category: 'women',
    price: 195000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 128,
    name: 'Bahor yubkasi',
    category: 'women',
    price: 165000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 129,
    name: 'Yoz yubkasi',
    category: 'women',
    price: 145000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 130,
    name: 'Kuz yubkasi',
    category: 'women',
    price: 175000,
    originalPrice: 235000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 131,
    name: 'Yubka patnis toʻplami',
    category: 'women',
    price: 275000,
    originalPrice: 360000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 132,
    name: 'Yubka toj toʻplami',
    category: 'women',
    price: 325000,
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 133,
    name: 'Yubka aksessuarlar',
    category: 'women',
    price: 195000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 134,
    name: 'Yubka poyabzal',
    category: 'women',
    price: 285000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 135,
    name: 'Yubka sumka toʻplami',
    category: 'women',
    price: 335000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 136,
    name: 'Yubka koʻylak',
    category: 'women',
    price: 225000,
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 137,
    name: 'Yubka jemper',
    category: 'women',
    price: 245000,
    originalPrice: 330000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 138,
    name: 'Yubka kostyum',
    category: 'women',
    price: 395000,
    originalPrice: 520000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 139,
    name: 'Yubka plash',
    category: 'women',
    price: 275000,
    originalPrice: 370000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 140,
    name: 'Yubka shlyapa',
    category: 'women',
    price: 145000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 141,
    name: 'Yubka qoʻlqop',
    category: 'women',
    price: 85000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 142,
    name: 'Yubka sharf',
    category: 'women',
    price: 95000,
    originalPrice: 130000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 143,
    name: 'Yubka kamar',
    category: 'women',
    price: 75000,
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 144,
    name: 'Yubka aksessuar toʻplami',
    category: 'women',
    price: 195000,
    originalPrice: 270000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 145,
    name: 'Yubka paket',
    category: 'women',
    price: 455000,
    originalPrice: 600000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 146,
    name: 'Yubka kolleksiyasi',
    category: 'women',
    price: 525000,
    originalPrice: 700000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 147,
    name: 'Yubka premium',
    category: 'women',
    price: 395000,
    originalPrice: 520000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Premium',
    rating: 4.4
},
{
    id: 148,
    name: 'Yubka lux',
    category: 'women',
    price: 495000,
    originalPrice: 650000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Lux',
    rating: 4.4
},
{
    id: 149,
    name: 'Yubka exclusive',
    category: 'women',
    price: 595000,
    originalPrice: 780000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Exclusive',
    rating: 4.4
},
{
    id: 150,
    name: 'Yubka limited edition',
    category: 'women',
    price: 695000,
    originalPrice: 900000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Limited',
    rating: 4.4
},


{
    id: 151,
    name: 'Erkaklar kurtka',
    category: 'men',
    price: 345000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 152,
    name: 'Erkaklar koʻylak',
    category: 'men',
    price: 185000,
    originalPrice: 240000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.3
},
{
    id: 153,
    name: 'Erkaklar shim',
    category: 'men',
    price: 225000,
    originalPrice: 290000,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 154,
    name: 'Bolalar kostyum',
    category: 'kids',
    price: 195000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 155,
    name: 'Bolalar futbolka',
    category: 'kids',
    price: 85000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 156,
    name: 'Ayollar platyo',
    category: 'women',
    price: 295000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 157,
    name: 'Erkaklar sportivka',
    category: 'men',
    price: 195000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 158,
    name: 'Bolalar palto',
    category: 'kids',
    price: 165000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 159,
    name: 'Ayollar bluzka',
    category: 'women',
    price: 145000,
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 160,
    name: 'Erkaklar futbolka',
    category: 'men',
    price: 95000,
    originalPrice: 130000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.3
},
{
    id: 161,
    name: 'Bolalar shim',
    category: 'kids',
    price: 125000,
    originalPrice: 170000,
    image: 'https://images.unsplash.com/photo-1558769132-cb1c458e4222?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 162,
    name: 'Ayollar kostyum',
    category: 'women',
    price: 345000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 163,
    name: 'Erkaklar palto',
    category: 'men',
    price: 395000,
    originalPrice: 520000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 164,
    name: 'Bolalar kofta',
    category: 'kids',
    price: 135000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 165,
    name: 'Ayollar jemper',
    category: 'women',
    price: 185000,
    originalPrice: 240000,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 166,
    name: 'Erkaklar kostyum',
    category: 'men',
    price: 495000,
    originalPrice: 650000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 167,
    name: 'Bolalar yubka',
    category: 'kids',
    price: 115000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 168,
    name: 'Ayollar shim',
    category: 'women',
    price: 175000,
    originalPrice: 230000,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 169,
    name: 'Erkaklar sviter',
    category: 'men',
    price: 165000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 170,
    name: 'Bolalar palto',
    category: 'kids',
    price: 145000,
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1558769132-cb1c458e4222?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 171,
    name: 'Ayoller halat',
    category: 'women',
    price: 125000,
    originalPrice: 170000,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.3
},
{
    id: 172,
    name: 'Erkaklar shortik',
    category: 'men',
    price: 115000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 173,
    name: 'Bolalar koʻylak',
    category: 'kids',
    price: 105000,
    originalPrice: 150000,
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 174,
    name: 'Ayollar toʻni',
    category: 'women',
    price: 225000,
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 175,
    name: 'Erkaklar krossovka',
    category: 'men',
    price: 285000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 176,
    name: 'Bolalar ayoq kiyim',
    category: 'kids',
    price: 135000,
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 177,
    name: 'Ayollar tufli',
    category: 'women',
    price: 195000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 178,
    name: 'Erkaklar tufli',
    category: 'men',
    price: 175000,
    originalPrice: 240000,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 179,
    name: 'Bolalar tufli',
    category: 'kids',
    price: 115000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 180,
    name: 'Ayoller sumka',
    category: 'women',
    price: 145000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 181,
    name: 'Erkaklar sumka',
    category: 'men',
    price: 165000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 182,
    name: 'Bolalar sumka',
    category: 'kids',
    price: 95000,
    originalPrice: 140000,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 183,
    name: 'Ayollar shlyapa',
    category: 'women',
    price: 85000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.3
},
{
    id: 184,
    name: 'Erkaklar shlyapa',
    category: 'men',
    price: 95000,
    originalPrice: 130000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 185,
    name: 'Bolalar shlyapa',
    category: 'kids',
    price: 65000,
    originalPrice: 90000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 186,
    name: 'Ayollar qoʻlqop',
    category: 'women',
    price: 55000,
    originalPrice: 80000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 187,
    name: 'Erkaklar qoʻlqop',
    category: 'men',
    price: 65000,
    originalPrice: 90000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.3
},
{
    id: 188,
    name: 'Bolalar qoʻlqop',
    category: 'kids',
    price: 45000,
    originalPrice: 70000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 189,
    name: 'Ayoller sharf',
    category: 'women',
    price: 75000,
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 190,
    name: 'Erkaklar sharf',
    category: 'men',
    price: 85000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 191,
    name: 'Bolalar sharf',
    category: 'kids',
    price: 55000,
    originalPrice: 80000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 192,
    name: 'Ayoller kostyum toʻplam',
    category: 'women',
    price: 425000,
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.7
},
{
    id: 193,
    name: 'Erkaklar kostyum toʻplam',
    category: 'men',
    price: 495000,
    originalPrice: 650000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.6
},
{
    id: 194,
    name: 'Bolalar kostyum toʻplam',
    category: 'kids',
    price: 245000,
    originalPrice: 320000,
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 195,
    name: 'Ayoller kiyim toʻplam',
    category: 'women',
    price: 325000,
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.6
},
{
    id: 196,
    name: 'Erkaklar kiyim toʻplam',
    category: 'men',
    price: 285000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 197,
    name: 'Bolalar kiyim toʻplam',
    category: 'kids',
    price: 185000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.6
},
{
    id: 198,
    name: 'Ayoller aksessuar toʻplam',
    category: 'women',
    price: 165000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 199,
    name: 'Erkaklar aksessuar toʻplam',
    category: 'men',
    price: 145000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.4
},
{
    id: 200,
    name: 'Bolalar aksessuar toʻplam',
    category: 'kids',
    price: 115000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 200,
    name: 'Bolalar aksessuar toʻplam',
    category: 'kids',
    price: 115000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 201,
    name: 'Smartfon Samsung S23',
    category: 'electronics',
    price: 8250000,
    originalPrice: 10500000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.8
},
{
    id: 202,
    name: 'Noutbuk MacBook Air',
    category: 'electronics',
    price: 12500000,
    originalPrice: 15500000,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.9
},
{
    id: 203,
    name: 'Televizor LG 55"',
    category: 'electronics',
    price: 6850000,
    originalPrice: 8500000,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 204,
    name: 'Konditsioner Samsung',
    category: 'electronics',
    price: 5250000,
    originalPrice: 6500000,
    image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 205,
    name: 'Kir yuvish mashinasi',
    category: 'electronics',
    price: 4850000,
    originalPrice: 6200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 206,
    name: 'Muzlatkich Samsung',
    category: 'electronics',
    price: 9850000,
    originalPrice: 12500000,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d1b7b1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.8
},
{
    id: 207,
    name: 'Elektron soat Apple',
    category: 'electronics',
    price: 4850000,
    originalPrice: 6500000,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 208,
    name: 'Aqlli soat Samsung',
    category: 'electronics',
    price: 2850000,
    originalPrice: 3800000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 209,
    name: 'Naushnik AirPods Pro',
    category: 'electronics',
    price: 2850000,
    originalPrice: 3800000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 210,
    name: 'Kolonka JBL',
    category: 'electronics',
    price: 1850000,
    originalPrice: 2500000,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 211,
    name: 'Fotokamera Canon',
    category: 'electronics',
    price: 7850000,
    originalPrice: 9800000,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.8
},
{
    id: 212,
    name: 'Oʻyin konsoli PS5',
    category: 'electronics',
    price: 6850000,
    originalPrice: 8500000,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.9
},
{
    id: 213,
    name: 'Planshet iPad',
    category: 'electronics',
    price: 5850000,
    originalPrice: 7500000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 214,
    name: 'Printer HP',
    category: 'electronics',
    price: 1850000,
    originalPrice: 2500000,
    image: 'https://images.unsplash.com/photo-1551650976-2dc30fe8f261?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 215,
    name: 'Skener Canon',
    category: 'electronics',
    price: 1250000,
    originalPrice: 1800000,
    image: 'https://images.unsplash.com/photo-1551650976-2dc30fe8f261?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 216,
    name: 'Monitor Samsung 27"',
    category: 'electronics',
    price: 2850000,
    originalPrice: 3800000,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 217,
    name: 'Klaviatura Logitech',
    category: 'electronics',
    price: 650000,
    originalPrice: 900000,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 218,
    name: 'Sichqoncha Razer',
    category: 'electronics',
    price: 550000,
    originalPrice: 800000,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 219,
    name: 'Router TP-Link',
    category: 'electronics',
    price: 450000,
    originalPrice: 650000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 220,
    name: 'Powerbank Xiaomi',
    category: 'electronics',
    price: 350000,
    originalPrice: 500000,
    image: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 221,
    name: 'Oshxona pliti',
    category: 'electronics',
    price: 3850000,
    originalPrice: 5200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 222,
    name: 'Mikrotoʻlqinli pech',
    category: 'electronics',
    price: 1850000,
    originalPrice: 2500000,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 223,
    name: 'Choynak Bosch',
    category: 'electronics',
    price: 550000,
    originalPrice: 800000,
    image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 224,
    name: 'Toaster Philips',
    category: 'electronics',
    price: 450000,
    originalPrice: 650000,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d1b7b1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 225,
    name: 'Kofe mashinasi',
    category: 'electronics',
    price: 2850000,
    originalPrice: 3800000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 226,
    name: 'Changyutgich Samsung',
    category: 'electronics',
    price: 1850000,
    originalPrice: 2500000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 227,
    name: 'Konditsioner Artel',
    category: 'electronics',
    price: 4250000,
    originalPrice: 5500000,
    image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 228,
    name: 'Ventilyator',
    category: 'electronics',
    price: 350000,
    originalPrice: 500000,
    image: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.3
},
{
    id: 229,
    name: 'Ish stoli',
    category: 'furniture',
    price: 650000,
    originalPrice: 850000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 230,
    name: 'Stul ofis',
    category: 'furniture',
    price: 450000,
    originalPrice: 600000,
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 231,
    name: 'Divan toʻplam',
    category: 'furniture',
    price: 4850000,
    originalPrice: 6500000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 232,
    name: 'Kreslo yumshoq',
    category: 'furniture',
    price: 1250000,
    originalPrice: 1800000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 233,
    name: 'Yotoq toʻplam',
    category: 'furniture',
    price: 3850000,
    originalPrice: 5200000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.8
},
{
    id: 234,
    name: 'Shkaf kiyim',
    category: 'furniture',
    price: 1850000,
    originalPrice: 2500000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 235,
    name: 'Stol ovqatlanish',
    category: 'furniture',
    price: 850000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 236,
    name: 'Stullar toʻplami',
    category: 'furniture',
    price: 650000,
    originalPrice: 900000,
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 237,
    name: 'Shkaf kitob',
    category: 'furniture',
    price: 750000,
    originalPrice: 1100000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 238,
    name: 'Parda toʻplam',
    category: 'furniture',
    price: 350000,
    originalPrice: 500000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
},
{
    id: 239,
    name: 'Gilam 3x4 metr',
    category: 'furniture',
    price: 850000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 240,
    name: 'Lampa chiroq',
    category: 'furniture',
    price: 250000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 241,
    name: 'Oyinchoq qoʻgʻirchoq',
    category: 'toys',
    price: 125000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 242,
    name: 'Mashina oʻyinchoq',
    category: 'toys',
    price: 85000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 243,
    name: 'Lego toʻplam',
    category: 'toys',
    price: 185000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.8
},
{
    id: 244,
    name: 'Pazl yigʻish',
    category: 'toys',
    price: 65000,
    originalPrice: 90000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.4
},
{
    id: 245,
    name: 'Kukla uy',
    category: 'toys',
    price: 195000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.7
},
{
    id: 246,
    name: 'Velosiped bolalar',
    category: 'toys',
    price: 850000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.6
},
{
    id: 247,
    name: 'Samolyot oʻyinchoq',
    category: 'toys',
    price: 125000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Yangi',
    rating: 4.5
},
{
    id: 248,
    name: 'Oʻyin toʻplami',
    category: 'toys',
    price: 145000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.6
},
{
    id: 249,
    name: 'Kitoblar toʻplam',
    category: 'toys',
    price: 185000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.7
},
{
    id: 250,
    name: 'Ranglar toʻplami',
    category: 'toys',
    price: 75000,
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'Toʻplam',
    rating: 4.5
}





    ];
    
    renderProducts();
}

// Mahsulotlarni ko'rsatish
function renderProducts(filter = 'all') {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Savatga</button>
                    <button class="wishlist-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        const addBtn = productCard.querySelector('.add-to-cart');
        addBtn.addEventListener('click', () => addToCart(product));
        
        const wishBtn = productCard.querySelector('.wishlist-btn');
        wishBtn.addEventListener('click', function(e) {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            showNotification(
                icon.classList.contains('fas') 
                    ? 'Sevimlilarga qo\'shildi' 
                    : 'Sevimlilardan olindi'
            );
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Mahsulotlarni filtrlash
function filterProducts(button) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    renderProducts(filter);
}

// Savatga mahsulot qo'shish
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification('Mahsulot savatga qo\'shildi');
}

// Savatdan mahsulot o'chirish
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Mahsulot savatdan olindi');
}

// Miqdorni yangilash
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCart();
        }
    }
}

// Savatni yangilash
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
    }
    
    renderCartItems();
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = formatPrice(total);
    }
}

// Savat elementlarini chizish
function renderCartItems() {
    if (!cartBody) return;
    
    cartBody.innerHTML = '';
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Savatda mahsulot yo'q</p>
                <a href="#products" class="btn secondary-btn">Xarid qilish</a>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="cart-item-actions">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');
        const removeBtn = cartItem.querySelector('.remove-item');
        
        minusBtn.addEventListener('click', function() {
            const item = cart.find(i => i.id === parseInt(this.dataset.id));
            if (item) updateQuantity(item.id, item.quantity - 1);
        });
        
        plusBtn.addEventListener('click', function() {
            const item = cart.find(i => i.id === parseInt(this.dataset.id));
            if (item) updateQuantity(item.id, item.quantity + 1);
        });
        
        removeBtn.addEventListener('click', function() {
            removeFromCart(parseInt(this.dataset.id));
        });
        
        cartBody.appendChild(cartItem);
    });
}

// Savatni ochish
function openCart() {
    if (cartSidebar) cartSidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
}

// Savatni yopish
function closeCart() {
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// Buyurtma modali
function openOrderModal() {
    if (cart.length === 0) {
        showNotification('Savat bo\'sh', 'warning');
        return;
    }
    
    closeCart();
    
    if (orderModal) orderModal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    
    if (orderForm) orderForm.reset();
}

// Buyurtma yuborish
async function handleOrderSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const note = document.getElementById('customerNote')?.value.trim() || '';
    
    if (!name || !phone || !address) {
        showNotification('Iltimos, barcha maydonlarni to\'ldiring', 'warning');
        return;
    }
    
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 9) {
        showNotification('Telefon raqami noto\'g\'ri', 'warning');
        return;
    }
    
    const submitBtn = orderForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Ishlanmoqda...';
    submitBtn.disabled = true;
    
    try {
        const order = createOrder(name, phone, address, note);
        
        closeModal(orderModal);
        showSuccessModal(order);
        
        if (orderForm) orderForm.reset();
        
        await sendOrderToTelegram(order);
        
        cart = [];
        updateCart();
        
    } catch (error) {
        console.error('Xatolik:', error);
        showNotification('Xatolik yuz berdi', 'error');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Buyurtma yaratish
function createOrder(name, phone, address, note) {
    orderCounter++;
    localStorage.setItem('orderCounter', orderCounter.toString());
    
    const order = {
        id: `ORD-${orderCounter}`,
        date: new Date().toLocaleString('uz-UZ'),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'yetkazilmoqda',
        customer: { name, phone, address, note },
        telegramSent: false
    };
    
    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    return order;
}

// Muvaffaqiyat modali
function showSuccessModal(order) {
    const orderNumberElem = document.getElementById('successOrderNumber');
    const orderTotalElem = document.getElementById('successOrderTotal');
    
    if (orderNumberElem) orderNumberElem.textContent = order.id;
    if (orderTotalElem) orderTotalElem.textContent = formatPrice(order.total);
    
    if (successModal) successModal.classList.add('active');
    if (overlay) overlay.classList.add('active');
}

// Telegram sozlamalari
function loadTelegramConfig() {
    const tokenInput = document.getElementById('telegramToken');
    const chatIdInput = document.getElementById('telegramChatId');
    
    if (tokenInput && chatIdInput) {
        tokenInput.value = telegramConfig.token || '';
        chatIdInput.value = telegramConfig.chatId || '';
    }
}

function saveTelegramSettings() {
    const tokenInput = document.getElementById('telegramToken');
    const chatIdInput = document.getElementById('telegramChatId');
    
    if (!tokenInput || !chatIdInput) return;
    
    const token = tokenInput.value.trim();
    const chatId = chatIdInput.value.trim();
    
    if (!token || !chatId) {
        showNotification('Iltimos, ikkala maydonni ham to\'ldiring', 'warning');
        return;
    }
    
    telegramConfig = { token, chatId };
    localStorage.setItem('telegramConfig', JSON.stringify(telegramConfig));
    
    showNotification('Telegram sozlamalari saqlandi', 'success');
    closeModal(telegramModal);
}

async function testTelegram() {
    const tokenInput = document.getElementById('telegramToken');
    const chatIdInput = document.getElementById('telegramChatId');
    
    if (!tokenInput || !chatIdInput) return;
    
    const token = tokenInput.value.trim();
    const chatId = chatIdInput.value.trim();
    
    if (!token || !chatId) {
        showNotification('Avval token va Chat ID ni kiriting', 'warning');
        return;
    }
    
    const testBtn = document.getElementById('testTelegramBtn');
    const originalText = testBtn.innerHTML;
    testBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Testlanmoqda...';
    testBtn.disabled = true;
    
    try {
        const testMessage = `✅ <b>Test xabar!</b>\n\nModaDo'kon boti to'g\'ri ishlayapti.\n\n📅 Sana: ${new Date().toLocaleDateString('uz-UZ')}\n⏰ Vaqt: ${new Date().toLocaleTimeString('uz-UZ')}`;
        
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: testMessage,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            showNotification('✅ Test xabar yuborildi! Telegramni tekshiring.', 'success');
            telegramConfig = { token, chatId };
            localStorage.setItem('telegramConfig', JSON.stringify(telegramConfig));
        } else {
            let errorMessage = 'Noma\'lum xatolik';
            if (data.description) errorMessage = data.description;
            showNotification(`❌ Xatolik: ${errorMessage}`, 'error');
        }
    } catch (error) {
        showNotification('❌ Ulanish xatosi', 'error');
    } finally {
        testBtn.innerHTML = originalText;
        testBtn.disabled = false;
    }
}

async function sendOrderToTelegram(order) {
    if (!telegramConfig.token || !telegramConfig.chatId) {
        console.log('Telegram bot sozlanmagan');
        return false;
    }
    
    try {
        const message = formatTelegramMessage(order);
        
        const response = await fetch(`https://api.telegram.org/bot${telegramConfig.token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: telegramConfig.chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            const orderIndex = orders.findIndex(o => o.id === order.id);
            if (orderIndex !== -1) {
                orders[orderIndex].telegramSent = true;
                localStorage.setItem('orders', JSON.stringify(orders));
            }
            return true;
        } else {
            console.error('Telegram xatosi:', data);
            return false;
        }
    } catch (error) {
        console.error('Ulanish xatosi:', error);
        return false;
    }
}

function formatTelegramMessage(order) {
    const itemsText = order.items.map((item, index) => {
        const total = item.price * item.quantity;
        return `${index + 1}. ${item.name}\n   Miqdor: ${item.quantity} ta\n   Narx: ${formatPrice(item.price)}\n   Jami: ${formatPrice(total)}`;
    }).join('\n\n');
    
    return `🛒 <b>YANGI BUYURTMA!</b>

📦 <b>Buyurtma raqami:</b> ${order.id}
📅 <b>Sana:</b> ${order.date}
👤 <b>Mijoz:</b> ${order.customer.name}
📞 <b>Telefon:</b> ${order.customer.phone}
📍 <b>Manzil:</b> ${order.customer.address}
${order.customer.note ? `💬 <b>Izoh:</b> ${order.customer.note}\n` : ''}

📋 <b>Mahsulotlar:</b>
${itemsText}

💰 <b>Jami summa:</b> ${formatPrice(order.total)}
🚚 <b>Holati:</b> ${order.status}

⏰ <b>Vaqt:</b> ${new Date().toLocaleTimeString('uz-UZ')}`;
}

// Buyurtmani bekor qilish
function handleCancelSubmit(e) {
    e.preventDefault();
    
    const orderNumber = document.getElementById('cancelOrderNumber').value.trim();
    const phone = document.getElementById('cancelPhone').value.trim();
    const reason = document.getElementById('cancelReason').value;
    
    if (!orderNumber || !phone || !reason) {
        showNotification('Iltimos, barcha maydonlarni to\'ldiring', 'warning');
        return;
    }
    
    const orderIndex = orders.findIndex(order => order.id === orderNumber);
    
    if (orderIndex === -1) {
        showNotification('Buyurtma topilmadi', 'error');
        return;
    }
    
    orders[orderIndex].status = 'bekor qilindi';
    orders[orderIndex].cancelled = {
        date: new Date().toLocaleString('uz-UZ'),
        reason: reason,
        phone: phone
    };
    
    localStorage.setItem('orders', JSON.stringify(orders));
    
    closeModal(cancelModal);
    cancelForm.reset();
    showNotification('Buyurtma bekor qilindi', 'success');
    sendCancelToTelegram(orders[orderIndex]);
}

async function sendCancelToTelegram(order) {
    if (!telegramConfig.token || !telegramConfig.chatId) return;
    
    const message = `❌ <b>BUYURTMA BEKOR QILINDI!</b>\n\n📦 <b>Buyurtma:</b> ${order.id}\n📅 <b>Sana:</b> ${order.cancelled.date}\n📞 <b>Telefon:</b> ${order.cancelled.phone}\n📝 <b>Sabab:</b> ${getReasonText(order.cancelled.reason)}`;
    
    try {
        await fetch(`https://api.telegram.org/bot${telegramConfig.token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: telegramConfig.chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
    } catch (error) {
        console.error('Cancel notification error:', error);
    }
}

function getReasonText(reason) {
    const reasons = {
        'change_mind': 'Fikrimni o\'zgartirdim',
        'delivery_time': 'Yetkazib berish vaqti uzoq',
        'other': 'Boshqa sabab'
    };
    return reasons[reason] || reason;
}

// Admin panel
function openAdminPanel() {
    if (adminModal) adminModal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    updateOrdersList();
}

function switchTab(button) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    const tabName = button.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });
    
    const activeTab = document.getElementById(`${tabName}Tab`);
    if (activeTab) activeTab.style.display = 'block';
}

function updateOrdersList() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;
    
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="text-center">Hozircha buyurtmalar yo\'q</p>';
        return;
    }
    
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item-admin';
        orderItem.innerHTML = `
            <div class="order-header">
                <span class="order-id">${order.id}</span>
                <span class="order-time">${order.date}</span>
            </div>
            <div class="order-products">
                ${order.items.map(item => `${item.name} (${item.quantity} ta)`).join(', ')}
            </div>
            <div class="order-customer">
                <span>👤 ${order.customer.name}</span>
                <span>📞 ${order.customer.phone}</span>
            </div>
            <div class="order-footer">
                <span class="order-status ${order.status === 'bekor qilindi' ? 'status-cancelled' : 'status-active'}">
                    ${order.status === 'bekor qilindi' ? '❌ ' : '✅ '}${order.status}
                </span>
                <span class="order-total">${formatPrice(order.total)}</span>
            </div>
        `;
        ordersList.appendChild(orderItem);
    });
}

function clearAllOrders() {
    if (confirm('Barcha buyurtmalarni o\'chirishni tasdiqlaysizmi?')) {
        orders = [];
        localStorage.removeItem('orders');
        localStorage.removeItem('orderCounter');
        orderCounter = 1000;
        updateOrdersList();
        showNotification('Barcha buyurtmalar o\'chirildi', 'success');
    }
}

function clearAllCart() {
    if (confirm('Savatni tozalashni tasdiqlaysizmi?')) {
        cart = [];
        updateCart();
        showNotification('Savat tozalandi', 'success');
    }
}

// Yordamchi funksiyalar
function formatPrice(price) {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    
    let icon = 'fa-check-circle';
    let color = '#4CAF50';
    
    if (type === 'warning') {
        icon = 'fa-exclamation-triangle';
        color = '#FFA502';
    } else if (type === 'error') {
        icon = 'fa-times-circle';
        color = '#FF4757';
    } else if (type === 'info') {
        icon = 'fa-info-circle';
        color = '#2D3047';
    }
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 4000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(150%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function closeModal(modal) {
    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function closeAllModals() {
    const modals = [
        cartSidebar,
        orderModal,
        successModal,
        cancelModal,
        telegramModal,
        adminModal
    ];
    
    modals.forEach(modal => {
        if (modal) modal.classList.remove('active');
    });
    
    if (navLinks) navLinks.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function toggleMobileMenu() {
    if (navLinks) navLinks.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function handleNavClick(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        
        if (window.innerWidth <= 768) {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        }
    }
}

function handleScroll() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    }
    
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
