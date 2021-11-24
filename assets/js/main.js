document.querySelectorAll( ".level" ).forEach( (el,idx) => {
    el.style.animationDelay = ( idx/8 + 0.1 ) + "s";
})


document.querySelectorAll( "event" ).forEach( ( el, idx ) => {
    let event = document.createElement( "div" );
    event.className = "event";
    event.innerHTML = `
    <div class = "date">
        <h1 class = "day">${el.getAttribute("day")}</h1>
        <h1 class = "month">${el.getAttribute("month")}</h1>
    </div>
    <div class = "content">
        <h2 class = "title">${el.getAttribute("title")}</h2>
        <p class = "short-description">${el.getAttribute("description")}</p>
        <div class = "other-details">
            <div class = "time">
                <i class="fa fa-clock-o"></i>
                <span>${el.getAttribute("time")}</span>
            </div>
        </div>
    </div>
    `
    el.parentElement.appendChild( event );
});