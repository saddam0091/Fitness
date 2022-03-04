// Fluid Font & Blog Section of Home
let root,
	blogCont,
	blogBody,
	blogContentWidth,
	blogContHeight,
	lineHeight,
	numbOfPara,
	parasArr,
	bodyHeight,
	diff,
	marginCount;
const paraArr = [];
// Fluid font
root = document.querySelector(':root');
fontSizeCalc();
// Blog section
blogCont = document.querySelectorAll('.blog-body-wrapper');
blogBody = document.querySelectorAll('.blog-body');
lineHeight = 22.4;
blogFluidBody();
// "RESIZE" event
window.addEventListener('resize', function () {
	fontSizeCalc();
	blogFluidBody();
});
// ./"RESIZE" event
function fontSizeCalc() {
	if (window.outerWidth < 1400 && window.outerWidth >= 320) {
		root.style.setProperty('--custom-vw', window.outerWidth);
	} else if (window.outerWidth >= 1400) {
		root.style.setProperty('--custom-vw', 1400);
	} else {
		root.style.setProperty('--custom-vw', 320);
	}
}
function blogFluidBody() {
	if (window.innerWidth >= 992 && window.innerWidth < 1200) {
		blogContHeight = 364;
		blogBodyHeightSet(blogContHeight);
		blogContHeightSet(blogContHeight);
	} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
		blogContHeight = 305.2;
		blogBodyHeightSet(blogContHeight);
		blogContHeightSet(blogContHeight);
	} else if (window.innerWidth >= 576 && window.innerWidth < 768) {
		blogContHeight = 374;
		blogBodyHeightSet(blogContHeight);
		blogContHeightSet(blogContHeight);
	} else if (window.innerWidth < 576) {
		blogContHeight = blogContHeightCalc();
		blogBodyHeightSet(blogContHeight);
		blogContHeightSet(blogContHeight);
	}
}
function blogBodyHeightCalc(height, margins) {
	let x = Math.trunc((height - margins * 14) / lineHeight);
	let h = x * lineHeight + margins * 14;
	return h;
}
function blogBodyHeightSet(h) {
	blogBody.forEach((e, i) => {
		diff = [];
		marginCount = -1;
		parasArr = e.children;
		Array.from(parasArr).forEach((e) => {
			diff.push(blogCont[0].offsetTop + h - e.offsetTop);
		});
		paraArr[i] = diff;
		numbOfPara = diff.length;
		diff.forEach((e, i) => {
			if (e >= 0) {
				marginCount += 1;
			}
		});
		bodyHeight = blogBodyHeightCalc(h, marginCount);
		e.style.height = bodyHeight + 'px';
	});
}
function blogContHeightCalc() {
	blogContentWidth = window.innerWidth - 30;
	blogContHeight = (3 / 4) * blogContentWidth;
	blogContHeight = Math.trunc(blogContHeight / lineHeight) * lineHeight;
	return blogContHeight;
}
function blogContHeightSet(x) {
	blogCont.forEach((e) => {
		e.style.height = x + 'px';
	});
}
// ./Fluid Font & Blog Section of Home

// Initialize Swiper
const swiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	speed: 1500,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000,
	},
});
const swiper2 = new Swiper('.swiper2', {
	slidesPerView: 'auto',
	grabCursor: true,
	speed: 1500,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
	},
	autoplay: {
		delay: 2000,
	},
});
const swiper3 = new Swiper('.swiper3', {
	slidesPerView: 'auto',
	grabCursor: true,
	speed: 800,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
const swiper4 = new Swiper('.swiper4', {
	slidesPerView: 'auto',
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
const swiper5 = new Swiper('.swiper5', {
	slidesPerView: 'auto',
	grabCursor: true,
	loop: true,
	autoplayDisableOnInteraction: true,
	autoplay: {
		delay: 3000,
	},
});
const swiper6 = new Swiper('.swiper6', {
	slidesPerView: 'auto',
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 3000,
	},
});
let swiper7 = new Swiper('.swiper7', {
	speed: 500,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	loop: true,
	freeMode: true,
	loopedSlides: 5,
	watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
	zoom: true,
	speed: 500,
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
// ./Initialize Swiper

// Initialize AOS

AOS.init({
	once: true,
});

// ./Initialize AOS

// Hamburger
const menuBtn = document.querySelector('.navbar-toggler');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});
// ./Hamburger
// Filter
const filterBtn = document.getElementById('filter');
const filterCover = document.querySelector('.filter-cover');
const sidebar = document.querySelector('.sidebar-left');
const sidebarWrap = document.querySelector('.sidebar-wrapper');
let filterOpen = false;
document.addEventListener('click', (e) => {
	if (e.target.closest('#filter')) {
		if (!filterOpen) {
			sidebar.classList.add('sidebar-open');
			filterOpen = true;
			sidebarWrap.style.zIndex = '5';
			filterCover.style.opacity = '1';
			filterCover.style.display = 'block';
		}
	} else {
		if (
			e.target.classList.contains('close-button') ||
			e.target.classList.contains('filter-cover')
		) {
			sidebar.classList.remove('sidebar-open');
			filterOpen = false;
			sidebarWrap.style.zIndex = '3';
			filterCover.style.opacity = '0';
			filterCover.style.display = 'none';
		}
	}
});
// ./Filter

/* ========== JQuery ========== */
$(document).ready(function () {
	// ##Select2 initialization
	$('.js-example-basic-single').select2();

	// ## Header Search Box, Cart
	const $hSearchBox = $('.search-box:eq(0)');
	const $hCart = $('.cart:eq(0)');

	$(document).on('click', function (e) {
		if (
			!$(e.target).parents('.cart').length > 0 &&
			!$(e.target).hasClass('fa-shopping-basket') &&
			!$(e.target).hasClass('cart-icon')
		) {
			if ($hCart.hasClass('active')) {
				$hCart.removeClass('active');
			}
		}
		if (
			!$(e.target).parents('.search-box').length > 0 &&
			!$(e.target).hasClass('fa-search') &&
			!$(e.target).hasClass('search-icon')
		) {
			if ($hSearchBox.hasClass('active')) {
				$hSearchBox.removeClass('active');
			}
		}
		// e.preventDefault();
	});

	$('.search-icon:eq(0)').on('click', function (e) {
		if ($hCart.hasClass('active')) {
			$hCart.removeClass('active');
		}
		$hSearchBox.toggleClass('active');
		e.preventDefault();
	});
	$('.close-icon:eq(0)').on('click', function (e) {
		$hSearchBox.removeClass('active');
		e.preventDefault();
	});
	$('.cart-icon:eq(0)').on('click', function (e) {
		if ($hSearchBox.hasClass('active')) {
			$hSearchBox.removeClass('active');
		}
		$hCart.toggleClass('active');
		e.preventDefault();
	});
	$('.close-icon:eq(1)').on('click', function (e) {
		$hCart.removeClass('active');
		e.preventDefault();
	});

	// ## ./Header Search Box, Cart

	$(window).scroll(function () {
		if ($(window).scrollTop() > 44) {
			$('.header-bottom').addClass('hb-scroll');
		} else {
			$('.header-bottom').removeClass('hb-scroll');
		}
	});
	$('.dropdown').on('show.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').slideDown(400);
	});

	$('.dropdown').on('hide.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').slideUp(400);
	});
});
