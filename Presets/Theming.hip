Processor 
Type SynthChain ID 	Theming Bypassed Gain 	      �?Balance 	        VoiceLimit 	      P@KillFadeTime 	      4@IconColour 0 packageName  BuildVersion �  EditorStates BodyShown 0 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type ScriptProcessor ID Interface Bypassed Script �include("Theme.js");
include("AboutPage.js");

Content.makeFrontInterface(1100, 600);

// Pages
const var scopePage = Content.getComponent("display-page-scope");
const var aboutPage = Content.getComponent("display-page-about");
const var eqPage = Content.getComponent("display-page-eq");

// Components
const var Button1 = Content.getComponent("Button1");
const var btnIconLogo = Content.getComponent("btn-icon-logo");
const var PresetBrowserButton = Content.getComponent("PresetBrowser-Button");
const var PresetBrowserArrowLeft = Content.getComponent("PresetBrowser-leftArrow");
const var PresetBrowserArrowRight = Content.getComponent("PresetBrowser-rightArrow");

// Button handler
btnIconLogo.setControlCallback(onLogoClick);
Button1.setControlCallback(onControlBtn);

// Knob handler
Content.getComponent("knob-eq-low-cut").setControlCallback(onFreqKnob);
Content.getComponent("knob-eq-high-cut").setControlCallback(onFreqKnob);


// Timers
const eqTimer = Engine.createTimerObject();
eqTimer.setTimerCallback(function() {
	aboutPage.set('visible', false);
	eqPage.set('visible', false);
	scopePage.set('visible', true);
});



inline function onControlBtn(component, value) 
{
	toggleTheme();
	repaint();
}

inline function onLogoClick(component, value) {
	aboutPage.set('visible', value);
	eqPage.set('visible', false);
	scopePage.set('visible', !value);
}


inline function onFreqKnob(component, value)
{
	eqTimer.startTimer(1000);
	aboutPage.set('visible', false);
	eqPage.set('visible', true);
	scopePage.set('visible', false);
};



function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
  EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1  ChildProcessors   Content  Control type ScriptButton id PresetBrowser-leftArrow value 	         Control type ScriptButton id PresetBrowser-rightArrow value 	         Control type ScriptButton id PresetBrowser-Button value 	         Control type ScriptSlider id knob-delay-l-delay value 	   @�z�? Control type ScriptSlider id knob-delay-r-delay value 	   �Q��? Control type ScriptSlider id knob-delay-r-feedback value 	   ����? Control type ScriptSlider id knob-delay-l-feedback value 	   ����? Control type ScriptSlider id knob-delay-mix value 	         Control type ScriptButton id 	Button2 value 	         Control type ScriptButton id 	Button3 value 	         Control type ScriptSlider id knob-eq-low-cut value 	      �? Control type ScriptSlider id knob-eq-high-cut value 	   �G��? Control type ScriptSlider id knob-color value 	         Control type ScriptSlider id knob-reverb-space value 	         Control type ScriptSlider id knob-reverb-damping value 	         Control type ScriptSlider id knob-reverb-stereo value 	         Control type ScriptSlider id knob-reverb-mix value 	   �Q��? Control type ScriptSlider id knob-main-output value 	         Control type ScriptSlider id knob-main-mix value 	   �Q��? Control type ScriptButton id btn-icon-logo value 	      �? UIData  ContentProperties DeviceType 	Desktop 	Component type ScriptPanel id background x 	        y 	        width 	     0�@height 	     ��@opaque  Component type ScriptFloatingTile id Header x 	        y 	        ContentType AudioAnalyser bgColour 	333�    itemColour 	����    itemColour2 	DDD�    textColour 	        Data D{
  "ProcessorId": "",
  "Index": -1,
  "FollowWorkspace": false
} height 	      T@width 	     0�@Component type ScriptLabel id label-reach x 	        y 	        text REACH itemColour2 	�[    width 	     @e@height 	      N@textColour 	�����fontSize 	      D@parentComponent Header editable  Component type ScriptPanel id PresetBrowser-Container x 	     @e@y 	      4@parentComponent Header width 	     @e@height 	      >@itemColour2 	���     itemColour 	���     textColour 	���     bgColour 	���     Component type ScriptButton id PresetBrowser-leftArrow x 	      1@y 	      $@width 	      $@height 	      4@text icon-leftArrow parentComponent PresetBrowser-Container  Component type ScriptButton id PresetBrowser-rightArrow x 	      >@y 	      $@width 	      $@height 	      4@text icon-rightArrow parentComponent PresetBrowser-Container  Component type ScriptButton id PresetBrowser-Button x 	      I@y 	        width 	      ^@height 	      >@text label-Blackhole parentComponent PresetBrowser-Container bgColour 	ii��    textColour 		� �    itemColour 	����    itemColour2 	�|$�     Component 
type ScriptPanel id 	display x 	      r@y 	      T@width 	     �}@height 	     �p@bgColour 	   �    itemColour 	   �    itemColour2 	   �    borderRadius 	      @Component 	type ScriptPanel id display-page-scope x 	        y 	        width 	     `}@height 	     �l@parentComponent 	display itemColour 	   �    itemColour2 	   �    Component type ScriptFloatingTile id FloatingTile1 x 	      4@y 	      4@ContentType AudioAnalyser bgColour 	   �    itemColour 	����    itemColour2 	DDD�    textColour 	        Data H{
  "ProcessorId": "Scope",
  "Index": 2,
  "FollowWorkspace": false
} width 	     �z@height 	      i@parentComponent display-page-scope  Component 
type ScriptPanel id display-page-about x 	        y 	        width 	     `}@height 	     �p@parentComponent 	display itemColour 	   �    itemColour2 	   �    visible     Component type ScriptLabel id Label2 x 	     @e@y 	     �[@text SINUSLABS fontSize 	      ,@parentComponent display-page-about  Component 
type ScriptButton id 	Button1 x 	     �t@y 	     �l@enableMidiLearn saveInPreset text text-Dark parentComponent display-page-about width 	      ^@height 	      >@ Component type ScriptPanel id largeLogo x 	     �i@y 	      D@parentComponent display-page-about width 	      N@height 	      N@ Component 
type ScriptPanel id display-page-eq x 	        y 	        width 	     �}@height 	     �p@parentComponent 	display itemColour 	   �    itemColour2 	   �    visible     Component type ScriptFloatingTile id display-eq x 	      $@y 	      $@ContentType FilterDisplay bgColour 	333     itemColour 	����    itemColour2 	q    Data F{
  "ProcessorId": "EQ",
  "Index": -1,
  "FollowWorkspace": false
} width 	      |@height 	     �k@parentComponent display-page-eq  Component type ScriptLabel id ScriptLabel1 x 	      $@y 	     �l@width 	      Y@height 	      >@parentComponent 	display text Identifier : Value  Component type ScriptPanel id panel-delay x 	      4@y 	      T@width 	     @p@height 	     @@borderRadius 	      @Component 
type ScriptLabel id label-delay x 	      $@y 	      $@parentComponent panel-delay text DELAY alignment left textColour 	�����editable fontSize 	      4@ Component type ScriptPanel id kontainer-arc-delay-l-delay x 	      $@y 	      I@width 	     �V@height 	      ^@text label-feedback bgColour 	���     itemColour 	        itemColour2 	        textColour 	���     parentComponent panel-delay Component 
type ScriptLabel id label-knob-delay-l-delay x 	        y 	      T@width 	      Y@height 	      >@text 	L DELAY parentComponent kontainer-arc-delay-l-delay textColour 	�����editable  Component type ScriptSlider id knob-delay-l-delay x 	      $@y 	      $@width 	     �Q@height 	     �Q@bgColour 	����    itemColour 	����    text label-test parentComponent kontainer-arc-delay-l-delay processorId DELAY parameterId DelayTimeLeft  Component type ScriptPanel id kontainer-arc-delay-r-delay x 	      d@y 	      I@height 	      ^@itemColour2 	        itemColour 	        bgColour 	���     textColour 	���     width 	     �V@parentComponent panel-delay Component type ScriptLabel id label-delay-r-delay x 	      4�y 	      T@textColour 	�����text 	R DELAY parentComponent kontainer-arc-delay-r-delay editable  Component 	type ScriptSlider id knob-delay-r-delay x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-delay-r-delay processorId DELAY parameterId DelayTimeRight  Component type ScriptPanel id  kontainer-arc-delay-r-feedback x 	      d@y 	      i@width 	     �V@height 	      ^@parentComponent panel-delay Component 	type ScriptSlider id knob-delay-r-feedback x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent  kontainer-arc-delay-r-feedback processorId DELAY parameterId FeedbackRight  Component 
type ScriptLabel id label-delay-r-feedback x 	        y 	      T@width 	     �V@height 	      4@text R FEEDBACK textColour 	�����parentComponent  kontainer-arc-delay-r-feedback editable  Component type ScriptPanel id  kontainer-arc-delay-l-feedback x 	      $@y 	      i@parentComponent panel-delay height 	      ^@width 	     �V@Component 	type ScriptSlider id knob-delay-l-feedback x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent  kontainer-arc-delay-l-feedback processorId DELAY parameterId FeedbackLeft  Component 
type ScriptLabel id label-delay-l-feedback x 	        y 	      T@text L FEEDBACK width 	     �V@height 	      4@textColour 	�����parentComponent  kontainer-arc-delay-l-feedback editable  Component type ScriptPanel id kontainer-arc-delay-mix x 	      T@y 	      w@parentComponent panel-delay width 	     �V@height 	      ^@Component 	type ScriptSlider id knob-delay-mix x 	      $@y 	      $@parentComponent kontainer-arc-delay-mix width 	     �Q@height 	     �Q@processorId DELAY parameterId Mix  Component 
type ScriptLabel id label-delay-mix x 	        y 	      T@width 	     �V@height 	      >@text MIX textColour 	�����parentComponent kontainer-arc-delay-mix editable  Component type ScriptButton id 	Button2 x 	      ^@y 	      T@parentComponent panel-delay width 	      4@height 	      4@text icon-linkIcon  Component type ScriptButton id 	Button3 x 	      ^@y 	     `m@parentComponent panel-delay width 	      4@height 	      4@text icon-linkIcon  Component type ScriptPanel id 
panel-eq x 	      r@y 	     �v@width 	     �p@height 	     �k@borderRadius 	      @Component 
type ScriptLabel id 
label-eq x 	      $@y 	      $@alignment left text EQ parentComponent 
panel-eq textColour 	�����editable fontSize 	      4@ Component 
type ScriptPanel id kontainer-arc-eq-low-cut x 	      4@y 	      N@textColour 	���     itemColour2 	        itemColour 	        width 	     �V@height 	      ^@parentComponent 
panel-eq Component 	type ScriptSlider id knob-eq-low-cut x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-eq-low-cut processorId EQ parameterId Freq  Component 
type ScriptLabel id label-eq-low-cut x 	        y 	      T@width 	      T@height 	      >@text 	LOW CUT textColour 	�����parentComponent kontainer-arc-eq-low-cut editable  Component type ScriptPanel id kontainer-arc-eq-high-cut x 	     �a@y 	      N@width 	     �V@height 	      ^@parentComponent 
panel-eq Component type ScriptSlider id knob-eq-high-cut x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-eq-high-cut  Component 
type ScriptLabel id label-eq-high x 	        y 	      T@width 	     �V@height 	      >@text 
HIGH CUT textColour 	�����parentComponent kontainer-arc-eq-high-cut editable  Component type ScriptPanel id panel-color x 	     ��@y 	     �v@width 	      i@height 	     �k@Component 
type ScriptLabel id label-color x 	      $@y 	      $@text COLOR fontSize 	      4@alignment left textColour 	�����parentComponent panel-color editable  Component type ScriptPanel id kontainer-arc-color x 	      N@y 	      N@width 	     �V@height 	      ^@parentComponent panel-color Component 	type ScriptSlider id knob-color x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-color processorId Saturator1 parameterId Saturation  Component 
type ScriptLabel id label-knob-color-text x 	        y 	      T@width 	     �V@height 	      4@text COLOR textColour 	�����parentComponent kontainer-arc-color editable  Component type ScriptPanel id panel-reverb x 	     �@y 	      T@width 	     Ps@height 	     �p@borderRadius 	      @Component 
type ScriptLabel id label-reverb x 	      $@y 	      $@text REVERB alignment left parentComponent panel-reverb textColour 	�����editable fontSize 	      4@ Component type ScriptPanel id kontainer-arc-reverb-space x 	      D@y 	      I@width 	     �V@height 	     �[@parentComponent panel-reverb Component type ScriptSlider id knob-reverb-space x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-reverb-space  Component 
type ScriptLabel id label-knob-reverb-space x 	        y 	      T@text SPACE width 	     �V@height 	      4@textColour 	�����parentComponent kontainer-arc-reverb-space editable  Component type ScriptPanel id kontainer-arc-reverb-damping x 	     @e@y 	      I@width 	     �V@height 	     �[@parentComponent panel-reverb Component type ScriptSlider id knob-reverb-damping x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-reverb-damping  Component 
type ScriptLabel id label-knob-reverb-damping x 	        y 	      T@text 	DAMPING width 	     �V@height 	      4@textColour 	�����parentComponent kontainer-arc-reverb-damping editable  Component type ScriptPanel id kontainer-arc-reverb-stereo x 	      D@y 	      d@width 	     �V@height 	     �[@parentComponent panel-reverb Component type ScriptSlider id knob-reverb-stereo x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-reverb-stereo  Component 
type ScriptLabel id label-knob-reverb-stereo x 	        y 	      T@width 	     �V@height 	      4@text STEREO textColour 	�����parentComponent kontainer-arc-reverb-stereo editable  Component type ScriptPanel id kontainer-arc-reverb-mix x 	     @e@y 	      d@width 	     �V@height 	     �[@parentComponent panel-reverb Component 
type ScriptLabel id label-knob-reverb-mix x 	        y 	      T@width 	     �V@height 	      4@text MIX textColour 	�����parentComponent kontainer-arc-reverb-mix editable  Component type ScriptSlider id knob-reverb-mix x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-reverb-mix  Component type ScriptPanel id panel-main x 	     �@y 	     �v@width 	     @s@height 	     �k@borderRadius 	      @Component 
type ScriptLabel id label-main x 	      $@y 	      $@text MAIN alignment left textColour 	�����editable fontSize 	      4@parentComponent panel-main  Component type ScriptPanel id kontainer-arc-main-output x 	     @e@y 	      N@width 	     �V@height 	      ^@parentComponent panel-main Component 
type ScriptLabel id label-knob-main-output x 	        y 	      T@width 	     �V@height 	      4@text OUTPUT textColour 	�����parentComponent kontainer-arc-main-output editable  Component type ScriptSlider id knob-main-output x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-main-output  Component type ScriptPanel id kontainer-arc-main-mix x 	      >@y 	      N@width 	     �V@height 	      ^@parentComponent panel-main Component 
type ScriptLabel id label-knob-main-mix x 	        y 	      T@text MIX width 	     �V@height 	      4@textColour 	�����parentComponent kontainer-arc-main-mix editable  Component type ScriptSlider id knob-main-mix x 	      $@y 	      $@width 	     �Q@height 	     �Q@parentComponent kontainer-arc-main-mix  Component type ScriptButton id btn-icon-logo x 	     h�@y 	      4@text icon-logo width 	      >@height 	      >@scaleFactor 	      �? Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type 	CurveEq ID EQ Bypassed NumFilters    Band0 	   ��p�?Band1 	      4@Band2 	   @33�?Band3 	      �?Band4 	      �?Band5 	      8�Band6 	     &�@Band7 	      �?Band8 	      �?Band9 	        FFTEnabled EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type Delay ID DELAY Bypassed DelayTimeLeft 	        DelayTimeRight 	        FeedbackLeft 	   ����?FeedbackRight 	   ����?LowPassFreq 	     ��@HiPassFreq 	      D@Mix 	        TempoSync 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor 	Type SimpleReverb ID Simple Reverb1 Bypassed RoomSize 	   ����?Damping 	   @33�?WetLevel 	   ����?DryLevel 	   ����?Width 	   ����?FreezeMode 	   ����?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type Saturator ID Saturator1 Bypassed Saturation 	   @�z�?WetAmount 	      �?PreGain 	        PostGain 	        EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Saturation Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type 
Analyser ID Scope Bypassed BufferSize 	      �@PreviewType 	      @EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type SineSynth ID Sine Wave Generator1 Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 OctaveTranspose 	        SemiTones 	        UseFreqRatio 	        CoarseFreqRatio 	      �?FineFreqRatio 	        SaturationAmount 	        EditorStates BodyShown 1 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor 	Type SimpleEnvelope ID DefaultEnvelope1 Bypassed Monophonic 	        Retrigger 	      �?Intensity 	      �?Attack 	      @Release 	      $@LinearMode 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Attack Time Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� macro_controls  macro name 	Macro 1 value 0.0 midi_cc -1  macro name 	Macro 2 value 0.0 midi_cc -1  macro name 	Macro 3 value 0.0 midi_cc -1  macro name 	Macro 4 value 0.0 midi_cc -1  macro name 	Macro 5 value 0.0 midi_cc -1  macro name 	Macro 6 value 0.0 midi_cc -1  macro name 	Macro 7 value 0.0 midi_cc -1  macro name 	Macro 8 value 0.0 midi_cc -1  MidiAutomation   MPEData Enabled  