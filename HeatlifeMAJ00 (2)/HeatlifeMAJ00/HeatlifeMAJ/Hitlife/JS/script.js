document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.products-list li');
    const modal = document.getElementById('product-info-modal');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const closeModal = document.getElementById('close-modal');

    products.forEach(product => {
        product.addEventListener('click', () => {
            const name = product.getAttribute('data-name');
            const price = product.getAttribute('data-price');
            const description = product.getAttribute('data-description');

            productName.textContent = name;
            productPrice.textContent = `Prix: ${price}`;
            productDescription.textContent = description;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
