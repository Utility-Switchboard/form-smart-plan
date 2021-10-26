const form = document.getElementById('form');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const amount = document.getElementById('amount').value.trim().replace(/[^\w\s]/gi, '');
        const first_name = document.getElementById('first_name').value.trim().replace(/[^\w\s]/gi, '');
        const last_name = document.getElementById('last_name').value.trim().replace(/[^\w\s]/gi, '');
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim().replace(/[^\w\s]/gi, '');
        const card_number = document.getElementById('card_number').value.trim().replace(/[^\w\s]/gi, '');
        const card_date = document.getElementById('card_date').value.trim();
        const card_cvv = document.getElementById('card_cvv').value.trim().replace(/[^\w\s]/gi, '');
        const card_state = document.getElementById('card_state').value.trim().replace(/[^\w\s]/gi, '');
        const card_postcode = document.getElementById('card_postcode').value.trim().replace(/[^\w\s]/gi, '');

        const customer = {
            amount,
            first_name,
            last_name,
            email,
            phone,
            card_number,
            card_date,
            card_cvv,
            card_state,
            card_postcode
        }

        console.log(customer)
    });
}