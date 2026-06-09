
// SCARPA – jednoduché interakcie
$(function () {
  const $nav = $('.navbar-dark');

  function onScroll() {
    $nav.toggleClass('scrolled', $(window).scrollTop() > 40);
  }

  onScroll();
  $(window).on('scroll', onScroll);

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass('visible');
      }
    });
  }, { threshold: 0.12 });

  $('.objavi-sa').each(function () {
    observer.observe(this);
  });

  $('.otvor-fotku').on('click', function () {
    $('#previewTitle').text($(this).data('title'));
    $('#previewImage').attr('src', $(this).data('src'));
  });

  $('#contactForm').on('submit', function (e) {
    const form = this;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      $(form).addClass('was-validated');
      return;
    }

    e.preventDefault();
    const toastEl = document.getElementById('sentToast');
    if (toastEl && window.bootstrap) {
      bootstrap.Toast.getOrCreateInstance(toastEl).show();
    }
    form.reset();
    $(form).removeClass('was-validated');
  });
});
