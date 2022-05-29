include("Path.js");

const lightTheme = {
	'theme': 'light',
	'background': '0xE0DBDA',
	'text': 4280032284,
	'knobSecondary': '0x5A5857',
	'knobPrimary': '0xC5C3C0',
	'knobBorder': '0xB5B5B5',
	'button': '0xD9D9D9',
	'mainPanel': '0xCCCCCC',
	'panel': '0xD9D9D9',
}

const darkTheme = {
	'theme': 'darkTheme',
	'background': '0x323232',
	'text': 4293125091,
	'knobSecondary': '0x969696',
	'knobPrimary': '0x2D2D2D',
	'knobBorder': '0x333333',
	'button': '0x282828',
	'mainPanel': '0x272727',
	'panel': '0x262626',
}


var Theme = lightTheme;
const DEFAULT_THEME = lightTheme;

const laf = Engine.createGlobalScriptLookAndFeel();

const labels = Content.getAllComponents('label');
const panels = Content.getAllComponents('panel');
const knobContainer = Content.getAllComponents('arc');

// individual panels
const var mainPanel = Content.getComponent("panel-main");
const var pnlBackground = Content.getComponent("background");

// style individual panels
pnlBackground.setPaintRoutine(function(g){g.fillAll(Theme['background']);});
mainPanel.setPaintRoutine(function(g){g.fillAll(Theme['mainPanel']);});

// path for drop shadow
const circularShadow = [110,109,0,0,150,66,0,0,22,66,98,0,0,150,66,10,215,104,66,10,215,104,66,0,0,150,66,0,0,22,66,0,0,150,66,98,236,81,134,65,0,0,150,66,0,0,0,0,10,215,104,66,0,0,0,0,0,0,22,66,98,0,0,0,0,236,81,134,65,236,81,134,65,0,0,0,0,0,0,22,66,0,0,0,0,98,10,215,104,66,0,0,0,0,0,0,150,66,236,81,134,65,0,0,150,66,0,0,22,66,99,101,0,0];
const var knobShadow = Content.createPath();
knobShadow.loadFromData(circularShadow);

const var logo = Content.createPath();
logo.loadFromData(logoPath);

// repaint all panels and labels to respect new colors
function repaint() {	
	mainPanel.repaintImmediately();
	pnlBackground.repaintImmediately();
	repaintPanels();
	styleLabels();
}

function styleLabels() 
{
	for (l in labels ) {
		l.setColour(3, Theme['text']);
	} 
}

function repaintPanels() {
	for (p in panels) {
		p.repaintImmediately();
	}
}

for (p in panels) {
	p.setPaintRoutine(function(g){g.fillAll(Theme['panel']);});
}

styleLabels();

for (k in knobContainer) {
	// knob styling
	k.setPaintRoutine(function(g){
	    
	    var startOffset = 2.5;
	    var arcThickness = 3.5;
	    var arcWidth = 2;
	    
	    // Add the arc with the given area and its offsets in radian (0 ... 2*PI)
	    var p1 = Content.createPath();
	    p1.addArc([0, 0, arcWidth, arcWidth], -2.2, 2.2);
	    g.setColour(Theme['knobSecondary']);
	        
	    // this new method returns the scaled bounds with the correct ratio
	    var pathArea = p1.getBounds(40);
	    pathArea[0] = pathArea[0] + 6;
	    pathArea[1] = pathArea[1] + 6;
	        
	    // draws the arc (use the area from above to avoid weird rescaling)
	    g.drawPath(p1, pathArea, 1.5); 
	});
}

laf.registerFunction('drawToggleButton', function(g, obj) {
	
	var a = obj.area;
	if (obj.text.indexOf('icon') != -1) {
		Console.print(obj.text);
		g.setColour(Theme['text']);
		g.fillPath(logo, area);
	}

});
	


laf.registerFunction("drawRotarySlider", function(g, obj)
{
	
	var a = obj.area;
	var start = 2.2;
	var end = start * 2 * obj.valueNormalized - start;
    
  	g.drawDropShadowFromPath(knobShadow, [5, 5, a[2] - 10, a[2] - 10], 0XFF686868, 2, [0, 3]); 
    
    g.setColour(Theme['knobPrimary']);
    g.fillEllipse([4, 4, a[2] - 8, a[3] - 8]);
    
    g.setColour(Theme['knobBorder']);
    g.drawPath(knobShadow, [4, 4, a[2] - 8, a[3] - 8], 2.5);
    
	g.rotate(end, [a[2] / 2, a[3] / 2]);
	
    g.setColour(Theme['knobSecondary']);
    g.fillRoundedRectangle([a[2] / 2 - 8 / 2, 6, 5, 20], 2);  
});

function toggleTheme() {
	if (Theme.theme == 'light') {
		Theme = darkTheme;
	} else {
		Theme = lightTheme;
	}
}



