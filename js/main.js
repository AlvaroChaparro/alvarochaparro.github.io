jQuery(document).ready(function ($) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1000, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  // var doughnutData = [{
  //   value: 70,
  //   color: "#1abc9c"
  // },
  // {
  //   value: 30,
  //   color: "#ecf0f1"
  // }
  // ];
  // var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // // Bootstrap Chart
  // var doughnutData = [{
  //   value: 90,
  //   color: "#1abc9c"
  // },
  // {
  //   value: 10,
  //   color: "#ecf0f1"
  // }
  // ];
  // var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // // WordPress Chart
  // var doughnutData = [{
  //   value: 65,
  //   color: "#1abc9c"
  // },
  // {
  //   value: 35,
  //   color: "#ecf0f1"
  // }
  // ];
  // var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

  // // HTML Chart
  // var doughnutData = [{
  //   value: 80,
  //   color: "#1abc9c"
  // },
  // {
  //   value: 20,
  //   color: "#ecf0f1"
  // }
  // ];
  // var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // // Photoshop Chart
  // var doughnutData = [{
  //   value: 70,
  //   color: "#1abc9c"
  // },
  // {
  //   value: 30,
  //   color: "#ecf0f1"
  // }
  // ];
  // var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // // Illustrator Chart
  // var doughnutData = [{
  //   value: 50,
  //   color: "#1abc9c"
  // },
  // {
  //   value: 50,
  //   color: "#ecf0f1"
  // }
  // ];
  // var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);


  // $('#contact-form').on('submit', function (event) {
  //   sleep(500);
  //   if( $('.validate').is(':empty') ) {
  //     alert('Oops... ');
  //   }
  // });

  $('#contact-form').on('submit', function (event) {
    setTimeout(500);
    if( $('.validate').is(':empty') ) {
      event.preventDefault(); // prevent reload

      $('.form-send').hide();
      $('.loading').show();
      $('.sent-message').hide();
      $('.error-message').hide();

      var formData = new FormData(this);
      formData.append('service_id', 'outlook');
      formData.append('template_id', 'contact_form_01');
      formData.append('user_id', 'user_iOwrkll3cdRPJ6HBO4Vwh');

      $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
      }).done(function () {
        $('.loading').hide();
        $('.sent-message').show();
        // alert('Your mail is sent!');
        // $('.form-send').show();
      }).fail(function (error) {
        $('.loading').hide();
        $('.error-message').show();
        alert('Oops... ' + JSON.stringify(error));
      });
    }
  });

});