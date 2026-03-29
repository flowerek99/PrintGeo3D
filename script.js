document.addEventListener('DOMContentLoaded', () => {
    
    // === PRODUKTY ===
    const products = [
        {
            id: 1,
            name: "Transparentne etui na USB",
            price: "5.00 PLN",
            image: "fav.jpeg",
            description: "Lekkie pudełko na pendrive lub logbook.",
            usage: "Digital Dead Drop lub ochrona logbooka.",
        }
    ];

    const productGrid = document.getElementById('product-grid');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            document.getElementById('modal-img').src = product.image;
            document.getElementById('modal-title').textContent = product.name;
            document.getElementById('modal-price').textContent = product.price;
            document.getElementById('modal-desc').textContent = product.description;
            document.getElementById('modal-usage').textContent = product.usage;

            modal.style.display = 'flex';
        });

        productGrid.appendChild(card);
    });

    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // === PROPOZYCJE DO DRUKU ===
    const proposals = [
        {
            name: "Kłoda z labiryntem",
            image: "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/20190502_220710_12014.webp",
            desc: "Kłoda z ukrytym labiryntem.",
            usage: "Puzzle cache – trzeba rozwiązać labirynt."
        },
        {
            name: "Labiryntowy kesz",
            image: "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/cache-front.webp",
            desc: "Zaawansowany kesz, wymagający rozwiązania labiryntu.",
            usage: "Idealny na finał"
        },
        {
            name: "Kesz - śrubka",
            image: "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/featured_preview_87773141_763131484177741_9180990111326666752_n.webp",
            desc: "Kesz na gwint, przypominający śróbkę",
            usage: "Idealny do włożenia w dziurę w słupie."
        },
        {
            name: "Kesz nakładka na słup",
            image: "https://raw.githubusercontent.com/flowerek99/PrintGeo3D/main/20230830_064747.webp",
            desc: "Kesz do nałożenia na słup w każdym miejscu.",
            usage: "Możliwość ukrycia wszędzie, wystarczy znaleźć płot."
        }
    ];

    const proposalGrid = document.getElementById('proposal-grid');

    if (proposalGrid) {
        proposals.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = `
                <img src="${item.image}" class="product-img">
                <div class="product-info">
                    <h3>${item.name}</h3>

                    <div class="proposal-extra">
                        <p>${item.desc}</p>
                        <p style="color:#9ca3af;">${item.usage}</p>
                    </div>
                </div>
            `;

            // klik = rozwijanie
            card.addEventListener('click', () => {
                card.classList.toggle('active');
            });

            proposalGrid.appendChild(card);
        });
    }

});

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
