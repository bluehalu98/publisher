$(function(){
  responsive_carousel_vert(".home-visual", false, 5000, 10000)
  $('.home-visual figure').ripples({
    resolution: 512,
    dropRadius: 30,
    perturbance: 0.05,
  });
})