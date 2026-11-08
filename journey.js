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
  checkpoints: [
    { name: 'The Shire', mile: 14,  icon: 'cottage' },
    { name: 'Bree',      mile: 135, icon: 'inn' },
    // add the rest of the checkpoints here, in order, e.g.
    // { name: 'Next stop', mile: 250, icon: 'tower' },
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
