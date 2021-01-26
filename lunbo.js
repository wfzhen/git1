// 轮播图
let image = document.querySelector(".lunbo");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let pages = document.querySelectorAll(".page")
let pagediv = document.querySelector(".pagediv")
let wrapper = document.querySelector(".wrapper")
let num = 1;
let timer = null;
function pic(){
    clearInterval(timer)
    timer = setInterval(function(){
        num++
        if(num == 6){
            num = 1;
        }
        image.src = "banner"+num+".jpg";
    },2000);
    document.querySelector(".page.active").classList.remove("active");
    pages[num-1].classList.add("active")
}
pic();
//鼠标悬停
wrapper.addEventListener("mouseenter",function(){
    clearInterval(timer);
})
wrapper.addEventListener("mouseleave",function(){
    pic();
})
// 前一页
prev.addEventListener("click",function(e){
    e.preventDefault();
    num--;
    if(num == 0){
        num = 5;
    }
    image.src = "banner"+num+".jpg"
    document.querySelector(".page.active").classList.remove("active");
    pages[num-1].classList.add("active")
})
//后一页
next.addEventListener("click",function(e){
    e.preventDefault();
    num++;
    if(num == 6){
        num = 1;
    }
    image.src = "banner"+num+".jpg"
    document.querySelector(".page.active").classList.remove("active");
    pages[num-1].classList.add("active")
})
//分页
for(let i=0 ; i<pages.length ; i++){
    pages[i].addEventListener("click",function(e){
        e.preventDefault();
        num = i+1;
        image.src = "banner"+num+".jpg"
        document.querySelector(".page.active").classList.remove("active");
        pages[num-1].classList.add("active")
    })
}

// pages.forEach(function(item,index){
//     item.addEventListener("click",function(e){
//         e.preventDefault();
//         num = index+1;
//         image.src = "banner"+num+".jpg";
//         document.querySelector(".page.active").classList.remove("active");
//         item[num-1].classList.add("active")
//     })
// })
