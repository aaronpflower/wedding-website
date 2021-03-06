var m = require("mithril"),
	countDownTimer = require('./widgets/timer.js'),
    Layout = require('./layout.js');

var Home = {
    controller: function() {
        var keys = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        }; 
        function preventDefault(e) {
          e = e || window.event;
          if (e.preventDefault)
              e.preventDefault();
          e.returnValue = false;  
        }

        function preventDefaultForScrollKeys(e) {
          if (keys[e.keyCode]) {
            preventDefaultScroll(e);
          }
          return false;
        }

        function disableScroll() {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            }
            window.onwheel = preventDefault;
            window.onmousewheel = document.onmousewheel = preventDefault;
            window.ontouchmove = preventDefault;
            document.onkeydown = preventDefaultForScrollKeys;
            return;
        }

        function enableScroll() {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            }
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
            return;
        }
        this.modal = function() {
            var modalOpened = document.getElementById('modal-content').classList.contains("bio-overlay-opened"),
                triggerOpen = document.getElementById('trigger-open'),
                triggerClose = document.getElementById('trigger-close');

            if(modalOpened){
                a = document.getElementById('modal-content').className = "bio-overlay-closed";
                triggerClose.addEventListener("click", a);
                enableScroll();
            }
            else {
                b = document.getElementById('modal-content').className = "bio-overlay-opened";
                triggerOpen.addEventListener("click", b);
                disableScroll();
            }
        }

        this.modal2 = function() {
            var modalOpened = document.getElementById('modal-content2').classList.contains("bio-overlay-opened"),
                triggerOpen = document.getElementById('trigger-open'),
                triggerClose = document.getElementById('trigger-close');

            if(modalOpened){
                a = document.getElementById('modal-content2').className = "bio-overlay-closed";
                triggerClose.addEventListener("click", a);
                enableScroll();
            }
            else {
                b = document.getElementById('modal-content2').className = "bio-overlay-opened";
                triggerOpen.addEventListener("click", b);
                disableScroll();
            }
        }
        this.modal3 = function() {
            var modalOpened = document.getElementById('modal-content3').classList.contains("bio-overlay-opened"),
                triggerOpen = document.getElementById('trigger-open'),
                triggerClose = document.getElementById('trigger-close');

            if(modalOpened){
                a = document.getElementById('modal-content3').className = "bio-overlay-closed";
                triggerClose.addEventListener("click", a);
                enableScroll();
            }
            else {
                b = document.getElementById('modal-content3').className = "bio-overlay-opened";
                triggerOpen.addEventListener("click", b);
                disableScroll();
            }
        }
    },
    view: function(ctrl) {
        return m("div", [
            // modal content
             m("div#modal-content.bio-overlay-closed", [
                m("div.modal", [
                    m("div.modal-text", [
                        m("div#trigger-close", {onclick: ctrl.modal}, [
                            m('img.modal-x', {src: "/img/close-icon.svg"})
                        ]),
                        m("h1", "About Brittney"),
                        m("p", "Brittney Nicole Richter was  born March 10th, 1988 in Sedro Woolley, WA to her loving parents, Thom and Nancy Richter. My guess it was raining that day. As a child she spent the rainy PNW days playing with her paper dolls, expansive doll collection, and off-colored pets (rats, mice, and a pig). Brittney also participated in shenanigans with the neighborhood kids, but sometimes just watched them from her bedroom window since she had an earlier bedtime."),
                        m("p", "In high school Brittney fell in love with teaching young children, leading her to pursue higher education in early childhood education. First at Skagit Valley Community College, then onto Western Washington University, then finally to the last place on earth she thought she would find herself, Boulder, CO, and the University of Colorado. What she thought would be only a year in CO turned into a little bit more after she met this hot guy named Aaron.")
                    ]),
                ]), 
            ]),
             m("div#modal-content2.bio-overlay-closed", [
                m("div.modal", [
                    m("div.modal-text", [
                        m("div#trigger-lose", {onclick: ctrl.modal2}, [
                            m('img.modal-x', {src: "/img/close-icon.svg"})
                        ]),
                        m("h1", "About Aaron"),
                        m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                        m("p", "The other 22% of Aaron’s spare time was spent sledding, roller blading (because Mighty Ducks), playing sports, and watching Sportscenter and the Weather Channel. As an adolescent, Aaron took up running. He was good at it, and ran a lot. A lot. Alot. Running brought Aaron to the mountain town of Gunnison, CO where he ran through college, and got a degree in Sports Science. It was also in Gunnison that the Lord’s pursuit of Aaron culminated in him becoming a Christian."),
                        m("p", "The Lord pushed Aaron to pursue church leadership, which brought him to an internship in Seattle, WA for a year. It was here that Aaron and Brittney cosmically attended the same Sounders FC vs. Manchester United game."), 
                        m("p", "After Seattle, Aaron felt called to move to Boulder, CO to help some of his good friends start a church. He spent three years in his personal hell as a Whole Foods employee, and by God’s grace was given an opportunity to try his hand at web development at a hip new startup in Boulder. If you want to find Aaron on any given night, if he’s not with his hottie fiancee, he can be found playing Madden with his friends Ryan and Ty. But if you’re looking for him past 9:30pm just wait until tomorrow. He’s gone to sleep because he’s so tired from being such a baller all day.") 
                    ]), 
                ]),   
            ]),
            m("div#modal-content3.bio-overlay-closed", [
                m("div.modal", [
                    m("div.modal-text", [
                        m("div#trigger-close", {onclick: ctrl.modal3}, [
                            m('img.modal-x', {src: "/img/close-icon.svg"})
                        ]),
                        m("h1", "About Us"),
                        m("p", "Brittney had recently moved to Boulder for a year-long intensive graduate program and Aaron had just quit his job at Whole Foods and started a new job at a local tech startup. While both of them were in a state of transition, God saw it fit to allow their worlds collide. Brittney who generally dislikes the act of meeting new people, had forced herself to go to a Missional Community (MC) gathering from her new church, The Well. On this particular night that she was going, Aaron’s MC was combining with that MC. That night, Aaron shirked on the other side of the house as this cute girl he had never met introduced herself to everyone. As they were sitting down to start a Bible Study, the two exchanged niceties, shook hands, and sat down. For the next hour Aaron proceeded to stare at Brittney, while Brittney wondered “Is he staring at me? Crap. Now he thinks I’m staring at him.”"),
                        m("p", "After their profoundly deep first meeting, Aaron did what any respectable man who wants to state their intentions to a lady does. He friended her on facebook. After a few exchanges on Facebook, and Brittney running away from Aaron at church, they met for coffee at Ozo Coffee. Walking into the coffee shop, Brittney took a deep breath, smiled at Aaron, and said “Aaron? Hi.” Aaron awkwardly sat in silence not knowing what to say, do, or think. But Brittney found the silence oddly calming to her nerves. After the initial awkwardness subsided, the two talked for 3 hours about their families, backgrounds, and everything in between. After finishing the last sips of their beverages, the pair walked outside of the coffee shop and awkwardly stared at each other for a second. Then Aaron looked at Brittney and said “We should do this again soon.” To which Brittney replied “Yes. I’d like that.” This was proceeded by the most awkward hug, arms tapping the others back lightly, torsos feet away from each other. After another awkward look and saying their goodbyes the two walked away from each other grinning.")
                    ]),
                ]),    
            ]),
            m("div.hero-wrapper", [
                m("div.hero-item", [
                    m("img", {src: "/img/home-hero.jpg"})
                ]),
            ]),
            m("main.main-border-home", [
            	m("div.main-section", [
                    countDownTimer,
            		m("div.about-us", [
                        m("div.about-us-item", [
                            m("img", {src: "/img/brittney-home.jpg"}),
                            // m("div.overlay", [
                            //     m("h1", "Hi"),
                            // ]),
                        ]),
            			m("div.about-us-item", [
                            m("div.about-us-text", [
                                m("h1", "About Brittney"),
                                m("p", "Written by Aaron"),
                                m("button#trigger-open.button", {onclick: ctrl.modal}, "Read Bio")
                            ]),
            			]),
            		]),
            		m("div#aaron.about-us", [
                        m("div.about-us-item", [
                            m("img", {src: "/img/aaron-home.jpg"}),
                            // m("div.overlay", [
                            //     m("h1", "I don't get it..."),
                            // ]),
                        ]),
            			m("div.about-us-item", [
                            m("div.about-us-text", [
                                m("h1", "About Aaron"),
                                m("p", "Written by Brittney"),
                                m("button#trigger-open.button", {onclick: ctrl.modal2}, "Read Bio")
                            ]),
            			]),
            		]),
           			m("div.how-we-met", [
                        m("div.how-we-met-img", [
                            m("img", {src: "/img/ba-home.jpg"})
                        ]),
                        m("div.about-us-text", [
                            m("h1", "How we met, well it's a pretty simple story"),
                            m("p", "Brittney had recently moved to Boulder for a year-long intensive graduate program"), 
                            m("button#trigger-open.button", {onclick: ctrl.modal3}, "Read More")
                        ])
                    ])
            	])
            ])
        ])
    }
};

module.exports = Home;