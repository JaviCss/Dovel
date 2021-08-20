$("#owl1").owlCarousel({
  autoplay: false,
  autoplayTimeout: 3000000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  items: 1,
  loop: false,
  mouseDrag:true,
  autoHeight: false,
  responsiveClass: true,
  responsive: {
    0: {
      margin: 10,
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      margin: 10,
      items: 1,
      nav: true,
      dots: true,
    },
    1024: {
      margin: 60,
      items: 1,
      nav: true,
      dots: true,
    },
  },
  onTranslated: function (me) {
    $(me.target).find(".owl-item.active").each(function (i, v) {
      let slide  = $(v)[0].children[0].dataset.slide
      $('#home #banner').attr('class', '');
      $('#home #banner').addClass(`slide${slide}`)     
    })
  }
});


$("#owl2").owlCarousel({
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  autoHeight: false,
  responsiveClass: true,
  loop: false,
  mouseDrag:true,
  responsive: {
    0: {
      margin: 10,
      items: 2,
      nav: false,
      dots: true,
    },
    600: {
      margin: 10,
      items: 2,
      nav: true,
      dots: true,
    },
    1024: {
      margin: 10,
      items: 2,
      nav: true,
      dots: true,
    },
  },
});



$("#owl-contacto").owlCarousel({
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  autoHeight: false,
  responsiveClass: true,
  loop: false,
  responsive: {
    0: {
      margin: 10,
      items: 2,
      nav: false,
      dots: true,
    },
    600: {
      margin: 10,
      items: 4,
      nav: true,
      dots: false,
    },
    1024: {
      margin: 10,
      items: 4,
      nav: true,
      dots: false,
    },
  },
});


$("#owl-comunidad").owlCarousel({
  mouseDrag:true,
  touchDrag: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  autoHeight: false,
  responsiveClass: true,
  loop: false,
  responsive: {
    0: {
      margin: 10,
      items: 2,
      nav: false,
      dots: true,
    },
    600: {
      margin: 10,
      items: 4,
      nav: true,
      dots: false,
    },
    1024: {
      margin: 10,
      items: 1,
      nav: true,
      dots: true,
    },
  },
});



/*Form de cv */
if (document.querySelector('#file')) {
  document.querySelector('#file').addEventListener('change', function (e) {
    var boxFile = document.querySelector('.boxFile');
    boxFile.classList.remove('attached');
    boxFile.innerHTML = boxFile.getAttribute("data-text");
    if (this.value != '') {
      var allowedExtensions = /(\.pdf|\.docx)$/i;
      if (allowedExtensions.exec(this.value)) {
        boxFile.innerHTML = e.target.files[0].name;
        console.log(e.target.files[0].name)
        boxFile.classList.add('attached');
      } else {
        this.value = '';
        alert('El archivo que intentas subir no está permitido.\nLos archivos permitidos son pdf o documentos Word');
        boxFile.classList.remove('attached');
      }
    }
  });
}











const item = document.querySelectorAll('#item')
const itemPane = document.querySelectorAll('#item-pane')


for (let i = 1; i < 10; i++) {
  $(`#item${i}`).hover(
    function () {
      $(`#item-pane${i}`).animate({ 'height': '100%' }, 600)
      $(`#item-pane${i}`).css('visibility', 'visible')
    },
    function () {
      $(`#item-pane${i}`).animate({ 'height': '0%' }, 600)
      $(`#item-pane${i}`).animate({ 'visibility': 'collapse' }, 700)
    }
  )

}

const ratings = {
  review1: 4.5,
  review2: 5,
  review3: 5,
};

//total number of stars
const starTotal = 5;

for (const rating in ratings) {
  const starPercentage = (ratings[rating] / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  if (document.querySelector(`.${rating} .stars-inner`)) {
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
  }
  
}