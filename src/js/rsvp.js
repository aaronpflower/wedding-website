var m = require('mithril');

var Rsvp = {
    controller: function() {
    },
    view: function(ctrl) {
        return m("div", [
            m("div.hero-wrapper", [
                m("div.hero-item", [
                    m("img", {src: "/img/rsvp-hero.jpg"})
                ]),
                m("div.hero-content", [
                    m("h1", "How to RSVP")
                ])
            ]),
            m("main.main-border-rsvp", [
                m("div.main-section", [
                    m("div.step-section", [
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Paperless Post"),
                                m("div.step-left", [
                                    m("p", "If you received an invitation through Paperless Post, please RSVP using the prompts provided in the invitation.")
                                ])
                            ])
                        ])      
                    ]),
                    m("div.step", [
                        m("div.step-content.last", [
                            m("h2", "Snail Mail"),
                            m("div.step-left", [
                                m("p", "If you received an invitation through the mail, please send the enclosed RSVP card using the pre-addressed envelope."),
                            ])
                        ])
                    ])
                ])
            ])
        ])
    }
}

module.exports = Rsvp;