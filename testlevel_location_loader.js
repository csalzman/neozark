// locations:
// 
// start
// telecoil room
// telecoil hallway left
// spider magnet room
// telecoil hallway up
// beam torch drop room
// proto booster room
// final room

var start = {
		//Begin information specific to the location if any
	
		//End location specific information
		//Begin information needed for all locations
		//List all elements, will be drawn in sequence
		name: "Start",
		full_width: 800,
		full_height: 450,
		background: new Array(
			fiber_background_image
		),
		foreground: new Array(),
		//Walls and platforms
		collision_map: new Array(
			{x:0, y:440, width:800, height:10},
			{x:0, y:0, width:10, height:450},
			{x:790, y:0, width:10, height:450},
			{x:0, y:0, width:600, height:10},
			{x:600, y:350, width:20, height:100},
			{x:200, y:350, width:200, height:100},
			{x:275, y:250, width:50, height:100}

		),
		//Enemies and locations
		enemies: new Array(
			// {type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}
		),
		//Doors are entrance and exit points on map
		doors: new Array(
			{type:"normal", name: "east", x:780, y:320, height:100, width:10, locked: false, player_start: {x:540, y:320}, link: {location: "telecoil_room", door: "upper_west"}}
		),
		//Items
		item: new Array(
			{type:"Terrajump", x: 0, y:0}
		)
	}
	
	var telecoil_room = {
		//Begin information specific to the location if any
	
		//End location specific information
		//Begin information needed for all locations
		//List all elements, will be drawn in sequence
		name: "telecoil_room",
		full_width: 800,
		full_height: 1000,
		background: new Array(
			gray_background_image
		),
		foreground: new Array(),
		//Walls and platforms
		collision_map: new Array(
			{x:0, y:800, width:800, height:30},
			{x:0, y:0, width:10, height:450},
			{x:590, y:0, width:10, height:450},
			{x:0, y:0, width:600, height:10},
			{x:0, y:250, width:100, height:10},
			{x:275, y:250, width:50, height:100}

		),
		//Enemies and locations
		enemies: new Array(
			{type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}
		),
		//Doors are entrance and exit points on map
		doors: new Array(
			{type:"normal", name: "upper_west", x:0, y:100, height:100, width:10, locked: false, player_start: {x:15, y:200}, link: {location: "start", door: "east"}}
		),
		//Items
		item: new Array(
			{type:"Terrajump", x: 0, y:0}
		)
	}
