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
			{type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}
		),
		//Doors are entrance and exit points on map
		doors: new Array(
			{type:"normal", name: "east", x:780, y:320, height:100, width:10, locked: true, player_start: {x:540, y:320}, link: {location: "telecoil_room", door: "upper_west"}}
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
			
		),
		foreground: new Array(),
		//Walls and platforms
		collision_map: new Array(
			{x:400, y:0, width:600, height:10},
			{x:400, y:0, width:10, height:400},
			{x:0, y:400, width:600, height:10},
			{x:0, y:400, width:10, height:300},
			{x:0, y:690, width:1000, height:10},
			{x:990, y:0, width:10, height:700}

		),
		//Enemies and locations
		enemies: new Array(
			{type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}
		),
		//Doors are entrance and exit points on map
		doors: new Array(
			{type:"normal", name: "upper_west", x:410, y:300, height:100, width:10, locked: false, player_start: {x:420, y:300}, link: {location: "start", door: "east"}},
			{type:"normal", name: "lower_west", x:10, y:600, height:100, width:10, locked: false, player_start: {x:20, y:600}, link: {location: "telecoil_hallway_left", door: "east"}}			
		),
		//Items
		item: new Array(
			{type:"Terrajump", x: 0, y:0}
		)
	}
	
	var telecoil_hallway_left = {
		//Begin information specific to the location if any
	
		//End location specific information
		//Begin information needed for all locations
		//List all elements, will be drawn in sequence
		name: "telecoil_hallway_left",
		full_width: 500,
		full_height: 200,
		background: new Array(
			
		),
		foreground: new Array(),
		//Walls and platforms
		collision_map: new Array(
			{x:0, y:0, width:500, height:10},
			{x:0, y:0, width:10, height:200},
			{x:0, y:190, width:500, height:10},
			{x:490, y:0, width:10, height:200}


		),
		//Enemies and locations
		enemies: new Array(
			// {type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}
		),
		//Doors are entrance and exit points on map
		doors: new Array(
			{type:"normal", name: "east", x:490, y:100, height:100, width:10, locked: false, player_start: {x:450, y:100}, link: {location: "telecoil_room", door: "lower_west"}},
			{type:"normal", name: "west", x:10, y:100, height:100, width:10, locked: false, player_start: {x:20, y:100}, link: {location: "spider_magnet_room", door: "east"}}			
		),
		//Items
		item: new Array(
			{type:"Terrajump", x: 0, y:0}
		)
	}
	
	var spider_magnet_room = {
		//Begin information specific to the location if any
	
		//End location specific information
		//Begin information needed for all locations
		//List all elements, will be drawn in sequence
		name: "spider_magnet_room",
		full_width: 200,
		full_height: 800,
		background: new Array(
			
		),
		foreground: new Array(),
		//Walls and platforms
		collision_map: new Array(
			{x:0, y:0, width:200, height:10},
			{x:0, y:0, width:10, height:800},
			{x:0, y:790, width:200, height:10},
			{x:190, y:0, width:10, height:800}


		),
		//Enemies and locations
		enemies: new Array(
			// {type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}
		),
		//Doors are entrance and exit points on map
		doors: new Array(
			{type:"normal", name: "east", x:180, y:10, height:100, width:10, locked: false, player_start: {x:140, y:10}, link: {location: "telecoil_hallway_left", door: "west"}}

		),
		//Items
		item: new Array(
			{type:"Terrajump", x: 0, y:0}
		)
	}