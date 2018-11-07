class MobileMenu {
    constructor() {
        this.events();
    }

    events() {
        let menuIcon = document.querySelector('.mobile-icon'),
            mobileMenu = document.querySelector('.main-menu'),
            menuLinks = document.querySelectorAll('.main-menu__link');
        
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('mobile-icon--active');
            mobileMenu.classList.toggle('main-menu--active');
        });

        for(let i = 0; i < menuLinks.length; i++) {
            let link = menuLinks[i];
            link.addEventListener('click', () => {
                menuIcon.classList.remove('mobile-icon--active');
                mobileMenu.classList.remove('main-menu--active');
            });
        }
    }
}

export default MobileMenu;