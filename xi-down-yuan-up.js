var newHtml = document.querySelector('html').cloneNode(true);
document.open();
document.close();
var html = document.querySelector('html');
document.replaceChild(newHtml, html);

const animationSec = 8;
const ussrAnthemShort = 'https://www.myinstants.com/media/sounds/ussr-anthem-short2.mp3';

const img1 = 'https://i.imgur.com/NvKnlAE.png';
const img2 = 'https://i.imgur.com/5b9ZLzR.png';
const sound = 'https://www.myinstants.com/media/sounds/.mp3_WfYbRzx';

var styleBlocks = document.getElementsByTagName('link')[0];
var style = document.createElement('style');
style.innerHTML = `@keyframes xi-down {
	0%{
		position: relative;
		top: 0px;
	}
	100%{
		position: relative;
		top: 80%;
	}
}

@keyframes yuan-up {
	0%{
		position: relative;
		top: 80%;
        background-image: url(${img1});
	}
	100%{
		position: relative;
		top: 0px;
        background-image: url(${img1});
	}
}

.xi-down{
	animation: ${animationSec}s;
	animation-name: xi-down;
    position: relative;
    top: 80%;
}

.yuan-up{
	animation: ${animationSec}s;
	animation-name: yuan-up;
    position: relative;
	top: 0px;
    background-image: url(${img1});
}

.down{
    background-image: url(${img2});
}
`;
styleBlocks.parentNode.insertBefore(style, styleBlocks);

var audio = new Audio();
var xiImg = document.querySelector('#app > .cat-img');
var text = xiImg.querySelector('.counter.rot-c')

function adaddEventListenerd(){
    var dowm = function(e){
        audio.src = sound;
        audio.play();
        xiImg.classList.add('down');
    };
    var up = function(e){
        xiImg.classList.remove('down');
    };
    document.addEventListener("keydown", dowm);
    document.addEventListener("keyup", up);

    document.addEventListener("pointerdown", dowm);
    document.addEventListener("pointerup", up);


}

audio.src = ussrAnthemShort;
audio.play();

text.innerText = '習下';
xiImg.classList.add('xi-down');
setTimeout(()=>{
    text.innerText = '元上';
    xiImg.classList.remove('xi-down')
    xiImg.classList.remove('p')
    xiImg.classList.add('yuan-up');
    setTimeout(adaddEventListenerd, animationSec*1000);
}, animationSec*1000);