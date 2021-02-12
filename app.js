let innleggfetch = fetch('http://localhost:1337/innleggs', {
    methods: 'GET',
    headers: {
        'Content-type': 'application/json'
    },
}).then(response => response.json()).then(data => {
    console.log(data);
    let h1 = document.createElement('h1');
    h1.classList.add('header');
    
    document.body.appendChild(h1);
    document.getElementsByClassName('mainscript')[0].insertAdjacentElement('beforebegin', h1);
    h1.textContent = innleggfetch.innlegg;
});


