var m = require('mithril');

var weddingDetails = {
    controller: function() {
    },
    view: function(ctrl) {
        return m("div", [
            m("div.hero-wrapper", [
                m("div.hero-item", [
                    m("img", {src: "/img/wedding.jpg"})
                ]),
                m("div.hero-content", [
                    m("h2", "Wedding Day Information")
                ])
            ]),
            m("main.main-border-wedding-details", [
                m("div.main-section", [
                    m("div.info-section", [
                        m("div.info-item-1", [
                            m("h1", "Ceremony location, time, and address"),
                            m("p", "We will be getting married at the beautiful Lyons Farmette, located at 4121 Ute Highway, Lyons, CO 80540. The ceremony will be held June 19th, 2016, at 4pm, with dinner, drinks, and dancing to follow."),
                            m("a[href='https://www.google.com/maps/place/4121+Ute+Hwy,+Lyons,+CO+80540/@40.2177515,-105.2615236,17z/data=!3m1!4b1!4m2!3m1!1s0x876be30416a4ddb5:0xa4f1d5616318562a'] [target='blank']", [
                                m("button.step-button", "Open in Google Maps"),
                            ]),
                        ]),
                        m('div.farm-img', [
                            m("img", {src: "/img/farmette.jpg"})
                        ]),
                        m('div.info-item-2', [
                            m("h1", "A few Reminders"),
                            m("p.padding-none", "1. Weather in Colorado can change quickly throughout the day, we recommend checking the hourly weather forecast prior to leaving for the evening. When in doubt, layer up!"),
                            m("p", "2. With the exception of family, to give all our guests the opportunity to enjoy the evening without having to worry about little ones, we politely request no children under 8."),
                            m("p.padding-bottom-none", "3. Transportation to the venue is up to individual guests. If you are staying in Boulder we recommend renting a car for transportation to and from the venue, which is about a 30 minute drive outside of Boulder.")
                        ]),
                    ]),
                    m("div.text-section", [
                        m("h1", "The Wedding Party")
                    ]),
                    m("div.second-section", [
                        m("div.about-party-section", [
                            m("div.about-item", [
                                m("img", {src: "/img/amanda.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Which one is the maid of honor?")
                                ]),
                            ]),
                            m("div.about-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("h1", "Amanda Statham")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Manders or Amanda Panda")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "J. Biebs...Is it too late now to say sorry?")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "This is a sore subject #glutenintolerance ")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "A red panda, they are adorable, mischievous, and live in the forest.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Brittney?"),
                                        m("p", "We met on our first day of our education classes at Western. I thought she was way too cool to be friends with me, but turns out she’s a dork too and we've been besties ever since!")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Brittney first tell you about Aaron?"),
                                        m("p", "She met a cute, nerdy, awkward guy and she was equal parts excited and nauseous about it.")
                                    ])
                                ])
                            ])
                        ]),
                        m("div#even.about-party-section", [
                            m("div#two.about-item", [
                                m("img", {src: "/img/ryan.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Straight outta Monte Vista."),
                                ]),
                            ]),
                            m("div#one.about-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("h1", "Ryan Wright")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Ry-NO!")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Country Music")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Raisin Bran Crunch")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Mountain Lion. Its a cat AND a lion")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Aaron?"),
                                        m("p", "I was looking for a roommate, Aaron said he wanted to live in Crested Butte. I told him that was dumb and he should live with me. End of story.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Aaron first tell you about Brittney?"),
                                        m("p", "Soo...she likes Jay-Z.")
                                    ])
                                ])
                            ])
                        ]),
                        m("div.about-party-section", [
                            m("div.about-item", [
                                m("img", {src: "/img/bailey.jpg"}),
                                m("div.overlay", [
                                    m("h1", "I'm the one on the left.")
                                ]),
                            ]),
                            m("div.about-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("h1", "Bailey Jones")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Boo, or Booski")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Once upon a time")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Reeses puffs")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Otter, they are fun and fluffy and adorable, and they spend their lives in the water")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Brittney?"),
                                        m("p", "Same program, and roomies and besties from junior year on!")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Brittney first tell you about Aaron?"),
                                        m("p", "That she liked this guy, he was totally her type, a shy, soft spoken, sweet and nerdy (in the best way) ginger guy.")
                                    ])
                                ])
                            ])
                        ]),
                        m("div#even.about-party-section", [
                            m("div#two.about-item", [
                                m("img", {src: "/img/ty.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Mucho take it easy."),
                                ]),
                            ]),
                            m("div#one.about-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("h1", "Ty Allen")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Ty Daddy Dollars")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Reggae Music")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Golden Grahams")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Killer Whale bc I love Free Willy and Orcas are bad ass. They kill Great Whites.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Aaron?"),
                                        m("p", "Met Aaron through Ryan Wright, when I moved to Boulder in Aug. 2013. Been close since.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Aaron first tell you about Brittney?"),
                                        m("p", "Aaron first told me about Brittney by saying (with 3% enthusiasm, standard Aaron inflection...) 'So...I met a girl.'")
                                    ])
                                ])
                            ])
                        ]),
                        m("div.about-party-section", [
                            m("div.about-item", [
                                m("img", {src: "/img/aracely.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Weeeee!"),
                                ]),
                            ]),
                            m("div.about-item", [
                                 m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("h1", "Aracely See")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Cely, Chely")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Taylor Swift...shhhhhh <--- Who isn't? signed Aaron.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Honey Nut Cheerios")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Wolf because they are loyal, intelligent and a protector")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Brittney?"),
                                        m("p", "Freshman year of HS when we took body shaping class & bonded over eye liner in the locker room.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Brittney first tell you about Aaron?"),
                                        m("p", "She mentioned a guy who she met at church who friended her on FB and creeped on her. Naturally, I asked for his name & creeped on him for her!")
                                    ])
                                ])
                            ])
                        ]),
                        m("div#even.about-party-section", [
                            m("div#two.about-item", [
                                m("img", {src: "/img/chase.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Wouldn't hurt a fly."),
                                ]),
                            ]),
                            m("div#one.about-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("h1", "Chase Davis")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Chavis")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Taylor Swift. <--- Told ya, Aaron. She is great.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Cracklin’ Oat Bran")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Cheetah, cause they’re the fastest.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Aaron?"),
                                        m("p", "I met Aaron in Gunnison through church.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Aaron first tell you about Brittney?"),
                                        m("p", "She talks a lot.")
                                    ])
                                ])
                            ])
                        ])
                    ])
                ])
            ])
        ])
    }
}

module.exports = weddingDetails;