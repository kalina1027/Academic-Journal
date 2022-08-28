// const heroBtn=document.querySelector(".hero-btn");
// const heroImg=document.querySelector(".hero-img");
// heroBtn.addEventListener("mouseover", function(e){
// 	heroImg.style.width="100%";
// 	heroImg.style.marginLeft="0";
// 	heroImg.style.opacity="0.9";
// });
// heroBtn.addEventListener("mouseout", function(e){
// 	heroImg.style.width="120%";
// 	heroImg.style.marginLeft="-10rem";
// 	heroImg.style.opacity="0.7";
// });


$(document).ready(function(){
	//Mobile Header
	if($(window).width()>=680){
		$(".logo-title").html("Известия на Народния музей &#8211; Варна");
	}
	if($(window).width()<680){
		$(".logo-title").html("ИНМВ");
	}
		$(window).resize(function(){
		if($(this).width()>=680){
			$(".logo-title").html("Известия на Народния музей &#8211; Варна");
		}
		if($(this).width()<680){
			$(".logo-title").html("ИНМВ");
		}
	});
	jQuery(".toggle").change(function(){
		if(jQuery(this).is(":checked")){
			jQuery(".navigation-container").addClass("visible");
		}
		else {
			jQuery(".navigation-container").removeClass("visible");
			jQuery(".dropdown").css("display", "none");
		};
	});
	//Archive dropdown
    let archiveDropdown=false;
    let isClicked=false;
	jQuery(".dropdown-archive").click(function(event){
        isClicked=true;
		if(jQuery( window ).width()<=768){
            if(!archiveDropdown){
                event.preventDefault();
                archiveDropdown=true;
            }
			jQuery(".dropdown").slideToggle("slow", function(e) {
                console.log(e);
	    	// e.stopPropagation();
	  	    });
		}
	});
	//Footer Year
	jQuery(".footer-year").html((new Date()).getFullYear());

    //Materials Countdown
    let countdownDate="";
    if(jQuery(".countdown-date").html()){
        countdownDate=jQuery(".countdown-date").html();
        countdownDate=countdownDate.split(".");
        countdownDate[2]=countdownDate[2].substr(0, 4);
        countdownDate=''+countdownDate[2]+'/'+countdownDate[1]+'/'+countdownDate[0];
    }

	jQuery('.countdown').countdown(countdownDate+' 12:30:00')
    .on('update.countdown', function(event) {

        jQuery(".months").html(event.strftime('%-m'));
        jQuery(".months").next().text(event.strftime('%!m:месец, месеца;'));

        jQuery(".weeks").html(event.strftime('%-W'));
        jQuery(".weeks").next().text(event.strftime('%!W:седмица, седмици;'));

        jQuery(".days").html(event.strftime('%-d'));
        jQuery(".days").next().text(event.strftime('%!d:ден, дни;'));

        jQuery(".hours").html(event.strftime('%H'));
        jQuery(".hours").next().text(event.strftime('%!H:час, часа;'));

        jQuery(".minutes").html(event.strftime('%M'));
        jQuery(".minutes").next().text(event.strftime('%!M:минута, минути;'));
            
        jQuery(".seconds").html(event.strftime('%S'));
        jQuery(".seconds").next().text(event.strftime('%!S:секунда,секунди;'));

    })
    .on('finish.countdown', function(event) {
        jQuery(this).html('Времето изтече.')
            .parent().addClass('disabled');
    });


	// Home Slider
	const swiper = new Swiper('.swiper', {
	  loop: true,
	  setWrapperSize:true,
	  slidesPerView: 3.3,
	  spaceBetween: 30,
	  speed: 700,

	  watchSlidesProgress: true,
	  autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {
	    // when window width is >= 320px
	    0: {
	      slidesPerView: 1
	    },
	    393: {
	      slidesPerView: 1
	    },
	    768: {
	      slidesPerView: 2
	    },
	    1064: {
	      slidesPerView: 3
	    },
	    1264: {
	      slidesPerView: 3.3
	    },
	    1440: {
	      slidesPerView: 3.6
	    }
	  }
	  // slidesPerGroup: 3,
	  // loopFillGroupWithBlank: true,
	});

    // Count
    jQuery('.stat-num').each(function () {
        jQuery(this).prop('Counter',0).animate({
            Counter: jQuery(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });

	//Archive Tabs
	jQuery("#tabs").tabs();

	//Search Ajax
    let searchEditions=jQuery('#search-editions');
    const editionsIssues =  {
    	'inmv' : [
    		'ИНМВ 47 (62), 2020',
    		'ИНМВ 45 - 46 (60 - 61), за 2009 - 2010, 2018',
    		'ИНМВ 44 (59), за 2008, 2012',
    		'ИНМВ 43 (58), за 2007, 2009',
    		'ИНМВ 42 (57), за 2006, 2007',
    		'ИНМВ 41 (56), за 2005, 2007',
    		'ИНМВ 40 (55), за 2004, 2006',
    		'ИНМВ 38 - 39 (53 - 54) за 2002 - 2003, 2005',
    		'ИНМВ 36 - 37 (51 - 52) за 2000 - 2001, 2004'
    	],
    	'ivad' : [
    		'ИВАД 15, 1964',
    		'ИВАД 14, 1963'
    	],
    	'govad' : [
    		'IX ГО ВАД за 1914, 1915',
    		'VII и VIII ГО ВАД за 1912 и 1913, 1914',
    		'VI ГО ВАД за 1911, 1912'
    	]
 	};
    searchEditions.change(function () {
        let editionVal=jQuery(this).val();
        if(editionVal!=0){
        	let currentCategory=editionsIssues[editionVal].join("#");
        	jQuery.post("dropdown-issues.php", {category: currentCategory}, function(res){
                    jQuery("#search-issues").html(res);
				}
			);
        }
        if(editionVal==0){
        	jQuery("#search-issues").html('<option value="0">Брой</option>');
        }
    });
});
