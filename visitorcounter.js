//temporary for testing
const visitorCounter = document.getElementById("visitor-counter");
document.getElementById("button").onclick = () => setVisitors(getVisitors());

function getVisitors() {
    return (10)
}

function setVisitors(visitorCount) {
    visitorCounter.innerText =`${visitorCount}`;
}
