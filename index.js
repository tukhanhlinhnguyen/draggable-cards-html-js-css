var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
        slideShadows: true
    },

});

swiper.on('slideChange', (sw) => {
    console.log(`Message seen only after changing to slide #${swiper.realIndex + 1}`);
    document.getElementById("level").innerHTML = `Level ${swiper.realIndex + 1}`;
    document.getElementById("avatarImg").src = `https://avatars.dicebear.com/api/big-smile/${swiper.realIndex + 1}.svg`;
});
