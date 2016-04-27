(function(){
  var tl1 = new TimelineMax();
  tl1.from('#one_1', 4, { x: -1000, opacity: 0})
  .from('#esveegee', 7, { opacity: 0, ease: Power2.easeIn}, 'one_1-=5')
  .from('#two_2', 4, { x: 1000, opacity: 0}, 'one_1-=4');
}());
