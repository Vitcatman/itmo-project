// Данные карточек
const teamData = [
   {
      img: './images/team/man_bobtcov.png',
      name: 'Бобцов',
      sName: 'Алексей Алексеевич',
      info: 'Директор, профессор, ДТН'
   },
   {
      img: './images/team/man_buhanovsky.png',
      name: 'Буханоский',
      sName: 'Александр Валерьевич',
      info: 'Директор, профессор, ДТН'
   },
   {
      img: './images/team/man_myromcev.png',
      name: 'Муромцев',
      sName: 'Дмитрий Ильич',
      info: 'Руководитель, доцент, КТН'
   },
   {
      img: './images/team/man_matveev.png',
      name: 'Матвеев',
      sName: 'Юрий Николаевич',
      info: 'Руководитель, профессор, ДТН'
   },
   {
      img: './images/team/man_shalyto.png',
      name: 'Шалыто',
      sName: 'Анатолий Абрамович',
      info: 'Профессор, ДТН'
   },
   {
      img: './images/team/man_kolybin.png',
      name: 'Колюбин',
      sName: 'Сергей Алексеевич',
      info: 'Начальник, профессор, ДТН'
   },
   {
      img: './images/team/man_pyrkin.png',
      name: 'Пыркин',
      sName: 'Антон Александрович',
      info: 'Начальник, профессор, ДТН'
   },
]
const cardsContainer = document.querySelector('.swiper-wrapper')
const cardsTemplate = document.querySelector('#cards').content;
const createCard = (card) => {
   const cardsElement = cardsTemplate.querySelector('.team__slide').cloneNode(true);
   const cardImage = cardsElement.querySelector('.team__card-img');
   const cardName = cardsElement.querySelector('.team__card-name');
   const cardSName = cardsElement.querySelector('.sname')
   const cardInfo = cardsElement.querySelector('.team__card-info');
   cardImage.alt = card.name;
   cardImage.src = card.img;
   cardName.textContent = card.name;
   cardInfo.textContent = card.info;
   cardSName.textContent = card.sName;
   return cardsElement;
}

teamData.forEach(card => {
   cardsContainer.append(createCard(card))
})




new Swiper('.team__swiper',{
   navigation: {
      nextEl: '.team__swiper-but-next',
      prevEl: '.team__swiper-but-prev',
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   centerInsufficientSlides: true,
   slidesPerView: 4,
   spaceBetween: 30,
   slidesPerView: 'auto',

   speed: 1000,
   breakpoints: {
      
      320: {
         slidesPerView: 2.22,
         spaceBetween: 8,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },

      390: {
         slidesPerView: 2.32,
         spaceBetween: 8,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },

      485: {
         slidesPerView: 3.32,
         spaceBetween: 8,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },

      637: {
         slidesPerView: 4.32,
         spaceBetween: 8,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },

      767: {
         slidesPerView: 3.32,
         spaceBetween: 30,
         slidesOffsetBefore: 39,
         slidesOffsetAfter: 39
      },

      825: {
         slidesPerView: 3,
         spaceBetween: 30,
         slidesOffsetBefore: 0,
         slidesOffsetAfter: 0
      },

      1210: {
         slidesPerView: 3,
         spaceBetween: 30
      },
      
      1350: {
         slidesPerView: 4,
         spaceBetween: 20
      },
   }
});






