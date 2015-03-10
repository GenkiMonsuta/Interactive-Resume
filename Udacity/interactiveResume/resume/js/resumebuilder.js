//Json

var bio = {
    "name": "Wahlen Kirste",
    "role": "  Front-end Web Developer",
    "contacts": {
        "mobile": "0495/89.41.05",
        "email": "kirste@codemonkeys.be",
        "github": "https://github.com/GenkiMonsuta",
        "twitter": "https://twitter.com/GenkiMonsuta",
        "location": "Stekene, Belgium"
    },
    "welcomeMessage": "<span style='font-size: 30px'>Welcome</span>. I see you have stumbled upon my resume. Neat. I hope it will give you some insight in me as an up and coming " +
        "Front-end Web Developer. In a bit you can see which schools and online courses I have attended. (Don't forget to check " +
        "out the link to Cat-U. It is as awesome as it is fluffy!) " +
        "Further below you can check out some of the projects I have been working on. They're really rather awesome. I promise. " +
        "When you're done establishing that I am indeed the developer you are looking for, feel free to contact me.<br><br>" +
        "Some of my <span style='font-size: 30px'>Skills</span> as a Front-end Developer include:",
    "skills": ["CSS, ", "Bootstrap, ", "HTML, ", "Javascript ", "and Jquery"],
    "bioPic": "http://i.imgur.com/4qLxLEZ.png?1",
    "view": function () {

        $('#header').append( HTMLheaderName.replace("%data%", bio.name) );
        $('#mainTitle').append(HTMLheaderRole.replace("%data%", bio.role));
        $('#welcomeMessage').append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));

        // show my skills.. IF there are any
        if (bio.skills.length > 0) {
            for (var skill in bio.skills) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }

        // append profile picture
        $('#proPic').append(HTMLbioPic.replace('%data%', bio.bioPic));

        // display contact information (modal under 'contact' in navbar)
        $(".test:last").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $(".test:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $(".test:last").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $(".test:last").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $(".test:last").append(HTMLemail.replace("%data%", bio.contacts.email));

    }
}

var education = {
    "schools": [
        {
            "name": "Maastricht University",
            "location": "Maastricht, the Netherlands",
            "degree": "BA",
            "majors": [" Biological Psychology "],
            "dates": " 2006-2010 ",
            "url": "http://www.maastrichtuniversity.nl/"
        },
        {   "name": "Maastricht University",
            "location": "Maastricht, the Netherlands",
            "degree": "MA",
            "majors": [" Neuroscience "],
            "dates": " 2010-2012 ",
            "url": "http://www.maastrichtuniversity.nl/"
        },
        {   "name": "Ghent University",
            "location": "Ghent, Belgium",
            "degree": "MA",
            "majors": [" Applied Neuroscience "],
            "dates": " 2012-2013 ",
            "url": " https://www.ugent.be/en "
        },
        {   "name": "Cat-U",
            "location": "Kittendorf, Germany",
            "degree": "MA",
            "majors": ["Fluffiness"],
            "dates": " 2014 ",
            "url": " http://www.animalplanet.com/tv-shows/puppy-bowl/games-and-more/kitten-cam/ "
        }
    ],
    "onlineCourse": [
        {
            "title": " Front-end Nano Degree ",
            "school": " Udacity ",
            "dates": " 2015 ",
            "url": "udacity.com"
        },
        {
            "title": " Logic ",
            "school": " Coursera ",
            "dates": " 2014 ",
            "url": "https://www.coursera.org/"
        },
        {
            "title": " Spanish ",
            "school": " DuoLingo ",
            "dates": " 2013 ",
            "url": "https://www.duolingo.com/"
        },
        {
            "title": "Introduction to Nutrition",
            "school": " EdX ",
            "dates": " 2012 ",
            "url": "https://www.edx.org/"
        }
    ],
    "view": function () {
// append education information

        // outside of if-loop because I only want this little introtext once, not above every school.
        $("#educationIntro").append(HTMLschoolStart);

        for (var skool in education.schools) {

            var formattedNameLocation =
                HTMLschoolUrl.replace("%data%", education.schools[skool].url) +
                    HTMLschoolName.replace("%data%", education.schools[skool].name) +
                    HTMLschoolLocation.replace("%data%", education.schools[skool].location);

            $("#education:last").append(formattedNameLocation);
            $("#education:last").append(HTMLschoolDates.replace("%data%", education.schools[skool].dates));
            $("#education:last").append(HTMLschoolDegree.replace("%data%", education.schools[skool].degree));
            $("#education:last").append(HTMLschoolMajor.replace("%data%", education.schools[skool].majors));

        }

        // append online courses

        // outside of if-loop because I don't want it repeating
        $("#onlineCourseIntro").append(HTMLonlineClasses);

        for (var course in education.onlineCourse) {
            $("#onlineCourse:last").append(HTMLonlineURL.replace("%data%", education.onlineCourse[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school));
            $("#onlineCourse:last").append(HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates));
            $("#onlineCourse:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title));
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": " codeMonkeys ",
            "title": " CEO ",
            "location": "Stekene, Belgium",
            "date": " 2014 - current",
            "description": "Executive functions. Of which there are many. Most including the same " +
                "administrative stuff but now with a fancy title. Yay."
        },
        {
            "employer": " codeMonkeys ",
            "title": " CFO ",
            "location": "Antwerp, Belgium",
            "date": " 2013 - 2014",
            "description": "Responsible for all things financial. Such as paying bills and discussing " +
                "financial things with the accountant."
        },
        {
            "employer": " codeMonkeys ",
            "title": " Administration ",
            "location": "Antwerp, Belgium",
            "date": " 2011 - 2013",
            "description": "Picking up the phone, making appointments, inventing a fail-proof filing " +
                "system, providing coffee and making delicious nutricious snacks"
        },
        {
            "employer": " the Cat Inc ",
            "title": " Nutrition Provider ",
            "location": "Maastricht, the Netherlands",
            "date": " 2010 - 2011",
            "description": "Providing cats with cat-treats. It was a glorious time."
        }
    ],
    "view": function () {
        for (job in work.jobs) {

            var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
            $("#workExp:last").append(formattedEmployerTitle);
            $("#workExp:last").append(HTMLworkDates.replace("%data%", work.jobs[job].date));
            $("#workExp:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
            $("#workExp:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        }
    }
}

var projects = {
    "projects": [
        {
            "title": " Birder ",
            "date": " 2013 ",
            "description": " Mobile app that allows you to practice recognising and memorising both latin and dutch names of common European birds ",
            "images": "http://i.imgur.com/a9fgUfv.jpg?1",
            "modalId": "#birdModal"
        },
        {
            "title": " TravelUrr ",
            "date": " 2014 ",
            "description": " Mobile app linked to website for sharing holiday pictures and thoughts with a predetermined set of people ",
            "images": "http://i.imgur.com/21xfBwt.jpg",
            "modalId": "#travelModal"
        },
        {
            "title": " Portfolio ",
            "date": " 2015 ",
            "description": " Mobile app linked to website for sharing holiday pictures and thoughts with a predetermined set of people ",
            "images": "http://i.imgur.com/JeeNx6M.png?1",
            "modalId": "#portfolioModal"
        }
    ],
    "comingProjects": [
        {
            "title": " Coming Soon ",
            "description": " I am working on much more exciting projects. Updates will appear regularly.",
            "images": "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        {
            "title": " Coming Soon ",
            "description": " I am working on much more exciting projects. Updates will appear regularly.",
            "images": "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        {
            "title": " Coming Soon ",
            "description": " I am working on much more exciting projects. Updates will appear regularly.",
            "images": "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        }
    ],
    "projectModal": [
        {
            "id": "birdModal",
            "title": "Birder",
            "images": "http://i.imgur.com/4WZbSE9.png?1",
            "description": "<p>This mobile app allows you to practice your birding skills. Learn to recognise the birds in " +
                "your area. Impress your friends by calling them by their latin names (because nothing says cool " +
                "more like excitingly exclaiming 'oh look friends! A Columba palumbus!).</p><p>Made with Bootstrap, CSS," +
                " HTML, Javascript, Jquery in Phonegap.</p>"
        },
        {
            "id": "travelModal",
            "title": "TravelUrr",
            "images": "http://i.imgur.com/IH1GWLH.png?1",
            "description": "<p>In this project the goal was to create a website you could update via a mobile app. You can share your pictures, " +
                "thoughts, videos, etc with a predetermined set of people who you can invite with a link. A sort of " +
                "travelblog without having to deal with making a blog.</p> <p>Made with Bootstrap, CSS, HTML, Javascript, Jquery in Phonegap.</p>"
        },
        {
            "id": "portfolioModal",
            "title": "Portfolio",
            "images": "http://i.imgur.com/91e0KDU.png?1",
            "description": "<p>A website for showing of your projects. Made for the 'intro in HTML and CSS' Udacity course.</p> " +
                "<p>Made with CSS and HTML.</p>"
        }
    ],
    "view": function () {

        // append project information

        for (proj in projects.projects) {

            $('#projectRow').append(HTMLprojectStart);

            var formattedEverything =
                HTMLprojectImage.replace("%data%", projects.projects[proj].images) +
                HTMLprojectModalId.replace("%data%", projects.projects[proj].modalId) +
                HTMLprojectTitle.replace("%data%", projects.projects[proj].title) +
                HTMLprojectDates.replace("%data%", projects.projects[proj].date) +
                HTMLprojectDescription.replace("%data%", projects.projects[proj].description);

            $(".projectWrap:last").append(formattedEverything);
        }

        // append hidden coming soon projects

        for (var comingproj in projects.comingProjects) {
            $('#moreProjects').append(HTMLcomingprojectStart);
            var formattedcomingImage = HTMLcomingprojectImage.replace("%data%", projects.comingProjects[comingproj].images);
            var formattedcomingprojectTitle = HTMLcomingprojectTitle.replace("%data%", projects.comingProjects[comingproj].title);
            var formattedcomingprojectDescription = HTMLcomingprojectDescription.replace("%data%", projects.comingProjects[comingproj].description);
            var formattedcomingEverything = formattedcomingImage + formattedcomingprojectTitle + formattedcomingprojectDescription;
            $(".comingprojectWrap:last").append(formattedcomingEverything);
        }

        // append modal information
        for (var mod in projects.projectModal) {
            var formattedmodalId = HTMLmodalId.replace("%data%", projects.projectModal[mod].id);
            var formattedmodalImage = HTMLmodalImage.replace("%data%", projects.projectModal[mod].images);
            var formattedmodalTitle = HTMLmodalTitle.replace("%data%", projects.projectModal[mod].title);
            var formattedmodalDescription = HTMLmodalDescription.replace("%data%", projects.projectModal[mod].description);
            var formattedmodalEverything = formattedmodalId + formattedmodalTitle + formattedmodalImage + formattedmodalDescription;
            $("#modalWrapper:last").append(formattedmodalEverything);
        }

        //show more/less button at the end of the projects section
        function showMoreOrLess() {
            var caption = document.getElementById('moreButton').innerHTML;
            if (caption == "Show me more projects!") {
                document.getElementById("moreProjects").style.display = "inline";
                document.getElementById('moreButton').innerHTML = "Show less";
            } else {
                document.getElementById("moreProjects").style.display = "none";
                document.getElementById('moreButton').innerHTML = "Show me more projects!";
            }
        }

        $('#moreButton').click(showMoreOrLess);

    }
}

// array of quotes

quotes = [];
authors = [];
quotes[0] = "10/10. would hire again";
authors[0] = "codeMonkeys";
quotes[1] = "A joy to work with. Always brings biscuits";
authors[1] = "Niki van Cleemput";
quotes[2] = "Won't let me sleep! But the petting is amazing";
authors[2] = "the Cat";
quotes[3] = "Five star quality code!";
authors[3] = "Anonymous";
quotes[4] = "Hard, loyal worker. Will definitely continue to work with her in the future";
authors[4] = "van Cleemput";
quotes[5] = "Smells nice, always takes me out on long walks on the beach. Best-human-ever! ";
authors[5] = "the Dog";
quotes[6] = "Has this annoying, inexplicable ability to never have a bad hair day";
authors[6] = "ex-female coworker";
quotes[7] = "Bakes cakes for every occasion. Once just because it was thursday. Employee of the month for years!";
authors[7] = "Niki";
quotes[8] = "She just keeps watching us, with binoculars.. But she does it with flair, I'll give her that";
authors[8] = "the birds";
quotes[9] = "Beautiful, structured code. Very consistent";
authors[9] = "Company";
quotes[10] = "Doesn't mind the extra hours, will always go the extra mile";
authors[10] = "Former employer";
quotes[11] = "Keeps dressing me up in fish costumes, but I allow it because the overall experience is awesome!";
authors[11] = "the Kitty";


var inspirationalQuotes = [
    {
        "quote": "10/10. would hire again",
        "author": "codeMonkeys"
    },
    {
        "quote": "A joy to work with. Always brings biscuits",
        "author": "Niki van Cleemput"
    },
    {
        "quote": "Won't let me sleep! But the petting is amazing",
        "author": "the Cat"
    },
    {
        "quote": "Five star quality code!",
        "author": "Anonymous"
    },
    {
        "quote": "Hard, loyal worker. Will definitely continue to work with her in the future",
        "author": "van Cleemput"
    },
    {
        "quote": "Smells nice, always takes me out on long walks on the beach. Best-human-ever!",
        "author": "the Dog"
    }
];


// document.ready

$(document).ready(function () {

    function rotateQuotes(){
        var index = Math.floor(Math.random() * (inspirationalQuotes.length - 1) );
        $("#rotate")
            .text(inspirationalQuotes[index].quote + "  --" + inspirationalQuotes[index].author)
            .fadeIn()
            .delay(3000)
            .fadeOut(400, rotateQuotes);
    }

    bio.view();
    education.view();
    work.view();
    projects.view();

    rotateQuotes();

    //smooth anchor scrolling
    $('.scrollLink').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // google maps
    $("#mapDiv").append(googleMap);

    // show click locations in console.log
    $(document).click(function (loc) {
        var x = loc.pageX;
        var y = loc.pageY;
        console.log(logClicks(x, y));
    });

    //Back-to-top button
    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })


});








