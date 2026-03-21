document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Baza Danych Produktów (możesz tu łatwo dodawać nowe)
const products = [
    {
        id: 1,
        name: "Transparentne etui na USB",
        price: "7.00 PLN",
        image: "fav.jpeg", // Ścieżka do Twojego zdjęcia
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
    function openProposalModal(item) {
    document.getElementById('modal-img').src = item.images[0];
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-price').textContent = item.price;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-usage').textContent = item.usage;

    // jeśli więcej zdjęć → klik zmienia
    let index = 0;
    const img = document.getElementById('modal-img');

    img.onclick = () => {
        if (item.images.length > 1) {
            index = (index + 1) % item.images.length;
            img.src = item.images[index];
        }
    };

    document.getElementById('modal-btn').style.display = "none";

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
// 5. System kodów
function checkCode() {
    const input = document.getElementById('secret-code').value.trim().toUpperCase();
    const result = document.getElementById('code-result');

    const codes = {
        "KROLICZEK26": "📍 51°04'55.02\"N 16°57'34.67\"E",
    };

    if (codes[input]) {
        result.innerHTML = `<p style="color:lightgreen;">${codes[input]}</p>`;
    } else {
        result.innerHTML = `<p style="color:red;">❌ Niepoprawny kod</p>`;
    }
}
// === PROPOZYCJE DO DRUKU ===
const proposals = [
    {
        name: "Kłoda z labiryntem",
        price: "Model inspiracyjny",
        images: [
            "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/20190502_220710_12014.webp"
        ],
        description: "Model przypominający kawałek drewna, który skrywa w środku labirynt. Aby dostać się do środka, trzeba odpowiednio manipulować mechanizmem.",
        usage: "Świetny jako kesz typu puzzle – zmusza znalazcę do interakcji i rozwiązania zagadki zamiast prostego otwarcia."
    },
    {
        name: "Labiryntowy kesz (wariant)",
        price: "Model inspiracyjny",
        images: [
            "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/20230830_064747.webp",
            "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/20231011_170526.webp"
        ],
        description: "Zaawansowany pojemnik z wewnętrznym mechanizmem labiryntowym. Wymaga odpowiedniego ustawienia, aby uzyskać dostęp do logbooka.",
        usage: "Idealny na finał kesza premium lub jako element multi-cache. Można zwiększyć trudność przez ukrycie wskazówek w terenie."
    },
    {
        name: "Front cache (maskowanie)",
        price: "Model inspiracyjny",
        images: [
            "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/cache-front.webp"
        ],
        description: "Element maskujący front kesza, który pozwala ukryć pojemnik w strukturze otoczenia.",
        usage: "Do stosowania w miejskich skrytkach – łatwo wtapia się w otoczenie i utrudnia wykrycie przez mugoli."
    },
    {
        name: "Mini cache dekoracyjny",
        price: "Model inspiracyjny",
        images: [
            "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/featured_preview_87773141_763131484177741_9180990111326666752_n.webp"
        ],
        description: "Mały, estetyczny pojemnik o niestandardowym wyglądzie. Może pełnić funkcję zarówno kesza jak i gadżetu.",
        usage: "Dobry jako szybki kesz do znalezienia lub bonus przy większej skrytce."
    }
];

// renderowanie propozycji
const proposalGrid = document.getElementById('proposal-grid');

proposals.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${item.images[0]}" class="product-img">
        <div class="product-info">
            <h3 class="product-title">${item.name}</h3>
            <p class="product-price">${item.price}</p>
        </div>
    `;

    card.addEventListener('click', () => openProposalModal(item));
    proposalGrid.appendChild(card);
});
