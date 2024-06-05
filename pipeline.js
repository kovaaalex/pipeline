document.getElementById('dealForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const apiKey = 'c0971b58e32aed5317e32f7270345e969e250b08';  
    const title = document.getElementById('title').value;
    const value = document.getElementById('value').value;
    const currency = document.getElementById('currency').value;

    const dealData = {
        title: title,
        value: value,
        currency: currency
    };

    fetch(`https://api.pipedrive.com/v1/deals?api_token=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dealData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('response').innerText = 'Deal created successfully!';
        } else {
            document.getElementById('response').innerText = 'Error creating deal: ' + data.error;
        }
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error: ' + error.message;
    });
});
