        // display burger menu
        function toggleMenu() {
            document.querySelector("header").classList.toggle("active");
        }


        // shopping cart
        function incrementerPanier() {
        const itemsSpan = document.getElementById('shopping-cart-items');
        let items = parseInt(itemsSpan.textContent);
        items++;
        itemsSpan.textContent = items;

        // stock shopping cart items number
        localStorage.setItem('shoppingCartItems', items);
        }

        const boutonsAjouterPanier = document.querySelectorAll('.add_to_cart_button');

        boutonsAjouterPanier.forEach(bouton => {
        bouton.addEventListener('click', incrementerPanier);
        });

        // check if shopping cart items stocked in localStorage
        window.onload = function() {
        const itemsStocke = localStorage.getItem('shoppingCartItems');
        if (itemsStocke) {
            document.getElementById('shopping-cart-items').textContent = itemsStocke;
        }
        };