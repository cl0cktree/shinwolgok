$(function(){
    var slideNum;
    var sort_index;
    console.log(slideNum);
    $('body').on('click touchstart','.movei-btn',function(){
        console.log($('body').find('.video_play').length);
        click_move();
        
    });
    
    function click_move(){
        var load_video;
        var movei_index;
        var time_left;
        sort_index = $('.slide, .bulet').data('index');
        $('.background-filter').stop().fadeIn('300').addClass('on');
        if(sort_index==1){
            movei_index = '1';
        }
        $('.background-filter').css({'z-index':'200'});
        $.getJSON(jsonLocation, function(data){
            $.each(data, function(I, item){
                slideNum++;
                $('.slide'+slideNum).append('<a href="javascript:;" class="movei-btn">동영상팝업</a>');
                if (movei_index == item.index){
                    $('.background-filter').append('<div class="video_play"><h1>'+item.alt_text+slideNum+'</h1><a href="javascript:;" class="close-btn"><img src="./images/closebtn.png" alt="동영상 닫기"></a><video play controls poster="'+item.img_url+'" preload="metadata" alt="'+item.alt_text+slideNum+'" src="'+item.video_url+'" preload="auto" type="video/mp4"><source src="'+item.video_url+'" type="video/mp4"><track label="Korea" kind="subtitles" srclang="ko" src="./captions/vtt/movei_1-kr.vtt" default>'+item.alt_text+slideNum+'</video></div>');
                    $('.video_play').append('<div class="sub_scr" style="height:30px;line-height:30px;background:rgba(0,0,0,0.6);color:#fff;text-align:center;"></div>');
                    
                    $('.video_play').find('video').on('loadedmetadata',function(){
                        videoTime = parseInt($('.video_play').find('video').get(0).duration);
                        time_left = Math.floor(videoTime / 60) + ":" + (videoTime % 60);  // 남은 시간 계산
                        console.log(time_left);
                    });
                    
                    $('.video_play').find('video').on('timeupdate', function() {
                        var currentPos = $('.video_play').find('video').get(0).currentTime; //Get currenttime
                        var maxduration = $('.video_play').find('video').get(0).duration; //Get video duration
                        var percentage = 100 * currentPos / maxduration; //in %
                        var subLocation = './data/subscript_data.json';
                        $.getJSON(subLocation, function(data){
                            $.each(data, function(I, item){
                                if(item.index=='1'){
                                    if ((currentPos>0)&&(currentPos<7.5)){
                                        $('.sub_scr').html(item.line_1);
                                    }else if ((currentPos>7.6)&&(currentPos<37.5)){
                                        $('.sub_scr').html(item.line_2);
                                    }else if ((currentPos>37.6)&&(currentPos<87.5)){
                                        $('.sub_scr').html(item.line_3);
                                    }else if ((currentPos>87.6)&&(currentPos<137.5)){
                                        $('.sub_scr').html(item.line_4);
                                    }else if ((currentPos>137.6)&&(currentPos<197.5)){
                                        $('.sub_scr').html(item.line_5);
                                    }else if ((currentPos>197.6)&&(currentPos<237.5)){
                                        $('.sub_scr').html(item.line_6);
                                    }else if (currentPos>237.6){
                                        $('.sub_scr').html(item.line_1);
                                    }
                                    console.log(currentPos);
                                };
                            });
                        });
                    });
                };
            });
        });
    };
    return false;
});