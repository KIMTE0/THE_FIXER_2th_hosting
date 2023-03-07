'use strict';

const aside = document.getElementsByTagName(`aside`);

aside[0].addEventListener(`click`, function(e){
    let evnetObj = e.target.closest(`a`);

});