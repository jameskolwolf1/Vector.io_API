let timestamp = new Date();
export default [

    {
        id: 1,
        computerComponents_id: 1,
        title: "No Signal Detected: Why is My Monitor Not Working?",
        description: "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly. Could the cable be bad, or is there a DP version issue here? Any suggestions would help!",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
      },
      {
        id: 2,
        computerComponents_id: 1,
        title: "Screen Flickering at High Refresh Rate – What’s Going On?",
        description: "My monitor flickers like crazy at 144Hz with a DisplayPort connection, but it’s fine at 60Hz. Could this be a bandwidth problem with the cable, or should I look into the monitor settings?",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
  
      },
      {
        id: 3,
        computerComponents_id: 1,
        title:"Getting Audio but No Video on DisplayPort Connection",
        description: "I’m confused! My DisplayPort connection is delivering audio but no video. I’ve tried restarting everything and updating drivers. Could it be the cable, or is there something wrong with the graphics settings?",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
  
      },
      {
        id: 4,
        computerComponents_id: 1,
        title: "DP to HDMI Adapter Issues – TV Showing No Signal",
        description: "Trying to connect my PC (DP) to my TV (HDMI) using an adapter, but the TV won’t show anything. The PC detects the TV, but no picture appears. Is this a common adapter issue?",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
      },
      {
        id: 5,
        computerComponents_id: 1,
        title: "Daisy-Chaining Monitors via DisplayPort – Second Screen Not Working",
        description: "I’m daisy-chaining two monitors with DisplayPort, but the second one stays black. Both monitors support daisy-chaining, and I’m using a DP 1.4 cable. Has anyone else run into this? How did you resolve it?",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
      }
]