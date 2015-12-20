var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
    boulderMap = require("./widgets/map.js"),
	footer = require('./footer.js');

var weddingDetails = {
    view: function(ctrl) {
        return m("div", [
            menu,
            mobileMenu,
            m("div.hero-section.wedding-hero.drop-shadow", [
                m("h1", "Wedding Day Information")
            ]),
            m("main.main-border-wedding-details", [
                m("div.main-section", [
                    m("div.info-section", [
                        m("div.info-item", [
                            m("div.details", [
                                m("h1", "Day of Details"),
                                m("h2", "Address and Time", [
                                    m("p", "4121 Ute Highway, Lyons, CO 80540"),
                                    m("p", "Cermony starts at 4pm and reception to follow")
                                ]),
                                m("h2", "Curtiousy and Reminders", [
                                    m("p", "The whole event will be outdoors, refer to the Boulder Info page for weather information"),
                                    m("p", "We ask that you leave childern at home with a sitter and enjoy date night.  Out of town guests are welcome to bring your kids")
                                ])
                            ]),
                        ]),
                        m("div.info-item", [
                            boulderMap,
                        ]),
                    ]),
                    m("div.second-section", [
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/amanda.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Gettin married right after this"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Main of Honor: Amanda"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/ryan.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Straight outta Monte Vista"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Best Man: Ryan"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/bailey.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Gonna be a momma"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Bridesmaid: Bailey"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/ty.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Mucho take it easy"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Groomsman: Ty"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/aracely.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Weeeee!"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Bridesmaid: Aracely"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/chase.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Hazaah!"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Groomsman: Chase"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ])
                    ]),
                footer(),
                ])
            ])
        ])
    }
}

module.exports = weddingDetails;