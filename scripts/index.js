const burger = document.querySelector('[data-type="burger"]');
const account = document.querySelector('[data-type="account"]');
const accountMenu = document.querySelector('[data-type="account-menu"]');
const nav = document.querySelector('[data-type="navigation"]');

if (burger && nav && account && accountMenu) {
    burger.addEventListener('click', burgerClick);
    account.addEventListener('click', accountClick);
    accountMenu.addEventListener('click', e => e.stopPropagation());
    nav.addEventListener('click', e => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            accountClose();
            burgerClose();
        }
    });
    
    document.addEventListener('click', () => {
        accountClose();
        burgerClose();
    });

    window.addEventListener('resize', () => {
        accountClose();
        burgerClose();
    });
}

function burgerClick(e) {
    e.stopPropagation();
    accountClose();
    burger.classList.contains('open') ? burger.classList.remove('open') : burger.classList.add('open');
    nav.classList.contains('open') ? nav.classList.remove('open') : nav.classList.add('open');
}

function burgerClose() {
    burger.classList.contains('open') && burger.classList.remove('open');
    nav.classList.contains('open') && nav.classList.remove('open');
}

function accountClick(e) {
    e.stopPropagation();
    burgerClose();
    account.classList.contains('open') ? account.classList.remove('open') : account.classList.add('open');
    accountMenu.classList.contains('open') ? accountMenu.classList.remove('open') : accountMenu.classList.add('open');
}

function accountClose() {
    account.classList.contains('open') && account.classList.remove('open');
    accountMenu.classList.contains('open') && accountMenu.classList.remove('open');
}