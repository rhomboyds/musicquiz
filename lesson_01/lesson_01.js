// Based off of Dr. B's Music Theory: Lesson 01 - https://youtu.be/ICDPWP6HUbk

/*
******************
** MAJOR SCALES **
******************
SHARP     No. of Accidentals    FLAT
                  C              
  G ------------- 1 ------------ F
  D ------------- 2 ------------ Bb
  A ------------- 3 ------------ Eb
  E ------------- 4 ------------ Ab
  B ------------- 5 ------------ Db
  F# ------------ 6 ------------ Gb
  C# ------------ 7 ------------ Cb

******************
** MINOR SCALES **
******************
To generate a particular minor scale, first start with the major scale with
the same letter name...

MINOR NATURAL SCALE = lower 3,6,7 notes by 1 semitone
MINOR HARMONIC SCALE = lower 3,6 notes by 1 semitone
MINOR MELODIC SCALE = lower 3 note by 1 semitone (ascending)
                      lower 3,6,7 notes by 1 semitonre (descending)


*/



// DEFINE ALL SCALES WITH "SCALE NAME" AS THE KEY AND "SCALE NOTES" AS THE VALUES
var scales_dict = {
    // MAJOR SCALES
    "C Major" : ["C","D","E","F","G","A","B","C",],
    "F Major" : ["F","G","A","Bb","C","D","E","F",],
    "Bb Major" : ["Bb","C","D","Eb","F","G","A","Bb",],
    "Eb Major" : ["Eb","F","G","Ab","Bb","C","D","Eb",],
    "Ab Major" : ["Ab","Bb","C","Db","Eb","F","G","Ab",],
    "Db Major" : ["Db","Eb","F","Gb","Ab","Bb","C","Db",],
    "Gb Major" : ["Gb","Ab","Bb","Cb","Db","Eb","F","Gb",],
    "Cb Major" : ["Cb","Db","Eb","Fb","Gb","Ab","Bb","Cb",],
    "G Major" : ["G","A","B","C","D","E","F#","G",],
    "D Major" : ["D","E","F#","G","A","B","C#","D",],
    "A Major" : ["A","B","C#","D","E","F#","G#","A",],
    "E Major" : ["E","F#","G#","A","B","C#","D#","E",],
    "B Major" : ["B","C#","D#","E","F#","G#","A#","B",],
    "F# Major" : ["F#","G#","A#","B","C#","D#","E#","F#",],
    "C# Major" : ["C#","D#","E#","F#","G#","A#","B#","C#",],
    // MINOR NATURAL SCALES
    "C Minor Natural" : ["C","D","Eb","F","G","Ab","Bb","C",],
    "F Minor Natural" : ["F","G","Ab","Bb","C","Db","Eb","F",],
    "Bb Minor Natural" : ["Bb","C","Db","Eb","F","Gb","Ab","Bb",],
    "Eb Minor Natural" : ["Eb","F","Gb","Ab","Bb","Cb","Db","Eb",],
    "Ab Minor Natural" : ["Ab","Bb","Cb","Db","Eb","Fb","Gb","Ab",],
    "Db Minor Natural" : ["Db","Eb","Fb","Gb","Ab","Bbb","Cb","Db",],
    "Gb Minor Natural" : ["Gb","Ab","Bbb","Cb","Db","Ebb","Fb","Gb",],
    "Cb Minor Natural" : ["Cb","Db","Ebb","Fb","Gb","Abb","Bbb","Cb",],
    "G Minor Natural" : ["G","A","Bb","C","D","Eb","Fn","G",],
    "D Minor Natural" : ["D","E","Fn","G","A","Bb","Cn","D",],
    "A Minor Natural" : ["A","B","Cn","D","E","Fn","Gn","A",],
    "E Minor Natural" : ["E","F#","Gn","A","B","Cn","Dn","E",],
    "B Minor Natural" : ["B","C#","Dn","E","F#","Gn","An","B",],
    "F# Minor Natural" : ["F#","G#","An","B","C#","Dn","En","F#",],
    "C# Minor Natural" : ["C#","D#","En","F#","G#","An","Bn","C#",],
    // MINOR HARMONIC SCALES
    // "C Minor Harmonic" : ["C","D","Eb","F","G","Ab","B","C",],
    // "F Minor Harmonic" : ["F","G","Ab","Bb","C","Db","E","F",],
    // "Bb Minor Harmonic" : ["Bb","C","Db","Eb","F","Gb","A","Bb",],
    // "Eb Minor Harmonic" : ["Eb","F","Gb","Ab","Bb","Cb","D","Eb",],
    // "Ab Minor Harmonic" : ["Ab","Bb","Cb","Db","Eb","Fb","G","Ab",],
    // "Db Minor Harmonic" : ["Db","Eb","Fb","Gb","Ab","Bbb","C","Db",],
    // "Gb Minor Harmonic" : ["Gb","Ab","Bbb","Cb","Db","Ebb","F","Gb",],
    // "Cb Minor Harmonic" : ["Cb","Db","Ebb","Fb","Gb","Abb","Bb","Cb",],
    // "G Minor Harmonic" : ["G","A","Bb","C","D","Eb","F#","G",],
    // "D Minor Harmonic" : ["D","E","Fn","G","A","Bb","C#","D",],
    // "A Minor Harmonic" : ["A","B","Cn","D","E","Fn","G#","A",],
    // "E Minor Harmonic" : ["E","F#","Gn","A","B","Cn","D#","E",],
    // "B Minor Harmonic" : ["B","C#","Dn","E","F#","Gn","A#","B",],
    // "F# Minor Harmonic" : ["F#","G#","An","B","C#","Dn","E#","F#",],
    // "C# Minor Harmonic" : ["C#","D#","En","F#","G#","An","B#","C#",],
    // MINOR MELODIC SCALES

};


// CREATE A LIST OF THE "SCALE NAMES" USING THE KEYS IN THE SCALE DICTIONARY
var scale_names = Object.keys(scales_dict)


/*
A FUNCTION THAT TAKES A LISTS OF "SCALE NAMES" AND RANDOMLY CHOOSES A SCALE.
FROM IT AND THEN RETURNS THE A TUPLE CONTAINING (1) THE SCALE NAME AND (2)
THE LIST OF NOTES ASSOCIATED WITH THE CHOOSEN SCALE BASED ON THE "DICTIONARY" GIVEN.
*/
function rand_scale(names,dictionary) {
  let scale_choice = names[Math.floor(Math.random() * names.length)];     // choose a random scale
  let note_list = dictionary[scale_choice];     // get the notes associated with this scale
  return [scale_choice, note_list.join(' ')]
}




// a function that will output the scale name as the question
function print_question() {
  scale_pair = rand_scale(scale_names, scales_dict);      // generate a random scale and its associated notes
  document.getElementById("question").innerHTML = scale_pair[0];
  document.getElementById("answer").innerHTML = "&nbsp;";      // clear the previous answer
}


// a function that will output the scale notes as the answer
function print_answer() {
  document.getElementById("answer").innerHTML = scale_pair[1];      // output the scale notes as the answer
}
