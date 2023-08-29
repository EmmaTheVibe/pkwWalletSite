const hero = document.querySelectorAll(".hero")
const buttons = document.querySelectorAll(".btn")
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
const img1 = document.querySelector("#iphone1")
const img2 = document.querySelector("#iphone2")
const img3 = document.querySelector("#iphone3")
const heading = document.querySelector(".heading")
const head1 = document.querySelector("#head1")
const head2 = document.querySelector("#head2")
const head3 = document.querySelector("#head3")
const receive = document.querySelector(".receive")
const transfer = document.querySelector(".transfer")
const fund = document.querySelector(".fund")
const topButton = document.querySelector(".button")
const download = document.querySelector(".download")
const downloadLink = document.querySelector(".link")
const downloadBox = document.querySelector("#download-box")
const appstore2 = document.querySelector("#appstore2")
const playstore2 = document.querySelector("#playstore2")
const apps2 = document.querySelectorAll(".dld")
const navBar = document.querySelector(".navbar")
const cookiesBox = document.querySelector(".cookieConsentOverlay")
const cookiesDiv = document.querySelector(".cookies")
const closer = document.querySelector(".close")
const accept = document.querySelector(".accept")

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
getCookie = (cName) =>{
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })
    return value;
}
accept.addEventListener("click", () => {
    cookiesBox.classList.add("hide-cookies");
    setTimeout(() => {
        cookiesBox.style.display = "none";
    }, 1100);
    setCookie("cookie", true, 30);
})
closer.addEventListener("click", () => {
    cookiesBox.classList.add("hide-cookies");
    setTimeout(() => {
        cookiesBox.style.display = "none";
    }, 1100);
})
cookieMessage = () => {
    if(!getCookie("cookie")){
        cookiesBox.classList.add("show-cookies")
        setTimeout(() => {
            cookiesBox.style.display = "block";
        }, 1500);
    }
}
window.addEventListener("load", cookieMessage)

$(function () {
    $(document).scroll(function () {
        const $nav = $(".navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

const indicator = document.querySelector(".indicator")
// indicator.classList.add("slide")

function showReceive() {
    transfer.classList.remove("active")
    // img2.classList.remove("active")
    
    receive.classList.add("active")
    // img1.classList.add("active")
}

function showTransfer() {
    receive.classList.remove("active")
    // img1.classList.remove("active")
                    
    transfer.classList.add("active")
    // img2.classList.add("active")
}

// let bannerAnim = true
// if(bannerAnim){
    
// }
const banners = document.querySelectorAll(".banner")
function switchBanner(){
    const subtext = document.querySelectorAll(".subtext")
    const activeBanner = document.querySelector(".banner.showing");
    const activeBannerIndex = Array.from(banners).indexOf(activeBanner);
    const nextBannerIndex = (activeBannerIndex + 1) % banners.length;

    activeBanner.classList.remove("showing");
    subtext[activeBannerIndex].classList.remove("showing");
    activeBanner.classList.add("hide");
    subtext[activeBannerIndex].classList.add("hide");
    

    banners[nextBannerIndex].classList.add("showing");
    subtext[nextBannerIndex].classList.add("showing");
    banners[nextBannerIndex].classList.remove("hide");
    subtext[nextBannerIndex].classList.remove("hide");
    // for(let banner of banners){
    //     if(banner.classList.contains("showing")){
    //         banner.classList.add("slideOut")
    //     }
    // }

}
setInterval(switchBanner, 5000);
// setTimeout(switchBanner, 2500);
 
function switchState(){
    const tabs = document.querySelectorAll(".content")
    function switcher(){
        // const phone = document.querySelectorAll(".iphone")
        const activeTab = document.querySelector(".content.active");
        const activeTabIndex = Array.from(tabs).indexOf(activeTab);
        const nextTabIndex = (activeTabIndex + 1) % tabs.length;

        activeTab.classList.remove("active");
        // phone[activeTabIndex].classList.remove("active");

        indicator.style.top = `calc(calc(110%/2)*${nextTabIndex})`
        tabs[nextTabIndex].classList.add("active");
        // phone[nextTabIndex].classList.add("active");
        // setTimeout(() => {
        //     phone[nextTabIndex].classList.add("active");
        // }, 100)
    }
    const switchAnim = setInterval(switcher, 4000);
    tabs.forEach(active => {
        active.addEventListener("click", () => {
            document.querySelector('.active')?.classList.remove('active')
            active.classList.add('active') 
            const activeTab2 = document.querySelector(".content.active");
            const activeTabIndex2 = Array.from(tabs).indexOf(activeTab2);
            if(receive.classList.contains("active")){
                showReceive()
                clearInterval(switchAnim)
                indicator.style.top = `calc(calc(110%/2)*${activeTabIndex2})`
            } 
            if(transfer.classList.contains("active")){
                showTransfer()
                clearInterval(switchAnim)
                indicator.style.top = `calc(calc(110%/2)*${activeTabIndex2})`
            } 
        })
        
    })
}
switchState()

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hero');
            navBar.classList.remove('bkg');
            setTimeout(() => {
                entry.target.classList.add('show-button');
            }, 1600)
            // setTimeout(() => {
            //     bannerAnim = true;
            //     console.log("TRUE")
            // }, 3000)
        }
    })
})
const hiddenElements = document.querySelectorAll('.hero');
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-ft');
            navBar.classList.add('bkg');
        } else {
            entry.target.classList.remove('show-ft');
        }
    })
})
const hiddenElements2 = document.querySelectorAll('.ft-cont');
hiddenElements2.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-bvn');
            navBar.classList.add('bkg');
        } else{
            entry.target.classList.remove('show-bvn');
        }
    })
})
const hiddenElements3 = document.querySelectorAll('.bvnbox');
hiddenElements3.forEach((el) => observer3.observe(el))

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-password');
            navBar.classList.add('bkg');
        } else{
            entry.target.classList.remove('show-password');
        }
    })
})
const hiddenElements4 = document.querySelectorAll('.passwordbox');
hiddenElements4.forEach((el) => observer4.observe(el))

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-pin');
            navBar.classList.add('bkg');
        } else{
            entry.target.classList.remove('show-pin');
        }
    })
})
const hiddenElements5 = document.querySelectorAll('.pinbox');
hiddenElements5.forEach((el) => observer5.observe(el))

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navBar.classList.add('bkg');
        }
    })
})
const hiddenElements6 = document.querySelectorAll('.ad-box');
hiddenElements6.forEach((el) => observer6.observe(el))

function isIOSorAndroid() {
    const userAgent = navigator.userAgent.toLowerCase();
    downloadLink.addEventListener("click", () =>{
        if (/android/.test(userAgent)) {
            downloadLink.href = "https://play.google.com/store/apps/details?id=com.parkway.yurwallet"
            return 'Android';
        } else if (/iphone|ipad|ipod/.test(userAgent)) {
            downloadLink.href = "https://apps.apple.com/app/parkway-wallet/id6451072719/"
            return 'iOS';
        } else {
            downloadLink.href = "#download-box"
            return 'Unknown';
        }
    })
}
isIOSorAndroid();
