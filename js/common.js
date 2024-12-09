////////////////////// ドロワーメニュー /////////////////////////

const JSbutton = document.getElementById("drawerButton");
const JSmenu = document.getElementById("menu");

function drawermenu() {
    JSbutton.classList.toggle("close");
    // 変数JSボタンに対してクラス属性.closeをつけ外しする

    JSmenu.classList.toggle("open");
    // 同様に
}
// 今回関数の名前は指定があった。「ボタンが押されたらクラスのつけ外しを行う」という処理をまとめておきたい。

JSbutton.addEventListener("click", drawermenu);
// 変数JSbuttonがクリックされた時に、イベントリスナーが動いて、関数drawermenuが実行される。

////////////////////// スライダー /////////////////////////

const swiper = new Swiper(".swiper", {
    loop: true,

    // autoplay: true,
    autoplay: {
        // 自動再生
        delay: 3000,
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

/////////////////////TOPボタン///////////////////////

function siteScroll() {
    let scrollY = window.scrollY;
    const topButton = document.querySelector(".topButton");

    if (scrollY > 100) {
        console.log("ページを200pxスクロールしました！");
        // window.removeEventListener("scroll", siteScroll);

        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }
}

window.addEventListener("scroll", siteScroll);
