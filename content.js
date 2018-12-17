

var c = "<div id='mainMenu' class='closed'><div id='openClose'>&rarr;</div><ul>"

c += "<li class='frameLink'><a class='menuLink' href='http://officehours.codepanel.in/temp/jasmineLeung/'>Jasmine Leung: Scroll</a></li>"
c += "<li class='frameLink'><a class='menuLink' href='http://officehours.codepanel.in/temp/Pfielder_P/'>Patricia Pfelder: Hover</a></li>"
c += "<li class='frameLink'><a class='menuLink' href='http://officehours.codepanel.in/temp/NinetMoon/'>Ninet Moon: You're My Type</a></li>"
c += "<li>—</li>"
c += "<li class='frameLink'><a class='menuLink' href='http://officehours.codepanel.in/temp/JoyceDiep/'>Joyce Diep: An Average Day</a></li>"
c += "<li class='frameLink'><a class='menuLink' href='http://officehours.codepanel.in/temp/KateMcDermott/'>Kate McDermott: The Digital Void</a></li>"
c += "<li>—</li>"
c += "<li class='frameLink'><a class='menuLink' href='http://officehours.codepanel.in/temp/GraceWalker.Loop/'>Grace Walker: Loop</a></li>"
c += "<li class='frameLink'><a class='menuLink' href='https://webspace.ocad.ca/~jl13ql/fakenews-gradex/pizzagatePetri.html'>Jasmine Leung: Fake News</a></li>"
c += "<li class='frameLink'><a class='menuLink' href='http://hyper-essay.shaheer.info/'>Shaheer Tarar: Hyper Essay</a></li>"
c += "<li class='frameLink'><a class='menuLink' href='http://drugstrat.codepanel.in'>Various: DrugStrat</a></li>"
c +- "</ul></div>"

$("body").append(c)

$("#mainMenu").hover(function(){
	$(this).addClass("open").removeClass("closed")
}, function(){
	$(this).addClass("closed").removeClass("open")
})

$("li.frameLink").click(function(){
	$("#mainMenu").addClass("closed").removeClass("open")
	$("#main").attr("src",$(this).attr("data-url"));
});