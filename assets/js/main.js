var showInfoLara = document.querySelector('#show-info-lara');
var infoLara = document.querySelector('#info-lara');
var showInfoSabina = document.querySelector('#show-info-sabina');
var infoSabina = document.querySelector('#info-sabina');
var clientHeight = window.innerHeight;
var clientWidth = window.innerWidth;
var fixedNavbar = document.querySelector('.wrapper-navbar-logo-holder-sm');
var sectionWelcome = document.querySelector('#section-welcome');
var downButton = document.querySelector('#down-button');
var body = document.querySelector('body');
var html = document.querySelector('html');
var changeOverflow = document.querySelectorAll('.change-overflow');
var sectionContact = document.querySelector('#section-contact');
var fakeNavbar = document.querySelector('.fake-navbar');
var presentation = document.querySelector('#presentation');
var sectionPresentation = document.querySelector('#section-presentation');
var sectionProfession = document.querySelector('#section-profession');
var sectionLinks = document.querySelector('#section-links');
var addPadding = document.querySelectorAll('.add-padding');
var allSections = document.querySelectorAll('.add-section-padding');

window.addEventListener('resize', function() {
    fixedNavbar.style.width = fakeNavbar.offsetWidth + 'px';
});

console.log(clientWidth,  'sad');

if (clientWidth > 768) {
    var url = window.location.href;

    // solution to keep changed style on refresh
    if (url !== 'http://127.0.0.1:8080/') {
        console.log(clientHeight, 'chsa');
        sectionWelcome.style.display = 'none';
        body.style.overflow = 'scroll';
        body.style.height = '100%';
        html.style.overflow = 'hidden';
        html.style.height = '100%';
        fakeNavbar.style.height =  fixedNavbar.offsetHeight + 'px';
        fixedNavbar.style.width = fakeNavbar.offsetWidth + 'px';
        fakeNavbar.style.opacity = '0'; 
        fixedNavbar.style.position = 'fixed';
        fixedNavbar.style.top = '0';
        fixedNavbar.style.left = '0';
    }
    
    var eventLedger = [];
    
    body.addEventListener('scroll', function(){
        eventLedger.push('scroll');
        console.log(eventLedger[eventLedger.length-2]);
        if (eventLedger[eventLedger.length-2] !== 'click') {
            allSectionsArr.forEach(function(element) {
                element.style.paddingTop = '5px';
            });
        }
    });
    
    var navbarLinks = [];
    var allSectionsArr = [];
    
    allSections.forEach(function(element) {
        allSectionsArr.push(element);
    })
    
    addPadding.forEach(function(element) {
        navbarLinks.push(element);
    });
    
    
    
    navbarLinks.forEach(function(element){
        element.addEventListener('click', function(){
            eventLedger.push('click');
            allSectionsArr.forEach(function(element) {
                element.style.paddingTop = fixedNavbar.offsetHeight + 10 + 'px';
                if (element == sectionPresentation) {
                    element.style.height = '610px';
                }

                if (element == sectionProfession) {
                    element.style.height = '435px';
                }

                if (element == sectionLinks) {
                    element.style.height = '375px';
                }

            });
        });  
    });
    
    var affectedElement = [];
    console.log(affectedElement);
    
    changeOverflow.forEach(function(element) {
        affectedElement.push(element);
    });
    // affectedElement.push(downButton);
    
    affectedElement.forEach(function(element) {
        element.addEventListener('click', function() {
            sectionWelcome.style.display = 'none';
            body.style.overflow = 'scroll';
            body.style.height = '100%';
            html.style.overflow = 'hidden';
            html.style.height = '100%';
            fakeNavbar.style.height =  fixedNavbar.offsetHeight + 'px';
            fixedNavbar.style.width = fakeNavbar.offsetWidth + 'px';
            fakeNavbar.style.opacity = '0'; 
            fixedNavbar.style.position = 'fixed';
            fixedNavbar.style.top = '0';
            fixedNavbar.style.left = '0';
        });
    });
    
    // var fixedNavbarPosition = fixedNavbar.getBoundingClientRect().top;
    
    
    /* window.addEventListener('scroll', function () {
        var x = sectionWelcome.scrollTop;
    
        console.log(x);
    }); */
    
    console.log(sectionContact.offsetHeight, 'oh');
    showInfoLara.addEventListener('click', function() {
        
        if (!showInfoLara.classList.contains('open')) {
            infoLara.style.display = 'block';
            showInfoLara.innerHTML = '<i class="fas fa-minus-circle heading-14 ml-5 animated rotateIn"></i>';
            sectionContact.style.height = sectionContact.offsetHeight + 173 + 'px';
            console.log(sectionContact.offsetHeight, 'heh');
            infoLara.classList.remove('fadeOut');
            infoLara.classList.add('animated', 'fadeIn');
            showInfoLara.classList.add('open');
        } else  {
            showInfoLara.innerHTML = '<i class="fas fa-plus-circle heading-14 ml-5 animated rotateIn"></i>';
            sectionContact.style.height = sectionContact.offsetHeight - 173 + 'px';
            infoLara.classList.add('animated', 'fadeOut');
            showInfoLara.classList.remove('open');
            infoLara.classList.remove('fadeIn');
            infoLara.style.display = 'none';
        }
    });
    
    showInfoSabina.addEventListener('click', function() {
        
        if (!showInfoSabina.classList.contains('open')) {
            infoSabina.style.display = 'block';
            console.log('click sab');
            showInfoSabina.innerHTML = '<i class="fas fa-minus-circle heading-14 ml-5 animated rotateIn"></i>';
            var sectionContact = document.querySelector('#section-contact');
            sectionContact.style.height = sectionContact.offsetHeight + 173 + 'px';
            infoSabina.classList.remove('fadeOut');
            infoSabina.classList.add('animated', 'fadeIn');
            showInfoSabina.classList.add('open');
        } else  {
            showInfoSabina.innerHTML = '<i class="fas fa-plus-circle heading-14 ml-5 animated rotateIn"></i>';
            var sectionContact = document.querySelector('#section-contact');
            sectionContact.style.height = sectionContact.offsetHeight - 173 + 'px';
            infoSabina.classList.add('animated', 'fadeOut');
            showInfoSabina.classList.remove('open');
            infoSabina.classList.remove('fadeIn');
            infoSabina.style.display = 'none';
        }
    });
}

if (clientWidth <= 768) {
    var hamburger = document.querySelector('#mobile-hamburger');
    var mobileSection = document.querySelector('.mobile-section');
    var welcomeLogo = document.querySelector('#welcome-logo');
    var mobileContactLink = document.querySelector('#fkn-contact');
    var mobilePresentationLink = document.querySelector('#fkn-presentation');
    var mobileProfessionLink = document.querySelector('#fkn-profession');
    var mobileLinksLink = document.querySelector('#fkn-links');
    var mobileGalleryLink = document.querySelector('#fkn-gallery');
    var counter = 0;

    showInfoLara.addEventListener('click', function() {
        
        if (!showInfoLara.classList.contains('open')) {
            infoLara.style.display = 'block';
            showInfoLara.innerHTML = '<i class="fas fa-minus-circle heading-14 ml-5 animated rotateIn"></i>';
            infoLara.classList.remove('fadeOut');
            infoLara.classList.add('animated', 'fadeIn');
            showInfoLara.classList.add('open');
        } else  {
            showInfoLara.innerHTML = '<i class="fas fa-plus-circle heading-14 ml-5 animated rotateIn"></i>';
            infoLara.classList.add('animated', 'fadeOut');
            showInfoLara.classList.remove('open');
            infoLara.classList.remove('fadeIn');
            infoLara.style.display = 'none';
        }
    });

    showInfoSabina.addEventListener('click', function() {
        
        if (!showInfoSabina.classList.contains('open')) {
            infoSabina.style.display = 'block';
            showInfoSabina.innerHTML = '<i class="fas fa-minus-circle heading-14 ml-5 animated rotateIn"></i>';

            infoSabina.classList.remove('fadeOut');
            infoSabina.classList.add('animated', 'fadeIn');
            showInfoSabina.classList.add('open');
        } else  {
            showInfoSabina.innerHTML = '<i class="fas fa-plus-circle heading-14 ml-5 animated rotateIn"></i>';

            infoSabina.classList.add('animated', 'fadeOut');
            showInfoSabina.classList.remove('open');
            infoSabina.classList.remove('fadeIn');
            infoSabina.style.display = 'none';
        }
    });

    var mobileLinks = [];
    mobileLinks.push(mobileContactLink,
    mobilePresentationLink, 
    mobileProfessionLink,
    mobileLinksLink,
    mobileGalleryLink);

    mobileLinks.forEach(function(element) {
        element.addEventListener('click', function() {
            body.style.overflowY = 'scroll';
            mobileSection.style.display = 'none';
            welcomeLogo.style.display = 'block';
            downButton.style.display = 'block';
        });
    });

    hamburger.addEventListener('click', function() {
        counter++;
        if (counter%2 === 0) {
            mobileSection.style.display = 'none';
            body.style.overflowY = 'scroll';
            welcomeLogo.style.display = 'block';
            downButton.style.display = 'block';
        } else {
            mobileSection.style.display = 'block';
            body.style.overflowY = 'hidden';
            welcomeLogo.style.display = 'none';
            downButton.style.display = 'none';
        }
    });

    mobileContactLink.addEventListener('click', function() {
        console.log('kva');
    });
}




