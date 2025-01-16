const whatWeOfferCards = document.querySelector(".whatWeOfferCards");
const offerCardsData = [
  {
    Image: "/images/cardImg_1.png",
    frontSideTitle: "Face Treatment",
    frontSideDesc: "Suspendisse mollis faucibus dictum nam consequat leo primis vulputate ipsum egestas dolor",
    behindSideTitle: "Face Treatment",
    behindSideDesc: "Suscipit eros quisque vestibulum fusce porttitor pulvinar consectetur habitant. Nam auctor vivamus sapien vulputate egestas tempor quisque libero penatibus habitant. Quis vehicula sed ridiculus praesent nibh per tortor.",
  },
  {
    Image: "/images/cardImg_4.png",
    frontSideTitle: "Filler & Botox",
    frontSideDesc: "Suspendisse mollis faucibus dictum nam consequat leo primis vulputate ipsum egestas dolor",
    behindSideTitle: "Filler & Botox",
    behindSideDesc: "Suscipit eros quisque vestibulum fusce porttitor pulvinar consectetur habitant. Nam auctor vivamus sapien vulputate egestas tempor quisque libero penatibus habitant. Quis vehicula sed ridiculus praesent nibh per tortor.",
  },
  {
    Image: "/images/cardImg_3.png",
    frontSideTitle: "Plastic Surgery",
    frontSideDesc: "Suspendisse mollis faucibus dictum nam consequat leo primis vulputate ipsum egestas dolor",
    behindSideTitle: "Plastic Surgery",
    behindSideDesc: "Suscipit eros quisque vestibulum fusce porttitor pulvinar consectetur habitant. Nam auctor vivamus sapien vulputate egestas tempor quisque libero penatibus habitant. Quis vehicula sed ridiculus praesent nibh per tortor.",
  },
  {
    Image: "/images/cardImg_4.png",
    frontSideTitle: "Body Treatment",
    frontSideDesc: "Suspendisse mollis faucibus dictum nam consequat leo primis vulputate ipsum egestas dolor",
    behindSideTitle: "Body Treatment",
    behindSideDesc: "Suscipit eros quisque vestibulum fusce porttitor pulvinar consectetur habitant. Nam auctor vivamus sapien vulputate egestas tempor quisque libero penatibus habitant. Quis vehicula sed ridiculus praesent nibh per tortor.",
  },
  {
    Image: "/images/cardImg_5.png",
    frontSideTitle: "Breast Implant",
    frontSideDesc: "Suspendisse mollis faucibus dictum nam consequat leo primis vulputate ipsum egestas dolor",
    behindSideTitle: "Breast Implant",
    behindSideDesc: "Suscipit eros quisque vestibulum fusce porttitor pulvinar consectetur habitant. Nam auctor vivamus sapien vulputate egestas tempor quisque libero penatibus habitant. Quis vehicula sed ridiculus praesent nibh per tortor.",
  },
  {
    Image: "/images/cardImg_6.png",
    frontSideTitle: "Lip Augmentation",
    frontSideDesc: "Suspendisse mollis faucibus dictum nam consequat leo primis vulputate ipsum egestas dolor",
    behindSideTitle: "Lip Augmentation",
    behindSideDesc: "Suscipit eros quisque vestibulum fusce porttitor pulvinar consectetur habitant. Nam auctor vivamus sapien vulputate egestas tempor quisque libero penatibus habitant. Quis vehicula sed ridiculus praesent nibh per tortor.",
  },
];

whatWeOfferCards.innerHTML = offerCardsData
  .map((card, index) => {
    return `
    <div class="whatWeOfferCard" key=${index}>
            <div class="whatWeOfferCard--front">
              <div class="whatWeOfferCard--frontInner">
              <div class="whatWeOfferCardImgContent">
              <img src=${card.Image} alt=${card.frontSideTitle} class="whatWeOfferCardImg" />
              </div>
                <h3 class="sectionIconTitle">${card.frontSideTitle}</h3>
                <p class="sectionDesc">${card.frontSideDesc}</p>
              </div>
              <div class="flip-overlay"></div>
            </div>
            <div class="whatWeOfferCard--behind">
              <div class="whatWeOfferCard--behindInner">
                <h3 class="sectionIconTitle">${card.behindSideTitle}</h3>
                <p class="sectionDesc">
                ${card.behindSideDesc}
                </p>
                <a href="/" class="largeButton">Discover more</a>
              </div>
              <div class="flip-overlay"></div>
            </div>
          </div>
    `;
  })
  .join("");
