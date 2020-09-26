window.onclick=function(e)
{
    if(e.target.classList.contains("source-img"))
    {
        // console.log(e.target.getAttribute("src"));
        let x = e.target.getAttribute("src");
        document.querySelector(".destination-img").removeAttribute("src");
        document.querySelector(".destination-img").setAttribute("src",x);
    }
    if(e.target.classList.contains("blue-btn"))
    {
        // console.log(e.target.parentElement.children[1].children[0].children[0].innerHTML);
        let destinaitionTitle = e.target.parentElement.children[1].children[0].children[0].innerHTML;
        document.querySelector(".destination-home-name").textContent = `House Name : ${destinaitionTitle}`;
    }
}
document.querySelector("#confirm-selected-date").onclick=function()
{
    alert("your date has been confirmed");
}
