function displacmentWave(el,filter,displacmentMap,sec,speed){
  var xlink = "http://www.w3.org/1999/xlink";
  var imgUrl = displacmentMap;
  var feImage = document.querySelector(filter+' feImage');
  var el = document.querySelector(el);
  var vw
  var wh
  var imgw
  var imgh
  var fesize
  var sec = sec
  var timeline = new TimelineMax({ repeat: 0, repeatDelay: 0 });

  function displacmentResize() {
    vw = window.innerWidth
    vh = window.innerHeihgt
    imgw = el.width
    imgh = el.height
    fesize = (vw >= vh) ? imgw  : imgh 
    feImage.setAttribute('width', imgw)
    feImage.setAttribute('height', imgh)
  }//toBase64

  displacmentResize()

  window.addEventListener('load', function () {
    displacmentResize()
    feImage.setAttributeNS(xlink, "xlink:href", imgUrl);
  })

  window.addEventListener('resize', function () {
    displacmentResize()
  })

  function fnWave(){
    TweenMax.to(filter+" feDisplacementMap", 0, { 
      attr: {  scale: 100, }},0,)
    TweenMax.to("feImage", 0, {
      attr: {
        width: imgw,
        height:imgh,
        x: 0,
        y: 0, 
      }
    },0);

    TweenMax.to(filter+" feDisplacementMap", sec, { 
      attr: {  scale: 0, }}, 0,)
    TweenMax.to(filter+" feImage", sec, {
      attr: {
        width: fesize*5,
        height: fesize*5,
        x: (imgw - fesize*5) * 0.5,
        y: (imgh - fesize*5) * 0.5,
      }
    },0);
    
  }//fnWave
    
  fnWave()  
  setInterval(function(){
    fnWave()
  },sec*1000)  
}

