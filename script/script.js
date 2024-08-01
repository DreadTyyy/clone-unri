const hamburger = document.getElementById('hamburger');
const hamburgerSide = document.getElementById('hamburger-side');
const navigationBar = document.getElementById('navigation-bar');
const buttonSubMenu = document.querySelectorAll('._button-sub-menu');
const buttonSubSubMenu = document.querySelectorAll('._button-sub-sub-menu');
const overlay = document.querySelector('._overlay');
const counters = document.querySelectorAll('._counter');
const scrollTop = document.getElementById('scroll-top');
const navMenuItems = document.querySelectorAll('._nav-menu');
const hoverLine = document.getElementById('hover-line'); 

hamburger.addEventListener('click', () => {
    navigationBar.classList.toggle('navigation-open');
    overlay.classList.toggle('open');
});

hamburgerSide.addEventListener('click', () => {
    navigationBar.classList.remove('navigation-open');
    overlay.classList.remove('open');
});

buttonSubMenu.forEach(button => {
    button.addEventListener('click', () => {
        const dataCollapse = button.getAttribute('data-collapse')
        console.log(dataCollapse);
        const subMenu = document.querySelector(`[data-ref-collapse="${dataCollapse}"]`)
        subMenu.classList.add('sub-menu-open');

        const backSide = subMenu.querySelector('._back-side');
        backSide.addEventListener('click', () => {
            console.log("pencet 1")
            subMenu.classList.remove('sub-menu-open');
        })
    })
});

buttonSubSubMenu.forEach(button => {
    button.addEventListener('click', () => {
        const dataCollapse = button.getAttribute('data-collapse')
        const subSubMenu = document.querySelector(`[data-ref-collapse="${dataCollapse}"]`)
        subSubMenu.classList.add('sub-sub-menu-open');
        console.log(subSubMenu)
        
        const backSide = subSubMenu.querySelector('._back-side-sub-menu');
        console.log(backSide)
        backSide.addEventListener('click', () => {
            subSubMenu.classList.remove('sub-sub-menu-open');
        })
    })
});

// Animasi Count
const speed = 200;

const updateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => updateCount(counter), 10);
    } else {
        counter.innerText = target;
    }
};

const handleScroll = () => {
    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !counter.classList.contains('counted')) {
            updateCount(counter);
        }
    });

    if(scrollY > 180) {
        scrollTop.style.opacity = '100'
    } else {
        scrollTop.style.opacity = '0'
    }
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

// Initial check in case elements are already in view
handleScroll();



window.addEventListener('DOMContentLoaded', () => {
    // Animation on Navigation Bar
    const setPlaceHoverLine = () => {
        const activeMenu = document.querySelector('._active');
        const { left, width } = activeMenu.getBoundingClientRect();
        hoverLine.style.width = `${width}px`;
        hoverLine.style.left = `${left - 48}px`;
    }
    
    navMenuItems.forEach((navMenu) => {
        navMenu.addEventListener('mouseenter', () => {
            const { left, width } = navMenu.getBoundingClientRect();
            hoverLine.style.width = `${width}px`;
            hoverLine.style.left = `${left - 48}px`;
        })

        navMenu.addEventListener('mouseleave', () => {
            const activeMenu = document.querySelector('._active');
            const { left, width } = activeMenu.getBoundingClientRect();
            hoverLine.style.width = `${width}px`;
            hoverLine.style.left = `${left - 48}px`;
        })
    })
    
    setPlaceHoverLine();
})



