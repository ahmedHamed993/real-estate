let textareafield = document.getElementById("textarea");
let btn = document.querySelector(".blue-btn");
let input = document.getElementsByTagName("input");
btn.onclick= function()
{
    // console.log("ahmed");
    if(textareafield.value=="")
    {
        alert("please enter you message");
    }
    if(input[0].value=='')
    {
        alert("please enter your name");
        input[0].classList.add("emptyInput");
    }
    if(input[1].value=='')
    {
        alert("enter your email");
        input[1].classList.add("emptyInput");

    }
    else 
    {
        for(let i =0 ; i<input[1].value.length ; i++)
        {
            let inputValue = input[i].value;
            if(inputValue == "@")
            {
                return 0;
            }
        }
        alert("this email isn't valid");
    }
}
// let all = document.querySelectorAll(".book-content img");
// let x ;
// all.forEach(el=>{
//     el.onclick=function()
//     {
//         // console.log(el.parentNode.children[0].getAttribute("src"));
//         let x = el.getAttribute("src");
//         // console.log(x);
//         document.querySelector(".destination-img").removeAttribute("src");
//         document.querySelector(".destination-img").setAttribute("src",x);
//     }
// })
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
// document.querySelector("#confirm-selected-date").onclick=function()
// {
//     alert("your date has been confirmed");
// }
