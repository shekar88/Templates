
var onBtn, offBtn, bgBannerImg;

onBtn = document.getElementById('on-btn-id');
offBtn = document.getElementById('off-btn-id');
bgBannerImg = document.getElementById('bg_banner-1');

window.onload = function() {
	sw_off_fun();
	sw_on_fun();
	
}

function sw_on_fun() {
	onBtn.style.visibility = 'hidden';
	offBtn.style.visibility = 'visible';
	bgBannerImg.src = './images/bg-banner-1.jpg';
	bgBannerImg.style.transition = '1.5s';
	bgBannerImg.style.opacity = '1';
}

function sw_off_fun() {
	onBtn.style.visibility = 'visible';
	offBtn.style.visibility = 'hidden';
	bgBannerImg.src = './images/bg-banner-2.jpg';
	bgBannerImg.style.transition = '1.5s';
	bgBannerImg.style.opacity = '0.5';
}





