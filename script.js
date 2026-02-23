document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Baza Danych Produktów (możesz tu łatwo dodawać nowe)
const products = [
    {
        id: 1,
        name: "Transparentne etui na USB",
        price: "7.00 PLN",
        image: "https://uploads.onecompiler.io/44egrsma2/44egpwedy/WhatsApp%20Image%202026-02-23%20at%2022.04.16.jpeg", // Ścieżka do Twojego zdjęcia
        description: "Lekkie, przeźroczyste pudełko. Idealnie mieści standardowy pendrive lub mały logbook zwijany.",
        usage: "Zastosowanie: Skrytki typu 'Digital Dead Drop' (wymiana danych w terenie) lub jako insert chroniący logbook przed przetarciem wewnątrz większych keszy. UWAGA: Pudełko nie jest wodoodporne – zalecane do skrytek ukrytych pod dachem lub wewnątrz szczelnych pojemników zewnętrznych.",
    }
];

    const productGrid = document.getElementById('product-grid');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');

    // 2. Renderowanie Produktów
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        // Obsługa kliknięcia w produkt
        card.addEventListener('click', () => openModal(product));
        productGrid.appendChild(card);
    });

    // 3. Obsługa Modala
    function openModal(product) {
        document.getElementById('modal-img').src = product.image;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-price').textContent = product.price;
        document.getElementById('modal-desc').textContent = product.description;
        document.getElementById('modal-usage').textContent = product.usage;

        // Dynamiczny link mailto z tematem
        const mailSubject = encodeURIComponent(`Zamówienie: ${product.name}`);
        const mailBody = encodeURIComponent(`Dzień dobry,\n\nChciałbym zamówić produkt: ${product.name} (${product.price}).\n\nProszę o informacje dotyczące płatności i wysyłki.\n\nPozdrawiam`);
        document.getElementById('modal-btn').href = `mailto:kontakt@geoprint3d.pl?subject=${mailSubject}&body=${mailBody}`;

        modal.style.display = 'flex';
    }

    // Zamykanie modala
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // 4. Smooth Scrolling dla nawigacji
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});