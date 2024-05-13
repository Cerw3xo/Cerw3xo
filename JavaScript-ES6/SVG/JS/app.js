'use strict';
// grab elements 
var progress = document.querySelector('.progress'),
    textarea = document.querySelector('textarea'),
    counter = document.querySelector('.counter')


var tweetLength = 20,
    warningZone = Math.floor ( tweetLength * (2/4) ),
    dangerZone = Math.floor ( tweetLength * (3/4) );

 // Set dasharay offset
var pathLength = progress.getAttribute('r') * 2 * Math.PI;

progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';

// on input 
textarea.addEventListener('input', function(event) {
    updateCounter(textarea, counter)
    updateColors(textarea, progress)

}) 



function updateCounter(textarea, counter) {
  var len = textarea.value.length,
      per = len / tweetLength;

  //handle progress
  if (len <= tweetLength) {
    var newOffset = pathLength - pathLength * per + "px";
    progress.style.strokeDashoffset = newOffset;

    if (len >= tweetLength) {
      counter.classList.add("danger");
    } else {
      counter.classList.remove("danger");
    
    }
  }
}
   
function updateColors( textarea, progress ) {
    var len = textarea.value.length;
    counter.textContent = tweetLength - len


          // handle colors 
          if (progress.classList.contains('warm')) {
            if (len <= warningZone ) {
                progress.classList.remove('warm')
            }
        } else {
            if (len >= warningZone) {
                progress.classList.add('warm')
            }
        }

        if (progress.classList.contains('danger')) {
            if ( len <= dangerZone) {
                progress.classList.remove('danger')
            }
        } else {
            if ( len >= dangerZone ) {
                progress.classList.add('danger')
            }
        }

        if (progress.classList.contains('tragedy')) {
            if ( len == tweetLength ) {
                progress.classList.remove('tragedy') 
            }
        } else {
            if ( len == tweetLength ) {
                progress.classList.add('tragedy')
            }
        }
}

      
        // progress.classList.toggle('warm', len >= warningZone && len < dangerZone)
        // progress.classList.toggle('danger', len >= dangerZone)
        // progress.classList.toggle('tragedy', len == tweetLength)
    
    //handle counter
   
    // counter.textContent = tweetLength - len
    // counter.classList.toggle('danger', len >= tweetLength)
