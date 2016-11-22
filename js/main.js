 new WOW().init();
        
        $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        
        $(document).ready(function(){
             //Animation hamburger menu
              $('#nav-icon4').on('click', function(){
                    $(this).toggleClass('open');
                    $('.menu_list').toggleClass('view');

                });
                //Hide menu list after click on mobile
                $('.menu_list').on('click', function() {
                        $(this).toggleClass('view');
                        $('#nav-icon4').toggleClass('open');
                    });
            
            //owl carousel to portfolio slider
            $(".portfolio_slider").owlCarousel({
                nav: true,
                items: 1,
                dots: false,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                startPosition: 1,
                responsive: {
                    768 : {
                      items: 2  
                    },
                    995 : {
                        items: 3  
                    }
                    
                }
                

            });
            
            $('.quotes_container').owlCarousel({
                dots: true,
                dotsEach: true,
                items: 1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplay: true,
                mouseDrag: false
            });
            
            
        
        });
        
        var waypoints = $('#exp_bar').waypoint({
          handler: function(direction) {
            var circle = new ProgressBar.Circle('#progress', {
        color: '#FFFFFF',
        duration: 3000,
        trailColor: 'rgba(230, 230, 230, 0.4)',
        trailWidth: 2.1,     
        easing: 'easeInOut',
        strokeWidth: 2.1,
            });
        var circle_2 = new ProgressBar.Circle('#progress_2', {
        color: '#FFFFFF',
        duration: 3000,
        trailColor: 'rgba(230, 230, 230, 0.4)',
        trailWidth: 2.1,     
        easing: 'easeInOut',
        strokeWidth: 2.1,
            });
        var circle_3 = new ProgressBar.Circle('#progress_3', {
        color: '#FFFFFF',
        duration: 3000,
        trailColor: 'rgba(230, 230, 230, 0.4)',
        trailWidth: 2.1,     
        easing: 'easeInOut',
        strokeWidth: 2.1,
            });     

            circle.animate(1);
            circle_2.animate(1);
            circle_3.animate(1);
          
          },
        offset: '60%'
        })
        
    
   
   
        
        
        
        