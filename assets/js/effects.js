let navheight = document.getElementById("navtop");

window.onscroll = () => {
    scroller();
};

//click, scroll, mouse, mousedown, keypress, keyup
function scroller() {
    //if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570)
    if (document.documentElement.scrollTop > 570) {
        // alert(document.documentElement.scrollTop);
        navheight.classList.add('whitetop');
    } else {
        navheight.classList.remove('whitetop');
        //alert(document.body.scrollTop);
    }
}

function forContent(event) {

}

function checkContent(event) {
    
}