$(document).ready(function () {
    navigationControl.Initialize();
    sliderControl.Initialize();
    testimonyControl.Initialize();
});

var navigationControl = {
    navSection: $(".nav-section"),
    navSubSection: $(".nav-subsection"),
    navControl: $("#nav-control"),

    Initialize: function () {
        if (!navigationControl.navControl.hasClass("expanded"))
        {
            navigationControl.HideSubSections();
        }

        $(".nav-section > span").click(function () {
            navigationControl.SelectSection($(this).parent());
        });

        navigationControl.navSubSection.click(function () {
            navigationControl.SelectSubSection(this);
        });
    },

    CleanSelection: function () {
        navigationControl.navSection.removeClass("selected");
    },

    CleanSubSelection: function () {
        navigationControl.navSubSection.removeClass("selected");
    },

    HideSubSections: function () {
        navigationControl.navSubSection.hide();
    },

    SelectSection: function (elem) {
        navigationControl.CleanSelection();
        $(elem).addClass("selected");
        if ($(elem).attr("data") != null) {
            navigationControl.HideSubSections();
            window.location.href = $(elem).attr("data");
        }
        else {
            $(elem).children(".nav-subsection").show();
            event.stopPropagation();
        }
    },

    SelectSubSection: function (elem) {
        navigationControl.CleanSubSelection();
        $(elem).addClass("selected");
        if ($(elem).attr("data") != null) {
            navigationControl.HideSubSections();
            window.location.href = $(elem).attr("data");
        }
    }
};

var sliderControl = {
    
    Initialize: function () {
        if ($(".square").length>0)
        {
            $(".square").removeClass("on");
            $(".square:first").addClass("on");
            sliderControl.StartAnimation();
        }
    },

    StartAnimation: function () {
        setTimeout(sliderControl.SelectNext, 3000);
    },

    SelectNext: function () {
        var current = $(".square.on");
        var next = $(current).next();
        var url = '';
        var template = '';
        if (next.attr('class') != 'square') {
            next = $(".square:first");
        }
        template = next.attr('data');
        url = "\\" + next.attr('data') + ".html";
        sliderControl.SetLinkUrl(url);
        sliderControl.SetTemplate(template);
        current.removeClass('on');
        next.addClass('on');
        sliderControl.StartAnimation();
    },

    SetLinkUrl: function (newUrl)
    {
        $(".read-more").attr("href",newUrl);
    },

    SetTemplate: function (templateId)
    {
        $("#feature-header h1").text(resources[templateId]);
        $("#feature-header").attr("class",templateId);
    },
};

var resources = {
    "lets" : "Let's spend a couple of hours talking about a guy in Lycra",
    "wake" : "Wake from the sleep of habit and view your organisation from a fresh perspective",
    "what" : "What impact has the last hundred days had on you...?",
    "because": "Because I'm afraid to say that if you give a man a target to aim at, he will...",
    "building": "Building better relationships with the help of Carravaggio's Cardsharps"
};

var testimonyControl = {
    TestimonyNumber : 0,

    Initialize: function () {
        if ($(".testimonyText").length > 0)
        {
            testimonyControl.ShowTestimony();
        }
    },

    ShowTestimony: function ()
    {
        $(".testimonyText").hide();
        $("#testimony" + testimonyControl.TestimonyNumber).fadeIn("slow");
    },

    Previous: function()
    {
        testimonyControl.TestimonyNumber -=1;
        testimonyControl.ShowTestimony();
    },
    
    Next: function()
    {
        testimonyControl.TestimonyNumber +=1;
        testimonyControl.ShowTestimony();
    }


}
