document.addEventListener("DOMContentLoaded", () => {
    dragElement(document.getElementById("movingalien"));
});

function dragElement(elmnt) {
    let header = document.getElementById("movingalienheader") || elmnt;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    header.addEventListener("mousedown", function (e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener("mouseup", closeDragElement);
        document.addEventListener("mousemove", elementDrag);
    });

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        console.log("New Position -> Top:", elmnt.style.top, "Left:", elmnt.style.left);
    }

    function closeDragElement() {
        document.removeEventListener("mouseup", closeDragElement);
        document.removeEventListener("mousemove", elementDrag);
    }
}
