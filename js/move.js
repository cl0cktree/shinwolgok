$(function(){
	//-----지역 변수의 전역화 정의-------
	var fixability_url = 'http://fixability.co.kr';
	var consulting_url = "consulting.html"
	var faq_url = "faq.html"
	var resize_framespeed = 1000/60;
	var nav_num;
	var nav_num_start;
	var contents_head;
	var contents_title;
	var work_years;
	var class_add;
	var frame_year;
	var pc_ham;
	var $language = $('.language');
	var $language_mobile = $('.language-mobile');
	var $name_header=$('.header');
	var $name_header_con=$('.header-con');
	var $name_section = $('.section');
	var $name_footer = $('.footer');
	var footer_contaner=document.querySelector('footer .body-footer-contaner');
	var split_url = this.location.href.split('/').reverse()[0];
	var split_url_load = this.location.href.split('#')[0];
	var split_url_load_re = this.location.href.split('#').reverse()[0];
	//-----------------------------------
	//-----시작시 바로 동적 요소 제어------
	
	$(document).ready(function(event){
		// event.preventDefault();
		// event.stopPropagation();
		var down_speed = 500;
		var load_top = 129;
		
		if((split_url_load==fixability_url)||(split_url_load==fixability_url+'/')){
			// console.log(split_url_load_re);
			
			var load_top = 129;
			if (this.location.href.split('#')[1]){
				// console.log(this.location.href+' / '+split_url_load_re);
				$('body, html').stop().animate({ scrollTop: $('#'+split_url_load_re).offset().top-load_top},0);
				// window.location.href = this.location.href;
			}
		}

		function nav_down(){
			nav_timeout = setTimeout(function(){
				$('.nav').css({'margin-top':'0'});
			},down_speed);
		};
		// $('body, html').stop().animate({ scrollTop: $('body').offset().top-100},0);
		// $('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		
		if($('.nav').width()==$(window).width()){
			pc_ham = 20;
		}else{
			pc_ham = (($(window).width()-$('.nav').width())/2)+20;
		};
		// $('.mobile-menu').css({'right':pc_ham+'px'});
		// $('.gnb-wrap, .gnb-modile').find('.gnb-1').children('a').addClass('on');
		nav_down();
		// console.log(this.location.href+' / '+split_url_load_re);
		if((split_url_load==fixability_url)||(split_url_load==fixability_url+'/')){
			// console.log(split_url_load_re);
			if (this.location.href.split('#')[1]){
				// console.log(this.location.href+' / '+split_url_load_re);
				$('body, html').stop().animate({ scrollTop: $('#'+split_url_load_re).offset().top-load_top},0);
				// window.location.href = this.location.href;
			}
		}
		// else if (split_url_load==fixability_url+'/consulting.html'){

		// }else if (split_url_load==fixability_url+'/qna.html'){

		// }
	});
	//----------------------------------
	//-----브라우저 가로폭 변동시 필요 요소 동작-----
	$(window).stop().resize(function(){
		var delay_time;
		if(!delay_time){
			delay_time = setTimeout(function() {
				delay_time=null;
				if(($('.header').width()>1063)||($('.header-con').width()>1063)){
					// $('.language, .language-mobile').stop().removeClass('on');
					$('.menu_btn').stop().removeClass('mobile');
					$('.menu_btn input[type=checkbox]').prop('checked',false);
					$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
						if ($('.background-filter').css('z-index')!=='200'){
							$('.background-filter').stop().fadeOut('300').removeClass('on');
						}
					});
					$name_header.stop().animate({'height':'90px'},50,function(){
						$('.gnb-wrap').find('.depth_wrap').stop().fadeOut(200).animate({'margin-top':'-50%','opacity':'0'});
					});

					$name_header_con.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
						if ($('.background-filter').css('z-index')!=='200'){
							$('.background-filter').stop().fadeOut('300').removeClass('on');
						}
					});
					$name_header_con.stop().animate({'height':'90px'},50,function(){
						$('.gnb-wrap').find('.depth_wrap').stop().fadeOut(200).animate({'margin-top':'-50%','opacity':'0'});
					});
					// if($('.nav').width()==$(window).width()){
					// 	pc_ham = 20;
					// }else{
					// 	pc_ham = (($(window).width()-$('.nav').width())/2)+20;
					// };
					// $('.mobile-menu').css({'right':pc_ham+'px'});
				};
			},resize_framespeed);
		};
	});
	//--------------------------------
	//-----topmenu 및 top_btn scroll--
	var scroll_index = $('.article').each(Array).length;
	$(window).scroll(function(){
		var scroll_delay_time_1;
		var height_over = $(window).height()+$(window).scrollTop();
		var scroll_bottom = $("body").height() - $(window).height() - $(window).scrollTop();
		var footer_height = $name_footer.height()+20;
		var article1_height = $('.article_1').height()-35;

		if(!scroll_delay_time_1){
			scroll_delay_time_1 = setTimeout(function(){
				scroll_delay_time_1=null;
				if (($(window).scrollTop()>$('.article_0').height()-100)||($(window).scrollTop()>$('.max-art').height()-$('.max-art').height())){
					// $('.header').css({'background':'rgba(255,255,255,0.7)'});
					// $('.gnb-wrap').stop().css({'height':'100px','line-height':'100px'},200);
					// $('.language').stop().css({'top':'30px'},220);
					$('.header').addClass('on');
					if (($name_header.width()>1063)||($name_header_con.width()>1063)){
						$('.nav').stop().css({'height':'90px'},200);
					}
					$('.top_btn').addClass('on');
					if ((height_over>$name_section.height()+$name_footer.height()-100)&&(scroll_bottom<$name_footer.height())){
						$('.top_btn').css({'bottom':footer_height});
					}else{
						$('.top_btn').css({'bottom':'50px'});
					}
					$('.article').each(function(){
						var draw_speed = 400;
						if ($(window).scrollTop()>=$(this).offset().top-170){
							var scm = $(this).attr('data-index');
							var $container_this;
							var $graph_this;
							var marker_index;
							var marker_split;
							var marker_split_0;
							var marker_split_1;
							
							$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
							$('.gnb-wrap, .gnb-modile').find('.gnb-'+scm).children('a').addClass('on');
							// history.pushState(null,null,fixability_url+'/#mark_'+scm+'_1');
							// if ($(this).find('.contents')){
							// 	$(this).find('.contents').children('h3').stop().animate({'top':'0','opacity':'1'},300,function(){
							// 		$container_this = $(this);
							// 		// console.log($container_this);
							// 		$container_this.siblings('.vision, .mission').css({'margin-left':'auto','margin-right':'auto','opacity':'1'});
							// 		$container_this.parent().find('.board_ceo').stop().animate({'opacity':'1'},300);
							// 		$container_this.parent().find('.qna-board').stop().animate({'opacity':'1'},300);
							// 		$container_this.parent().find('.card').css({'margin-left':'0','opacity':'1'},function(){
							// 		});
							// 	});
							// }
							// if($(window).scrollTop()>=$('.graph-1').offset().top-100){
							// 	$('.graph-1').find('.graph-img').css({'opacity':'1'});
							// };
							// if ($(window).scrollTop()>=$('.graph-2').offset().top-100){
							// 	$('.graph-2').find('.graph-img').css({'opacity':'1'});
							// };
							
							// if (marker_split_0=='1'){
							// 	color_add = 'color_blue';
							// 	url_add = 'direction';
							// 	if(marker_split_1=='1'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='2'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='3'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='4'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='5'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='6'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}
							// }else if (marker_split_0=='2'){
							// 	color_add = 'color_green';
							// 	url_add = 'kind';
							// 	if(marker_split_1=='1'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='2'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='3'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}
							// }else if (marker_split_0=='3'){
							// 	color_add = 'color_navy';
							// 	url_add = 'introduce';
							// 	if(marker_split_1=='1'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='2'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='3'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='4'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}else if (marker_split_1=='5'){
							// 		$('.depth_wrap_'+scm).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// 	}
							// }
						}
					});
					$('.marker').each(function(){
						if($(window).scrollTop()>$(this).offset().top-295){
							marker_index=$(this).attr('data-index');
							marker_heihgt=$(this).scrollTop();
							marker_split=marker_index.split('_');
							marker_split_0=marker_split[0];
							marker_split_1=marker_split[1];
							var url_add;
							var color_add;
							// $('body, html').stop().animate({ scrollTop: $('.mark-'+sub_index).offset().top-topminus },300);
							// return false;
							if (marker_split_0=='1'){
								color_add = 'color_blue';
								url_add = 'direction'
							}else if(marker_split_0=='2'){
								color_add = 'color_green';
								url_add = 'kind'
							}else if(marker_split_0=='3'){
								color_add = 'color_navy';
								url_add = 'introduce'
							}
							$('.depth_wrap').find('a').removeClass();
							$('.depth_wrap_'+marker_split_0).find('.depth_'+marker_split_1).find('a').addClass(color_add);
							// history.pushState(null,null,fixability_url+'/#mark_'+marker_index);
							// console.log($(marker_split));
						}
					});
					// history.pushState(null,null,fixability_url);
					return false;
				}else{
					// $('.header').css({'background':'rgba(255,255,255,1)'});
					// $('.gnb-wrap').stop().css({'height':'100px','line-height':'100px'},200);
					// $('.language').stop().css({'top':'30px'},220);
					$('.header').removeClass('on');
					if (($name_header.width()>1063)||($name_header_con.width()>1063)){
						$('.nav').stop().css({'height':'90px'},200);
					};
					$('.top_btn').removeClass('on');
					// history.pushState(null,null,fixability_url);
				};
				// history.pushState(null,null,fixability_url);
				return false;
			},resize_framespeed);
		}
	});
	//--------------------------------
	//-----top_btn 클릭시 동작-----------
	$('.top_btn').on('click',function(){
		$('body, html').stop().animate({ scrollTop: $('body').offset().top-100},400,function(){
			// history.pushState(null,null,fixability_url);
		});
	});
	//----------------------------------
	//-----스크롤시 각 article 동작------
	//----------------------------------
	//-----언어 선택 selectbox---------
	$('.language, .language-mobile').on('click keypress','a',function(e){
		var sel_lang = $(this).data('lang');
		var roll_speed;
		roll_speed=30000;
		if($('.language, .language-mobile').height()<160){
			$('.language, .language-mobile').stop().addClass('on');
		}else{
			$('.language, .language-mobile').stop().removeClass('on');
			if(sel_lang=='val'){
				$(this).html();
			}else{
				if ((sel_lang=='Eng')||(sel_lang=='Chi')){
					alert('준비 중 입니다.');
					$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
					$('.depth_wrap').children('li').children('a').removeClass();
					sel_lang = 'Kor';
					$('.language, .language-mobile').find('a:eq(0)').html(sel_lang);
				}
			}
		}
		function roll_up(){
			$('.language, .language-mobile').stop().removeClass('on');
		};
		setTimeout(roll_up,roll_speed);
	});
	//-----------------------------------
	//------햄버거 버튼 클릭 시 동작-------
	$('.nav').on('click keypress','.menu_btn input[type=checkbox]',function(){
		$('.language, .language-mobile').removeClass('on');
		if($('.menu_btn input[type=checkbox]').prop('checked')==false){
			$('.menu_btn').removeClass('mobile');
			if ($('.header, .header-con').width()>1063){
				$name_header.stop().animate({'height':'90px'},50,function(){
					$('.gnb-wrap').find('.depth_wrap').stop().fadeOut(200).animate({'margin-top':'0','opacity':'0'});
				});
				$name_header_con.stop().animate({'height':'90px'},50,function(){
					$('.gnb-wrap').find('.depth_wrap').stop().fadeOut(200).animate({'margin-top':'0','opacity':'0'});
				});
			}else{
				$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
					$('.background-filter').stop().fadeOut('300').removeClass('on');
					// $('.gnb-modile').find('.depth_wrap').stop()
				});
				$name_header_con.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
					$('.background-filter').stop().fadeOut('300').removeClass('on');
					// $('.gnb-modile').find('.depth_wrap').stop()
				});
			};
		}else{
			if ($('.header, .header-con').width()>1063){
				$('.menu_btn').addClass('mobile');
				$name_header.stop().animate({'height':'225px'},50,function(){
					$('.gnb-wrap').find('.depth_wrap').stop().fadeIn(200).animate({'margin-top':'0','opacity':'1'});
				});
				$name_header_con.stop().animate({'height':'225px'},50,function(){
					$('.gnb-wrap').find('.depth_wrap').stop().fadeIn(200).animate({'margin-top':'0','opacity':'1'});
				});
			}else{
				$('.menu_btn').addClass('mobile');
				$name_header.find('.mobile-menu').stop().animate({'right':'0'});
				$name_header_con.find('.mobile-menu').stop().animate({'right':'0'});
				$('.background-filter').stop().fadeIn('300').addClass('on');
			}
		
		}
	});
	$('.background-filter').on('click',function(){
		$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
			// $('.background-filter').stop().fadeOut('300').removeClass('on');
			if (($('.background-filter').css('z-index')!=='200')||($('.background-filter').find('.terms-modal')==false)){
				$('.background-filter').stop().fadeOut('300').removeClass('on');
			}
		});
		$name_header_con.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
			// $('.background-filter').stop().fadeOut('300').removeClass('on');
			if (($('.background-filter').css('z-index')!=='200')||($('.background-filter').find('.terms-modal')==false)){
				$('.background-filter').stop().fadeOut('300').removeClass('on');
			}
		});
		
		if($('.menu_btn input[type=checkbox]').prop('checked')==true){
			$('.menu_btn input[type=checkbox]').click();
		}
		
	});
	//-----------------------------------
	//------풀브라우징 및 모바일 GNB 제어--
	$('.gnb-wrap, .gnb-modile, .message-background, .message-background-mobile').on('click keypress','a',function(){
		var gnb_index = $(this).parent('li').data('index');
		var art_index = gnb_index;
		var topminus;
		var top_mobile;
		var color_add;
		var url_add;
		if($('.header, .header-con').width()>1063){
			if (art_index==1){
				topminus = 0;
			}else{
				topminus = 110;
			}
		}else{
			if (art_index==1){
				topminus = 60;
				top_mobile = 60;
			}else{
				topminus = 90;
				top_mobile = 90;
			}
		};
		// $language.removeClass('on');
		// $('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		// $('.depth_wrap').children('li').children('a').removeClass();
		$('.gnb-wrap, .gnb-modile').find('.gnb-'+gnb_index).children('a').addClass('on');
		if (gnb_index=='4'){
			window.location.href = './consulting.html';
		}
		else if(gnb_index=='5'){
			window.location.href = './faq.html';
		}else{
			if (((String(gnb_index).length==1)&&(split_url=='consulting.html'))||((String(gnb_index).length==1)&&split_url=='faq.html')){
				if (gnb_index=='1'){
					color_add = 'color_blue';
					url_add = 'direction'
				}else if(gnb_index=='2'){
					color_add = 'color_green';
					url_add = 'kind'
				}else if(gnb_index=='3'){
					color_add = 'color_navy';
					url_add = 'introduce'
				}else if(gnb_index=='4'){
					color_add = 'color_navy';
					url_add = 'introduce'
				}
				$(this).siblings('.depth_wrap').children('li:eq(0)').children('a').addClass(color_add);
				// history.pushState(null,null,fixability_url+'/#mark_'+gnb_index+'_1');
				// history.pushState(null,null,fixability_url);
			}
			else if(String(gnb_index).length==1){
				if (gnb_index=='1'){
					color_add = 'color_blue';
					url_add = 'direction'
				}else if(gnb_index=='2'){
					color_add = 'color_green';
					url_add = 'kind'
				}else if(gnb_index=='3'){
					color_add = 'color_navy';
					url_add = 'introduce'
				}
				$(this).siblings('.depth_wrap').children('li:eq(0)').children('a').addClass(color_add);
				// history.pushState(null,null,fixability_url+'/#mark_'+gnb_index+'_1');
				$('body, html').stop().animate({ scrollTop: $('.article_'+art_index).offset().top-topminus },300);
			}else{
				var sub_index= $(this).parent('li').data('index');
				var split_sub = sub_index.split('_');
				var split_sub_1 = split_sub[1];
				if (split_sub[0]=='1'){
					color_add = 'color_blue';
					url_add = 'direction'
					menu_color();
				}else if(split_sub[0]=='2'){
					color_add = 'color_green';
					url_add = 'kind'
					menu_color();
				}else if(split_sub[0]=='3'){
					color_add = 'color_navy';
					url_add = 'introduce'
					menu_color();
				}else if(split_sub[0]=='4'){
					window.location.href = './consulting.html';
					// color_add = 'color_consulting';
					// $('.gnb-4').children('a').addClass('on');
					// $('.gnb-4').find('.depth_wrap').children('li:eq(0)').children('a').addClass(color_add);
				}else if(split_sub[0]=='5'){
					window.location.href = './faq.html';
					// color_add = 'color_faq';
					// $('.gnb-5').children('a').addClass('on');
					// $('.gnb-5').find('.depth_wrap').children('li:eq(0)').children('a').addClass(color_add);
				}
				function menu_color(){
					$(this).addClass(color_add);
					// history.pushState(null,null,fixability_url+'/#mark_'+sub_index);
					if($('.header, .header-con').width()>1063){
						$('body, html').stop().animate({ scrollTop: $('.mark-'+sub_index).offset().top-topminus },300);
					}else{
						$('body, html').stop().animate({ scrollTop: $('.mark-'+sub_index).offset().top-top_mobile },300);
					};
					// history.pushState(null,null,fixability_url);
				};
			}
		}
		// $('body, html').stop().animate({ scrollTop: $('.article_'+art_index).find('.contents').find('.slogan-box').offset().top-topminus },300);
		// history.pushState(null,null,fixability_url+'index.html/'+url_add);
	});
	//----------------------------------
	//-----footer 클릭시 각 동작 모음----
	$name_footer.find('.terms').on('click','a',function(){
		var datasum;
		$('.background-filter').stop().fadeIn('300').addClass('on');
		if ($(this).is('.terms-service')){
			datasum = './data/terms.html .data-service';
		}else if($(this).is('.information-policy')){
			datasum = './data/terms.html .data-policy';
		}else if($(this).is('.standard-terms')){
			datasum = './data/terms.html .data-terms';
		}else if($(this).is('.rejection-email')){
			datasum = './data/terms.html .data-rejection';
		}else if($(this).is('.recruit')){
			datasum = './data/terms.html .data-recruit';
		}
		$('.background-filter').css({'z-index':'200'});
		$('.background-filter').load(datasum);
	});
	$('.background-filter').on('click','.close-btn',function(){
		$('.background-filter').stop().fadeOut('300').removeClass('on');
		$('.background-filter').css({'z-index':'-1'});
		$('.background-filter').html('');
	});
	$name_footer.on('click','.phon-num',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:02-6952-8892','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:02-6952-8892','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	});
	return false;
});
