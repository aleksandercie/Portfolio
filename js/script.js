document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.getElementById('progress'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});

var banner = document.getElementById('banner');
var nameBox = document.getElementById('name');
var profession = document.getElementById('profession');

TweenMax.set(banner, {visibility: "visible"});
TweenMax.set(nameBox, {visibility: "visible"});
TweenMax.set(profession, {visibility: "visible"});

TweenMax.from(banner, 5, {opacity: 0})
TweenMax.from(nameBox, 3, {opacity: 0, delay: 0.7});
TweenMax.from(profession, 3, {opacity: 0, delay: 1.2});

var positionAboutElement = -(window.innerWidth);

jQuery.noConflict();
jQuery(document).ready(function() {
    		var controller = new ScrollMagic.Controller();
    		var blockTween = new TweenMax.from('.photo-about', 3, {
    			left: positionAboutElement
    		});
    		var containerScene = new ScrollMagic.Scene({
    			triggerElement: '.person',

                
                offset: -200, 
                duration: 250 
                

    		})
    		.setTween(blockTween)
    		.addTo(controller);
            
    })
    
    jQuery.noConflict();
    jQuery(document).ready(function() {
            var controller = new ScrollMagic.Controller();
            var blockTween = new TweenMax.from('.text', 3, {
              right: positionAboutElement
            });
            var containerScene = new ScrollMagic.Scene({
              triggerElement: '.person',
    
                    
                    offset: -350, 
                    duration: 200 
                    
    
            })
            .setTween(blockTween)
            .addTo(controller);
                
        })

        jQuery.noConflict();
        jQuery(document).ready(function() {
                var controller = new ScrollMagic.Controller();
                var blockTween = new TweenMax.from('.examples', 5, {
                  backgroundColor: '#4c4c4c',
                  color: '#ffffff'
                  
                });
                var containerScene = new ScrollMagic.Scene({
                  triggerElement: '#projects',
        
                        
                        offset: -200, 
                        duration: 400 
                        
        
                })
                .setTween(blockTween)
                .addTo(controller);
                    
            })

        jQuery.noConflict();
        jQuery(document).ready(function() {
                var controller = new ScrollMagic.Controller();
                var blockTween = new TweenMax.from('.contact', 5, {
                  backgroundColor: '#ffffff'
                  
                });
                var containerScene = new ScrollMagic.Scene({
                  triggerElement: '.contact',
        
                        
                        offset: -100, 
                        duration: 400 
                        
        
                })
                .setTween(blockTween)
                .addTo(controller);
                    
            })
            jQuery.noConflict();
            jQuery(document).ready(function() {
                    var controller = new ScrollMagic.Controller();
                    var blockTween = new TweenMax.from('.form', 5, {
                      opacity: 0
                      
                    });
                    var containerScene = new ScrollMagic.Scene({
                      triggerElement: '.contact',
            
                            
                            offset: -100, 
                            duration: 400 
                            
            
                    })
                    .setTween(blockTween)
                    .addTo(controller);
                        
                })
