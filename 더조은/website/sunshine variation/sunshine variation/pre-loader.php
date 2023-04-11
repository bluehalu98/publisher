<script>
  $(window).load(function(){
    setTimeout(function(){
      $('.preloader').fadeOut(500)
      $('body').css({'overflow':'auto'})
    },1000)
  })
</script>
<section class="preloader">
  <div class="spinner">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
  <h6 class="loading-message">Loading</h6>
</section>