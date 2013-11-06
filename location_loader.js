
var location0 = {
	//Begin information specific to the location if any
	
	//End location specific information
	//Begin information needed for all locations
	//List all elements, will be drawn in sequence
	name: "Grassy plain",
	background: new Array(
		background_mall_grass_image,
		background_mall_ground_image, 
		background_mall_collison_image
	),
	foreground: new Array(),
	//Walls and platforms
	collision_map: new Array(
		{x:0, y:418, width:800, height:30},
		{x:64, y:257, width:180, height:10},
		{x:64, y:337, width:60, height:10},		
		{x:176, y:337, width:176, height:10},
		{x:0, y:0, width:10, height:450},
		{x:590, y:0, width:10, height:450},
		{x:0, y:0, width:600, height:10}			
	),
	//Enemies and locations
	enemies: new Array(
		{type: "Bobcat", x:80, y:310, width:26, height:41, health: 10}, 
		{type: "Bobcat", x:80, y:405, width:26, height:41, health: 10}			
	),
	//Doors are entrance and exit points on map
	doors: new Array(
		{type:"normal", name: "east", x:580, y:320, height:100, width:10, locked: false, player_start: {x:540, y:320}, link: {location: "location1", door: "west"}}
	),
	//Items
	item: new Array(
		{type:"Terrajump", x: 0, y:0}
	)
}

var location1 = {
	//Begin information specific to the location if any
	
	//End location specific information
	//Begin information needed for all locations
	//List all elements, will be drawn in sequence
	name: "Subway",
	background: new Array(
		metro_background_image,
		metro_collison_image
	),
	foreground: new Array(
		metro_foreground_image
	),
	//Walls and platforms
	collision_map: new Array(
		{x:0, y:0, width:800, height:174},
		{x:0, y:420, width:800, height:174},
		{x:290, y:320, width:256, height:10},		
		{x:608, y:320, width:112, height:10}
	),
	//Enemies and locations
	enemies: new Array(
		{type: "Bobcat", x:10, y:10, width:26, height:41, health: 10}
	),
	//Doors are entrance and exit points on map
	doors: new Array(
		{type:"normal", name: "west", x:0, y:320, height:100, width:10, locked: false, player_start: {x:20, y:320}, link: {location: "location0", door: "east"}},
		{type:"normal", name: "east", x:580, y:250, height:100, width:10, locked: false, player_start: {x:530, y:320}, link: {location: "location2", door: "west"}}			
	),
	//Items
	item: new Array(
		{type:"Terrajump", x: 0, y:0}
	)
}

var location2 = {
	//Begin information specific to the location if any
	
	//End location specific information
	//Begin information needed for all locations
	//List all elements, will be drawn in sequence
	name: "Test Area",
	background: new Array(
		test_scene_background_image,
		test_scene_collison_image
	),
	foreground: new Array(

	),
	//Walls and platforms
	collision_map: new Array(
		{x:0, y:0, width:800, height:10},
		{x:0, y:390, width:800, height:174},
		{x:20, y:260, width:64, height:14},		
		{x:182, y:328, width:80, height:14},
		{x:20, y:170, width:112, height:14}			
	),
	//Enemies and locations
	enemies: new Array(
		{type: "Big_Bobcat", x:300, y:300, width:130, height:205, health: 100}
	),
	//Doors are entrance and exit points on map
	doors: new Array(
		{type:"normal", name: "west", x:0, y:285, height:100, width:20, locked: false, player_start: {x:20, y:350}, link: {location: "location1", door: "east"}}
	),
	//Items
	item: new Array(
		{type:"Terrajump", x: 0, y:0}
	)
}