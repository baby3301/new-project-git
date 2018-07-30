$( document ).ready(function(){


    //clear #href 
    
	$('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 400);
        event.preventDefault();
	});
	$('body').on('click', '.btn_dkn a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 400);
        event.preventDefault();
	});
	$('body').on('click', '.btn_khoahoc a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 400);
        event.preventDefault();
    });


    // $('.js-example-basic-single').select2({
    // 	width: 'resolve',
    // 	placeholder: "Chọn khóa học"
	// });
	// smoth scroll
	$('a.scroll[href^="#"]').click(function () {
		$('html, body').animate({
		  scrollTop: $($(this).attr('href')).offset().top - 100
		}, 500)
		return false
	});
		
	
	$('.capdo1').on('click',function(){
		//console.log(1);
		$('#capdo1').modal();
	});
	$('.capdo2').on('click',function(){
		//console.log(1);
		$('#capdo2').modal();
	});
	$('.capdo3').on('click',function(){
		//console.log(1);
		$('#capdo3').modal();
	  });
	$('.capdo3').on('click',function(){
		//console.log(1);
		$('#capdo3').modal();
	  });
	  $('.capdo4').on('click',function(){
		//console.log(1);
		$('#capdo4').modal();
	  });
	  $('.capdo5').on('click',function(){
		//console.log(1);
		$('#capdo5').modal();
	  });
	  $('.capdo6').on('click',function(){
		//console.log(1);
		$('#capdo6').modal();
	  });

	



    
    $('.tab-kh').click(function(event){
		var $this = $(event.currentTarget);
		var tab_id = $this.data('tab');
		$('.tab-kh').parent('li').removeClass('active');
		$('.cmt').removeClass('active');

		$(this).addClass('active');
		$('[data-tab="'+tab_id+'"]').parent('li').addClass('active');
		$("#"+tab_id).addClass('active');
    });
    



	// $('.carousel').bind('slide.bs.carousel', function (e) {
	//     $('.item.active .tienich_caption', this).fadeOut(300);
	// });

	// $('.carousel').bind('slid.bs.carousel', function (e) {
	//     $('.item.active .tienich_caption', this).fadeIn(300);
	// });
	(function(){
		"use strict";
    	var iframe = document.getElementById("autoplay-video"),
        disableAutoPlay = false;
    	function isScrolledIntoView(el) {
        var elemTop = el.getBoundingClientRect().top,
            elemBottom = el.getBoundingClientRect().bottom,
            isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    	}
    $(window).scroll(function () {
        if (!disableAutoPlay) {
            if (isScrolledIntoView(iframe)) {
                iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            } else {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        }
    });
    $(iframe).on("mouseleave", function () {
        disableAutoPlay = true;
	});
	
	
	})();
   	
   	
	

	if($(window).width() > 768){
		$(window).scroll(function(event){
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
			    $(".dk_xem_nha").addClass("show");
			    
			} else {
			    $(".dk_xem_nha").removeClass("show");
			    
			}
		});
	}

	
	var stringPathName = window.location.pathname;

	function updateURL() {
      if (history.pushState) {
          var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?para=hello';
          window.history.pushState({path:newurl},'',newurl);
      }
    }

	$('.navbar-nav li a').on('click',function(){
		var $this = $(this).attr('href');
		var stringPathName = window.location.pathname;
		var newurl = stringPathName + $this;
		if (history.pushState) {
           window.history.pushState({path:newurl},'',newurl);
      	}
	});


	  $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:2
            }
        }
    })
	
	

});



function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailText);
  };

  function checkPhoneNumber() { 
    var flag = false;
    var phone = $('#phone').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        } else if (firstNumber == '01' && phone.length == 11) {
            if (phone.match(/^\d{11}/)) {
                flag = true;
            }
        }
    }
    return flag;
  }

  function checkPhoneNumber_ft() {
    var flag = false;
    var phone = $('#phone_ft').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        } else if (firstNumber == '01' && phone.length == 11) {
            if (phone.match(/^\d{11}/)) {
                flag = true;
            }
        }
    }
    return flag;
  }

  function kiemtra()
  {
    if($('#fullname').val() == "")
    {
      alert("Vui lòng nhập Họ tên!");
      $('#fullname').focus();
    }     
    else if(!checkPhoneNumber())
    {
      alert("Số điện thoại bạn điền không hợp lệ !");
      $('#phone').focus(); 
      return false;
    }
    else if($('#email').val()=="" || !isValidEmail($('#email').val()))
    {   
      alert("Email phải hợp lệ !");
      $('#email').focus();
      return false;
    } 
    else
    {   
      var phone =  $('#phone').val();    
      var fullname =  $('#fullname').val();      
      var email = $('#email').val();
      var address = $('#address').val();

      $.ajax({
        type: "POST",
        url: "api/register.php",      
        data: {fullname:fullname,email:email,phone:phone, address: address},
        success: function(data){  
          try {
                var dataDmp = {
                    'campaign_id': '5b42c45fe1382310a8593f92',
                    // 'service': array['type'],
                    'fullname': fullname,
                    'email': email,
                    'phone': phone,
                    'address': address
                    
                    // 'company': array['company'],
                    // 'content': array['content']
                };

                $.ajax({
                    type: 'POST',
                    url: '//log.urekamedia.com/customers',
                    data: dataDmp,
                    dataType: "json",
                    success: function (data_dmp) {
                        var checkFunction = (typeof pushData === 'function');
                        if (checkFunction ==true) {
                            pushData(data_dmp);
                            data = JSON.parse(data);
                            if(data.result === "0")
                            {
                                alert("Bạn đã đăng ký rồi");
                            }
                            else
                            {
                                window.location.href = "thanks.html";
                            }   
                        }
                        else{
                            data = JSON.parse(data);
                            if(data.result === "0")
                            {
                                alert("Bạn đã đăng ký rồi");
                            }
                            else
                            {
                                window.location.href = "thanks.html";
                            } 
                        }
                        
                    }
                });
            } catch (e) {
                console.log(e);
                data = JSON.parse(data);
                if(data.result === "0")
                {
                    alert("Bạn đã đăng ký rồi");
                }
                else
                {
                    window.location.href = "thanks.html";
                } 
            }
            
            
        }
      }); 
    } 
  }
