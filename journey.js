// =====================================================================
//  JOURNEY SETUP  —  edit this file to plan the walk.
//  All miles are TOTAL journey miles from the very first stream
//  (the dashboard keeps that running total across every stream).
// =====================================================================

const JOURNEY = {

  // ---- Checkpoints -------------------------------------------------
  // The next checkpoint shows at the end of the overlay's progress bar,
  // with how many miles are left. When he passes one, the
  // overlay celebrates "CHECKPOINT REACHED!". (The overlay only says "Next checkpoint"
  // and the miles left; the name below is just for your own reference.)
  //
  //   name:  for your reference only (not shown on stream)
  //   mile:  journey mile where it's reached
  //   icon:  a built-in icon:  cottage, inn, tower, waterfall, mountain,
  //          cave, forest, stones, marsh, castle, volcano
  //          ...or your own picture, e.g. 'images/bree.png'
  //          (upload the image to an "images" folder in the repo;
  //           about 48×48 pixels looks best)
  // Matches the Mordor Stops in the "Dmanmac5 – Content Business Plan" sheet
  // (Master Schedule tab). The Step Tracker Discord bot reads this same list,
  // so the overlay and the bot always show the same stops.
  checkpoints: [
    { name: 'Leaving the Shire',            mile: 14,   icon: 'cottage' },
    { name: 'Bree',                         mile: 135,  icon: 'inn' },
    { name: 'Weathertop',                   mile: 240,  icon: 'tower' },
    { name: 'The Stone Trolls',             mile: 393,  icon: 'stones' },
    { name: 'Rivendell',                    mile: 458,  icon: 'waterfall' },
    { name: 'Hollin Ridge',                 mile: 690,  icon: 'stones' },
    { name: 'West-gate of Moria',           mile: 798,  icon: 'cave' },
    { name: 'Leave Moria / Dimrill Dale',   mile: 840,  icon: 'mountain' },
    { name: 'Lothlórien',                   mile: 920,  icon: 'forest' },
    { name: 'Gollum Spotted on the Anduin', mile: 1075, icon: 'marsh' },
    { name: 'Falls of Rauros',              mile: 1309, icon: 'waterfall' },
    { name: 'Dead Marshes',                 mile: 1421, icon: 'marsh' },
    { name: 'Black Gate',                   mile: 1475, icon: 'castle' },
    { name: 'Henneth Annûn',                mile: 1533, icon: 'waterfall' },
    { name: "Shelob's Lair",                mile: 1600, icon: 'cave' },
    { name: 'Isenmouthe',                   mile: 1698, icon: 'castle' },
    { name: 'Mount Doom',                   mile: 1779, icon: 'volcano' },
  ],


  // ---- Gear the hobbit picks up --------------------------------------
  // Each item appears on the walking sprite once the journey reaches its mile.
  //   item: ring, cloak, stick, sword, lantern, mail
  //   mile: journey mile it's added (set these to the right story points)
  gear: [
    { item: 'ring',  mile: 14 },
    { item: 'cloak', mile: 900 },
    // { item: 'stick',   mile: 300 },
    // { item: 'sword',   mile: 460 },
    // { item: 'lantern', mile: 905 },
    // { item: 'mail',    mile: 470 },   // silver shirt in place of the waistcoat
  ],
};
