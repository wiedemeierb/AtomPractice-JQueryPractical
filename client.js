console.log( 'js' );

$( document ).ready( readyNow );

function readyNow() {
console.log( 'JQ' );
$( '#sayHelloButton' ).on( 'click', sayHello );
$( 'h2' ).mouseenter( h2MouseEnter );
$( 'h2' ).mouseleave( h2MouseLeave );
$( '.clicker' ).on('click', changeTextColor );
} // end readyNow

function changeTextColor(){
  $( this ).css( 'color', 'blue' );
}

function h2MouseEnter(){
  console.log( 'in h2MouseEnter');
  $( this ).css( 'background-color', 'red' );
} //end of h2MouseEnter

function h2MouseLeave() {
  $( this ).css( 'background-color', 'white' );
} // end of h2MouseLeave

function sayHello(){
  // target the input element by ID
  // get the value of the text input
  let outputText = 'Hello,' + $( '#nameInput' ).val();
  console.log( outputText );
  // display out text on DOM
  // target the output element
  let outputEl = $( '#helloOut');
  // empty it
  outputEl.empty();
  // append the output text in it
  outputEl.append( outputText );
  // empty nameInput
  $( '#nameInput' ).val( '' );
} // end sayHello
