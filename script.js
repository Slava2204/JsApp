function spanClickListener (e) {

    let span = e.target;
    var d = document.querySelector('.active');

    if (span.matches('p span')) {
        span.classList.add('active');
        if (d !== span) {
            d.classList.remove('active');

        }

    }
}

document.body.addEventListener('click', spanClickListener);
