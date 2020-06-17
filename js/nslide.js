 $('.slider') .each(functi on(){
    var $this =$(this),
   // II For every slider
   // II Get the current slider
   // 2
   // ®
   // ©
    //~
   // ,
    //(j)
   // ®
   // @{
   // @{
   // @{
   // @
    var $group =$this.find (' .slide-group '),
    var $slides = $this.find('.slide'),
   // II Get the slide-group (container)
  //  II jQuery object to hold all slides
  //  II Create array to hold nav buttons
   // II Index number of current slide
    var buttonArray = [],
    var currentlndex = 0,
    var timeout; 
   // II Used to store the timer
   // II move() - The function to move the slides goes here (see next page)
    function advance() {
    clearTimeout(timeout) ;
   // II Sets a timer between slides
   // II Clear timer stored in timeout
   // II Start timer to run an anonymous function every 4 seconds
      timeout= setTimeout(functi on (){
    if (currentlndex < ($slides.length -
    move(currentlndex + l);
    else {
    move(O);
    }
    }, 4000);
   // II
   // 1) ) { II If not the last slide
    //II Move to next slide
   // II Otherwise
   // II Move to the first slide
  //  II Milliseconds timer will wait
    $.each($slides, funct i on(index){
    //II Create a button element for the button
    var $button= $( '<button type="button" class="sl i de-btn">&bul l ;<lbutton>');
    if (index === currentIndex)// { II If index is the current item
    $button .addClass( 'active') ; //II Add the active class
    }
    $button.on('click ' , functi on(){
    move(index);
    } ) . appendTo (' . sl ide-buttons');
    buttonArray .push($button);
    //II Create event handler for the button
    //II It calls the move() function
    //II Add to the buttons holder
   // II Add it to the button array
    } ) ;
    advance();
    }) ;