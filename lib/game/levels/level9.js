ig.module( 'game.levels.level9' )
.requires( 'impact.image','game.entities.respawnpoint','game.entities.blob','game.entities.dropper','game.entities.void','game.entities.glass-dome','game.entities.earthquake','game.entities.mine','game.entities.horizontalwall','game.entities.frosk','game.entities.krystall','game.entities.kill','game.entities.levelcomplete','game.entities.debris','game.entities.trigger','game.entities.mover','game.entities.hurt','game.entities.player','game.entities.oldman','game.entities.gas','game.entities.levelchange' )
.defines(function(){
LevelLevel9=/*JSON[*/{"entities":[{"type":"EntityRespawnpoint","x":216,"y":31},{"type":"EntityRespawnpoint","x":516,"y":643},{"type":"EntityRespawnpoint","x":116,"y":635},{"type":"EntityRespawnpoint","x":324,"y":227},{"type":"EntityBlob","x":84,"y":36},{"type":"EntityDropper","x":241,"y":1136},{"type":"EntityVoid","x":436,"y":752,"settings":{"name":"void2"}},{"type":"EntityGlassDome","x":24,"y":384},{"type":"EntityDropper","x":477,"y":632},{"type":"EntityDropper","x":41,"y":632},{"type":"EntityEarthquake","x":404,"y":420,"settings":{"name":"quake1"}},{"type":"EntityMine","x":100,"y":1355},{"type":"EntityDropper","x":73,"y":760},{"type":"EntityHorizontalwall","x":272,"y":112,"settings":{"wall":"wall"}},{"type":"EntityFrosk","x":48,"y":48},{"type":"EntityKrystall","x":64,"y":832},{"type":"EntityKill","x":272,"y":768,"settings":{"size":{"x":184,"y":24}}},{"type":"EntityBlob","x":100,"y":816},{"type":"EntityLevelcomplete","x":160,"y":1280,"settings":{"name":"nextLevel","level":"Level15"}},{"type":"EntityFrosk","x":488,"y":400},{"type":"EntityDebris","x":212,"y":236,"settings":{"size":{"x":264,"y":12},"name":"debris1"}},{"type":"EntityKill","x":88,"y":1124,"settings":{"size":{"x":16,"y":32}}},{"type":"EntityTrigger","x":68,"y":1304,"settings":{"target":{"1":"nextLevel"},"size":{"x":28,"y":24}}},{"type":"EntityFrosk","x":272,"y":1152},{"type":"EntityBlob","x":360,"y":388},{"type":"EntityHorizontalwall","x":364,"y":112},{"type":"EntityMover","x":344,"y":752,"settings":{"target":{"1":"void1","2":"void2"}}},{"type":"EntityKill","x":408,"y":556,"settings":{"size":{"x":16,"y":48}}},{"type":"EntityTrigger","x":324,"y":232,"settings":{"target":{"4":"debris1"}}},{"type":"EntityTrigger","x":404,"y":448,"settings":{"target":{"2":"quake1"},"size":{"x":24,"y":92}}},{"type":"EntityHurt","x":412,"y":548},{"type":"EntityPlayer","x":220,"y":20},{"type":"EntityDropper","x":197,"y":632},{"type":"EntityVoid","x":272,"y":752,"settings":{"name":"void1"}},{"type":"EntityBlob","x":476,"y":36},{"type":"EntityKill","x":4,"y":2024,"settings":{"size":{"x":572,"y":24}}},{"type":"EntityOldman","x":56,"y":1296},{"type":"EntityKrystall","x":36,"y":396},{"type":"EntityGas","x":324,"y":1200},{"type":"EntityLevelchange","x":268,"y":32,"settings":{"name":"prevlevel","level":"Level14","xpos":325,"ypos":170}},{"type":"EntityTrigger","x":208,"y":0,"settings":{"size":{"x":40,"y":4},"target":{"1":"prevlevel"}}}],"layer":[{"name":"background","width":7,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/stein.png","repeat":true,"preRender":true,"distance":"2","tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]]},{"name":"main","width":36,"height":128,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,45,46,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,145,0,0,0,0,0,0,0,0,0,0,0],[110,0,65,0,0,0,0,0,0,33,0,0,0,67,0,0,0,0,0,0,0,0,0,205,206,51,0,0,0,0,0,0,0,0,0,0],[218,218,218,218,218,218,219,218,218,219,218,218,219,218,218,218,219,218,223,224,0,0,217,219,218,218,218,218,218,218,218,218,218,218,218,218],[179,179,179,179,179,179,179,179,179,179,42,39,20,42,199,199,199,199,199,200,0,0,197,254,254,254,254,254,254,254,254,199,199,199,199,199],[179,179,179,179,179,179,179,179,179,179,179,42,179,179,179,199,199,199,199,200,0,0,197,254,198,198,180,254,254,180,179,180,199,199,199,199],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,0,0,0,0,0,0,0,0,254,180,180,179,179,254,180,199,180,199,199],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,180,179,0,0,0,0,0,0,0,0,257,179,198,198,198,198,179,179,179,180,199],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,180,179,179,254,254,200,0,0,197,254,254,179,180,254,180,180,180,179,180,199,180,199],[179,179,179,179,179,179,179,179,179,179,179,254,179,180,179,180,180,254,254,200,0,0,178,178,254,254,257,254,180,198,198,198,199,180,180,199],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,253,253,253,253,253,200,0,0,178,258,253,254,179,198,198,198,179,199,198,199,199,199],[179,179,179,179,179,179,179,179,179,179,179,258,253,20,253,253,258,253,257,200,0,0,197,254,254,198,198,180,254,199,199,199,199,199,199,199],[179,179,179,179,179,179,179,179,179,179,179,253,253,253,253,253,253,253,253,200,0,0,197,253,253,253,253,180,180,199,199,199,199,198,199,199],[181,159,161,161,159,161,161,159,161,161,161,159,159,161,161,161,161,161,161,0,0,0,0,159,159,160,159,159,160,160,160,160,160,159,161,197],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197],[200,0,0,0,0,182,183,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,142,0,0,0,0,0,0,197],[83,0,0,0,0,201,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,202,0,0,0,0,0,0,0],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,0,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,0,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,0,0,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,0,0,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,256,0,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,0,0,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,226,226,180,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,245,245,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,245,245,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,198,256,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,245,245,198,198,198,198,198,198,198,198,198],[198,198,198,198,198,198,180,0,255,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,179,179,198,198,198,198,198,198,198,198,198],[159,159,159,159,159,159,161,122,0,161,161,161,161,161,161,161,161,161,161,10,161,161,161,161,0,160,160,161,161,161,161,161,161,161,161,10],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,0,0,0,0,0,0,0,0,0,0,0,178],[234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,0,0,0,0,0,0,0,0,0,0,0,197],[179,179,199,199,179,179,179,179,179,179,179,179,179,179,179,179,0,0,0,0,180,180,180,180,0,0,0,0,0,179,179,179,179,0,0,178],[179,179,199,199,199,199,199,199,199,199,199,199,199,199,179,179,0,0,0,0,180,180,180,180,0,0,0,0,0,179,179,179,179,0,0,197],[179,179,199,199,199,199,199,199,199,199,199,199,199,199,179,179,0,0,0,0,180,180,245,180,0,0,0,0,0,179,179,179,179,0,0,178],[179,179,199,199,199,199,199,199,199,199,199,199,199,199,199,179,0,0,0,0,0,0,0,0,0,0,0,0,0,179,179,179,179,0,0,197],[179,179,199,199,199,199,199,199,199,199,199,199,199,199,179,179,0,0,0,0,0,0,0,0,0,0,0,0,0,179,179,179,179,0,0,197],[179,0,0,0,0,0,0,0,0,10,199,199,199,199,199,179,226,0,0,0,0,0,0,0,0,226,226,0,226,179,179,179,179,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,199,199,179,245,245,245,245,245,245,245,245,245,245,245,245,245,179,179,179,179,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,199,199,179,245,245,245,245,245,245,245,245,245,245,245,245,245,179,179,179,179,0,0,0],[0,0,182,183,0,0,0,0,0,0,199,199,199,199,199,179,179,179,179,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,201,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,201,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[198,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,0,0,0],[198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[180,180,180,180,180,0,0,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,0,0,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,0,0,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,0,0,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,0,0,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,0,0,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,226,226,180,180,180,180,180,180,0,0,180,180,180,180,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[180,180,180,180,180,245,245,198,198,198,198,198,198,0,0,0,0,0,0,0,0,180,180,180,180,180,0,0,180,180,180,180,180,180,180,180],[198,198,198,198,198,245,245,198,198,198,198,198,198,0,0,0,0,0,0,0,0,0,0,0,0,179,0,0,180,180,180,180,180,180,180,180],[198,198,198,198,198,245,245,198,198,198,198,198,198,0,0,0,0,0,0,0,0,0,0,0,0,179,0,0,180,180,180,180,180,180,180,180],[198,198,198,198,198,180,180,198,198,198,198,198,198,0,0,0,0,0,0,0,0,0,0,0,0,179,0,0,180,180,180,180,180,180,180,180],[198,198,198,198,198,198,198,198,198,198,198,198,198,0,0,0,0,0,32,0,0,0,0,34,0,179,0,0,180,180,180,180,180,180,180,180],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[213,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[213,213,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[213,213,213,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[213,213,213,213,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,180,180,180],[213,213,213,213,213,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,180,180,180,179,179,179],[213,213,213,213,213,213,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,179,180,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226],[245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245,245]]},{"name":"foreground","width":36,"height":128,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":true,"data":[[101,160,160,160,160,160,160,160,160,160,160,160,122,0,0,0,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,10],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,25,0,0,0,25,0,0,229,0,0,0,0,0,0,0,0,25,0,0,0,0,0,25,0,178],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,198,0,0,0,0,0,0,0,0,0,198,198,198,198,198,198,198,199,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,198,179,179,198,198,0,0,0,0,0,198,198,198,198,198,198,199,199,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,198,179,179,199,180,199,181,0,0,178,199,180,199,179,179,198,199,199,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,198,199,199,180,180,199,200,0,0,178,199,180,199,199,199,199,199,199,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,199,199,199,199,199,198,179,179,179,179,200,0,0,197,179,179,179,199,199,199,199,199,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,199,0,199,199,199,199,199,198,198,198,0,0,0,0,198,198,199,199,199,199,199,199,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,199,199,199,199,199,199,199,199,199,199,0,0,0,0,199,199,199,199,199,199,199,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,199,199,199,199,199,199,199,199,199,0,0,0,0,199,199,199,199,199,199,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,199,199,199,199,199,199,199,199,0,0,0,0,199,199,199,199,199,0,0,0,0,0,0,0,0],[101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,122,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[83,235,235,235,235,235,235,103,102,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,103,102,236,236,236,236,236,236,236,236,11],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,200,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[101,0,0,0,0,0,0,122,64,0,0,0,0,0,0,0,0,0,0,10,180,180,180,180,101,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0],[200,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,103,0,0,178,0,0,0,0,200,0,0,0,102,236,238,235,234,103,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,181,0,0,178,0,0,0,0,200,0,0,0,178,0,0,0,0,181,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,181,0,0,178,0,0,0,0,200,0,0,0,178,0,0,0,0,181,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,181,0,0,178,0,0,180,0,200,0,0,0,178,0,0,0,0,181,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,181,0,0,64,160,160,160,160,122,0,0,0,178,0,0,0,0,181,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,181,0,0,0,0,0,0,0,0,0,0,0,178,0,0,0,0,181,0,0],[0,101,161,161,161,161,161,161,161,197,0,0,0,0,0,0,200,226,226,226,226,226,226,226,226,227,0,226,178,0,0,0,0,181,0,197],[179,200,0,0,0,0,0,0,0,197,0,0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,178,0,0,0,0,181,0,197],[179,200,0,0,0,0,0,0,0,197,0,0,0,0,0,0,181,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,181,0,197],[179,200,0,0,0,0,0,0,0,178,0,0,0,0,0,0,0,0,0,179,179,179,179,179,179,179,179,179,179,179,179,179,179,181,0,197],[179,200,0,0,0,0,0,0,0,64,160,160,160,160,161,160,160,160,160,160,161,161,161,161,160,160,160,160,160,160,160,160,160,181,0,178],[179,83,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,0,0,178],[179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,179,181,0,178],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,0,178],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,0,178],[101,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,160,160,160,159,160,159,160,161,161,161,159,161,161,161,122,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178],[83,237,237,237,237,103,102,237,237,237,237,237,237,103,102,237,237,237,237,103,102,237,237,237,237,237,103,102,237,237,237,237,237,237,237,11],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,178,0,0,0,0,181,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,181,178,0,0,0,0,0,0,181,64,160,160,160,160,122,178,0,0,0,0,0,181,178,0,0,0,0,0,0,0,0],[0,0,0,0,0,200,178,0,0,0,0,0,0,83,237,237,237,237,237,103,64,160,160,160,10,0,181,197,0,0,0,0,0,0,0,0],[0,0,0,0,0,200,178,0,0,0,0,0,0,179,179,179,179,179,179,181,0,0,0,0,178,0,181,197,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,179,179,179,179,101,160,122,0,0,0,0,178,0,181,197,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,179,179,179,179,83,235,235,235,235,235,235,11,0,181,197,0,0,0,0,0,0,0,0],[101,160,160,160,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,122,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0],[83,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,236,237,237,237,237,237,237,11,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":36,"height":128,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":true,"data":[[1,23,23,23,23,23,23,23,23,23,23,23,0,0,0,0,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,0,0,21,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,34,45,0,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,34,45,1,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,34,45,1,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,23,23,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,38,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelLevel9Resources=[new ig.Image('media/tiles/stein.png'), new ig.Image('media/tiles/tiles.png'), new ig.Image('media/tiles/tiles.png')];
});