$(function () {
  responsive_carousel_vert(".home-visual", false, 3000, 7000)
  $(function(){ 
    $('.home-visual figure').ripples({ /* 백그라운드에만적용됨 */
      resolution: 512,
      dropRadius: 50,
      perturbance: 0.01,
    });
  })
})