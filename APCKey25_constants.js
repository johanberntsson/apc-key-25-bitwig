// Midi notes that are used to change behavior, launch clips, etc.
var controlNote =
{
   record :         93,
   playPause :     91,
   shift :          98,
   clipStop :      82,
   solo :           83,
   recArm :        84,
   mute :           85,
   select :         86,
   stopAllClips : 81,
   up :             64,
   down :           65,
   left :           66,
   right :          67,
   volume :         68,
   pan :            69,
   send :           70,
   device :         71

   // Grid
   // 32 33 34 ...
   // 24
   // 16
   // 8
   // 0
}

// Just the dimensions of the grid
var gridWidth = 8;
var gridHeight = 5;

// Midi control change messages from the 8 knobs
var lowestCc = 48;
var highestCc = 55;

// Note velocities to use in responses to trigger the grid notes
var gridButtonMode =
{
   off :            0,
   green :          1,
   blinkingGreen : 2,
   red :            3,
   blinkingRed :   4,
   amber :          5,
   blinkingAmber : 6
}

var trackButtonMode =
{
   off :            0,
   red :            1,
   blinkingRed :   2
}

var sceneButtonMode =
{
   off :            0,
   green :          1,
   blinkingGreen : 2
}