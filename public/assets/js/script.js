const navigation = document.querySelector('nav');
const titleSpans = document.querySelectorAll('.titleSpans span')

window.addEventListener('scroll', () => {
    if(window.scrollY >930) {
        navigation.classList.add('bgNav')
    } else {
        navigation.classList.remove('bgNav')
    }
})

// anim click

window.addEventListener('click', (e) =>{
    const rond = document.createElement('div');
    rond.className ='clickAnim';
    rond.style.top =`${e.pageY - 50}px`;
    rond.style.left = `${e.pageX -50}px`;
    document.body.appendChild(rond);

    setTimeout(()=> {
    rond.remove();
    },1500)
}
)
// anim load title
window.addEventListener ('load', () =>{
    
    const TL = gsap.timeline({pause:true});

    TL
    .staggerFrom(titleSpans, 1, { opacity: 0, ease: "power2.out"}, 0.3)

    TL.play();
})

// apparition bloc en js 
const ratio = .1
const option ={
    root:null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

var observer = new IntersectionObserver(handleIntersect, option)
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})

