fetch('http://ip-api.com/json/')
    .then(Response => Response.json())
    .then(data => {
        console.log('country:', data.country);
        console.log('city:', data.city);
    })
    .catch(error => {
        console.error('Error fetching IP info:', error);
    });