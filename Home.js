var React = require('react');
var ReactNative = require('react-native');

var Button = require('./UIButton.js');
var UILabel = require('./UILabel.js');
var UIColor = require('./UIColor.js');
var Globals = require('./Globals');
var GameContainer = require('./GameContainer.js')
var Settings = require('./Settings.js')
var Hexagon = require('./Hexagon.js')
var GameConfigPage = require('./GameConfigPage.js');
var GameConfigCard = require('./GameConfigCard.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var AppManager = require('./AppManager'); // i
var ProgressOverlay = require('./ProgressOverlay.js');

var {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
} = ReactNative;

var configGroups = ["Vanilla", "Themed", "Expansion 5 or 6P", "Seafarers 3P", "Seafarers 4P"];
var configGroupProductKeys = AppManager._configGroupProductKeys;
//
// game piece in vanilla catan board
//
// The nineteen (19) terrain hexes are distributed as follows:
// Four (4) Fields (Grain Resource) Hexes.
// Four (4) Forest (Lumber Resource) Hexes.
// Four (4) Pasture (Wool Resource) Hexes.
// Three (3) Mountains (Ore Resource) Hexes.
// Three (3) Hills (Brick Resource) Hexes.
// One (1) Desert (No Resource) Hex.
//
// The nine (9) harbor pieces are used to cover the printed harbors on the sea frame pieces in a Variable Setup. The following is the composition of the harbor pieces:
//
// One (1) x 2:1 Wool Harbor.
// One (1) x 2:1 Lumber Harbor.
// One (1) x 2:1 Brick Harbor.
// One (1) x 2:1 Ore Harbor.
// One (1) x 2:1 Grain Harbor.
// Four (4) x 3:1 Generic Harbors.


var configs = {
  Vanilla:[
    {
      title:"Standard",
      description:"Explore the default Catan set up!",
      layoutData: [[0,0,0,2,2,2,2],
                    [0,0,2,1,1,1,2],
                     [0,2,1,1,1,1,2],
                      [2,1,1,1,1,1,2],
                       [2,1,1,1,1,2],
                        [2,1,1,1,2],
                         [2,2,2,2]],
      resourceInventory: {'0': 18, '1':3, '2':3, '3':4, '4':4, '5':4, '6':1},
      numberInventory: {'0':0, '2': 1, '3':2, '4':2, '5':2, '6':2, '8':2, '9':2, '10':2, '11':2, '12':1},
      portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
      defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 2,
                                      resource: 1},
                                      { waterHex: { i: 0, j: 6 },
                                        landHex: { i: 1, j: 5},
                                        orientation: 3,
                                        resource: 7},
                                      { waterHex: { i: 1, j: 2 },
                                        landHex: { i: 2, j: 2},
                                        orientation: 2,
                                        resource: 2},

                                      { waterHex: { i: 2, j: 6 },
                                        landHex: { i: 2, j: 5},
                                        orientation: 4,
                                        resource: 3},

                                      { waterHex: { i: 3, j: 0 },
                                        landHex: { i: 3, j: 1},
                                        orientation: 1,
                                        resource: 4},

                                      { waterHex: { i: 4, j: 5 },
                                        landHex: { i: 4, j: 4},
                                        orientation: 4,
                                        resource: 7},

                                      { waterHex: { i: 5, j: 0 },
                                        landHex: { i: 4, j: 1},
                                        orientation: 0,
                                        resource: 7},

                                      { waterHex: { i: 6, j: 1 },
                                        landHex: { i: 5, j: 2},
                                        orientation: 0,
                                        resource: 5},

                                      { waterHex: { i: 6, j:3 },
                                        landHex: { i: 5, j: 3},
                                        orientation: 5,
                                        resource:7},], //access this rule, see if it is true, instead of using portPlacement we were doing, use this one.


      rules:{

      }
    },
  ],
  Themed:[
    {
      title:"Road Rage",
      description:"A race to shut down your opponents in a road centric battle. Wood and brick are plenty.",
      layoutData: [[0,0,0,2,2,2,2],
                    [0,0,2,1,1,1,2],
                     [0,2,1,1,1,1,2],
                      [2,1,1,1,1,1,2],
                       [2,1,1,1,1,2],
                        [2,1,1,1,2],
                         [2,2,2,2]],
      resourceInventory: {'0': 18, '1':3, '2':3, '3':4, '4':4, '5':4, '6':1},
      numberInventory: {'0':0, '2': 1, '3':2, '4':2, '5':2, '6':2, '8':2, '9':2, '10':2, '11':2, '12':1},
      portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
      defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 2,
                                      resource: 1},
                                      { waterHex: { i: 0, j: 6 },
                                        landHex: { i: 1, j: 5},
                                        orientation: 3,
                                        resource: 7},
                                      { waterHex: { i: 1, j: 2 },
                                        landHex: { i: 2, j: 2},
                                        orientation: 2,
                                        resource: 2},

                                      { waterHex: { i: 2, j: 6 },
                                        landHex: { i: 2, j: 5},
                                        orientation: 4,
                                        resource: 3},

                                      { waterHex: { i: 3, j: 0 },
                                        landHex: { i: 3, j: 1},
                                        orientation: 1,
                                        resource: 4},

                                      { waterHex: { i: 4, j: 5 },
                                        landHex: { i: 4, j: 4},
                                        orientation: 4,
                                        resource: 7},

                                      { waterHex: { i: 5, j: 0 },
                                        landHex: { i: 4, j: 1},
                                        orientation: 0,
                                        resource: 7},

                                      { waterHex: { i: 6, j: 1 },
                                        landHex: { i: 5, j: 2},
                                        orientation: 0,
                                        resource: 5},

                                      { waterHex: { i: 6, j:3 },
                                        landHex: { i: 5, j: 3},
                                        orientation: 5,
                                        resource:7},], //access this rule, see if it is true, instead of using portPlacement we were doing, use this one.


        rules:{isRoadRage: true

        }
      },
    {
      title:"Ore for Wool",
      description:"Who is the sharpest tradesperson? Ore is super rare here, turning wool into currency.",
      layoutData: [[0,0,0,2,2,2,2],
                    [0,0,2,1,1,1,2],
                     [0,2,1,1,1,1,2],
                      [2,1,1,1,1,1,2],
                       [2,1,1,1,1,2],
                        [2,1,1,1,2],
                         [2,2,2,2]],
      resourceInventory: {'0': 18, '1':3, '2':3, '3':4, '4':4, '5':4, '6':1},
      numberInventory: {'0':0, '2': 1, '3':2, '4':2, '5':2, '6':2, '8':2, '9':2, '10':2, '11':2, '12':1},
      portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
      defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 2,
                                      resource: 1},
                                      { waterHex: { i: 0, j: 6 },
                                        landHex: { i: 1, j: 5},
                                        orientation: 3,
                                        resource: 7},
                                      { waterHex: { i: 1, j: 2 },
                                        landHex: { i: 2, j: 2},
                                        orientation: 2,
                                        resource: 2},
                                      { waterHex: { i: 2, j: 6 },
                                        landHex: { i: 2, j: 5},
                                        orientation: 4,
                                        resource: 3},
                                      { waterHex: { i: 3, j: 0 },
                                        landHex: { i: 3, j: 1},
                                        orientation: 1,
                                        resource: 4},
                                      { waterHex: { i: 4, j: 5 },
                                        landHex: { i: 4, j: 4},
                                        orientation: 4,
                                        resource: 7},
                                      { waterHex: { i: 5, j: 0 },
                                        landHex: { i: 4, j: 1},
                                        orientation: 0,
                                        resource: 7},
                                      { waterHex: { i: 6, j: 1 },
                                        landHex: { i: 5, j: 2},
                                        orientation: 0,
                                        resource: 5},
                                      { waterHex: { i: 6, j:3 },
                                        landHex: { i: 5, j: 3},
                                        orientation: 5,
                                        resource:7},], //access this rule, see if it is true, instead of using portPlacement we were doing, use this one.


      rules:{isOreForWool: true

      }
    },
    {
      title:"Port Havoc",
      description:"Snatch up the advantageous port positions to dominate Catan!",
      layoutData: [[0,0,0,2,2,2,2],
                    [0,0,2,1,1,1,2],
                     [0,2,1,1,1,1,2],
                      [2,1,1,1,1,1,2],
                       [2,1,1,1,1,2],
                        [2,1,1,1,2],
                         [2,2,2,2]],
       resourceInventory: {'0': 18, '1':3, '2':3, '3':4, '4':4, '5':4, '6':1},
       numberInventory: {'0':0, '2': 1, '3':2, '4':2, '5':2, '6':2, '8':2, '9':2, '10':2, '11':2, '12':1},
       portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
      defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 2,
                                      resource: 1},
                                      { waterHex: { i: 0, j: 6 },
                                        landHex: { i: 1, j: 5},
                                        orientation: 3,
                                        resource: 7},
                                      { waterHex: { i: 1, j: 2 },
                                        landHex: { i: 2, j: 2},
                                        orientation: 2,
                                        resource: 2},
                                      { waterHex: { i: 2, j: 6 },
                                        landHex: { i: 2, j: 5},
                                        orientation: 4,
                                        resource: 3},
                                      { waterHex: { i: 3, j: 0 },
                                        landHex: { i: 3, j: 1},
                                        orientation: 1,
                                        resource: 4},
                                      { waterHex: { i: 4, j: 5 },
                                        landHex: { i: 4, j: 4},
                                        orientation: 4,
                                        resource: 7},
                                      { waterHex: { i: 5, j: 0 },
                                        landHex: { i: 4, j: 1},
                                        orientation: 0,
                                        resource: 7},
                                      { waterHex: { i: 6, j: 1 },
                                        landHex: { i: 5, j: 2},
                                        orientation: 0,
                                        resource: 5},
                                      { waterHex: { i: 6, j:3 },
                                        landHex: { i: 5, j: 3},
                                        orientation: 5,
                                        resource:7},], //access this rule, see if it is true, instead of using portPlacement we were doing, use this one.

      rules:{isPortHavoc: true

      }
    },
  ],
  "Expansion 5 or 6P":[
    {
      title:"Road Rage 2: Fury Road",
      description:"A race to shut down your opponents in a road centric battle. Wood and brick are plenty.",
       layoutData: [[0,0,0,0,2,2,2,2],
                     [0,0,0,2,1,1,1,2],
                     [0,0,2,1,1,1,1,2],
                      [0,2,1,1,1,1,1,2],
                      [2,1,1,1,1,1,1,2],
                       [2,1,1,1,1,1,2],
                        [2,1,1,1,1,2],
                         [2,1,1,1,2],
                          [2,2,2,2]],
       resourceInventory: {'0': 22, '1':5, '2':5, '3':6, '4':6, '5':6, '6':2},
       numberInventory: {'0':0, '2': 2, '3':3, '4':3, '5':3, '6':3, '8':3, '9':3, '10':3, '11':3, '12':2},
       portInventory: {'7': 5, '1':1, '2':1, '3':2, '4':1, '5':1},
       defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                       landHex: { i: 1, j: 4},
                                       orientation: 2,
                                       resource: 3},
                                       { waterHex: { i: 0, j: 6 },
                                         landHex: { i: 1, j: 5},
                                         orientation: 3,
                                         resource: 2},
                                       { waterHex: { i: 1, j: 7 },
                                         landHex: { i: 2, j: 6},
                                         orientation: 3,
                                         resource: 7},
                                       { waterHex: { i: 3, j: 1 },
                                         landHex: { i: 3, j: 2},
                                         orientation: 1,
                                         resource: 1},
                                       { waterHex: { i: 4, j: 7 },
                                         landHex: { i: 3, j: 6},
                                         orientation: 4,
                                         resource: 7},
                                       { waterHex: { i: 5, j: 0 },
                                         landHex: { i: 4, j: 1},
                                         orientation: 0,
                                         resource: 3},
                                       { waterHex: { i: 6, j: 5 },
                                         landHex: { i:5, j: 5},
                                         orientation: 5,
                                         resource: 7},
                                       { waterHex: { i: 6, j: 0 },
                                         landHex: { i: 6, j: 1},
                                         orientation: 1,
                                         resource: 4},
                                       { waterHex: { i: 8, j: 0 },
                                         landHex: { i: 7, j: 1},
                                         orientation: 0,
                                         resource:7},
                                       { waterHex: { i: 8, j: 2 },
                                         landHex: { i: 7, j: 2},
                                         orientation: 5,
                                         resource: 7},
                                       { waterHex: { i: 7, j: 4 },
                                         landHex: { i: 7, j: 3},
                                         orientation: 4,
                                         resource: 7},],
       rules:{isRoadRage2: true

       }
    },
    {
      title:"Ore for Wool 2: More Wool",
      description:"Who is the sharpest tradesperson? Ore is super rare here, turning wool into currency.",
      layoutData: [[0,0,0,0,2,2,2,2],
                    [0,0,0,2,1,1,1,2],
                    [0,0,2,1,1,1,1,2],
                     [0,2,1,1,1,1,1,2],
                     [2,1,1,1,1,1,1,2],
                      [2,1,1,1,1,1,2],
                       [2,1,1,1,1,2],
                        [2,1,1,1,2],
                         [2,2,2,2]],
      resourceInventory: {'0': 22, '1':5, '2':5, '3':6, '4':6, '5':6, '6':2},
      numberInventory: {'0':0, '2': 2, '3':3, '4':3, '5':3, '6':3, '8':3, '9':3, '10':3, '11':3, '12':2},
      portInventory: {'7': 5, '1':1, '2':1, '3':2, '4':1, '5':1},
      defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 2,
                                      resource: 3},
                                      { waterHex: { i: 0, j: 6 },
                                        landHex: { i: 1, j: 5},
                                        orientation: 3,
                                        resource: 2},
                                      { waterHex: { i: 1, j: 7 },
                                        landHex: { i: 2, j: 6},
                                        orientation: 3,
                                        resource: 7},
                                      { waterHex: { i: 3, j: 1 },
                                        landHex: { i: 3, j: 2},
                                        orientation: 1,
                                        resource: 1},
                                      { waterHex: { i: 4, j: 7 },
                                        landHex: { i: 3, j: 6},
                                        orientation: 4,
                                        resource: 7},
                                      { waterHex: { i: 5, j: 0 },
                                        landHex: { i: 4, j: 1},
                                        orientation: 0,
                                        resource: 3},
                                      { waterHex: { i: 6, j: 5 },
                                        landHex: { i:5, j: 5},
                                        orientation: 5,
                                        resource: 7},
                                      { waterHex: { i: 6, j: 0 },
                                        landHex: { i: 6, j: 1},
                                        orientation: 1,
                                        resource: 4},
                                      { waterHex: { i: 8, j: 0 },
                                        landHex: { i: 7, j: 1},
                                        orientation: 0,
                                        resource:7},
                                      { waterHex: { i: 8, j: 2 },
                                        landHex: { i: 7, j: 2},
                                        orientation: 5,
                                        resource: 7},
                                      { waterHex: { i: 7, j: 4 },
                                        landHex: { i: 7, j: 3},
                                        orientation: 4,
                                        resource: 7},],
       rules:{isOreForWool2: true

       }
    },
    {
      title:"Port Havoc 2: Hordes of Hoarders",
      description:"Snatch up the advantageous port positions to dominate Catan!",
      layoutData: [[0,0,0,0,2,2,2,2],
                    [0,0,0,2,1,1,1,2],
                    [0,0,2,1,1,1,1,2],
                     [0,2,1,1,1,1,1,2],
                     [2,1,1,1,1,1,1,2],
                      [2,1,1,1,1,1,2],
                       [2,1,1,1,1,2],
                        [2,1,1,1,2],
                         [2,2,2,2]],
      resourceInventory: {'0': 22, '1':5, '2':5, '3':6, '4':6, '5':6, '6':2},
      numberInventory: {'0':0, '2': 2, '3':3, '4':3, '5':3, '6':3, '8':3, '9':3, '10':3, '11':3, '12':2},
      portInventory: {'7': 5, '1':1, '2':1, '3':2, '4':1, '5':1},
      defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 2,
                                      resource: 3},
                                      { waterHex: { i: 0, j: 6 },
                                        landHex: { i: 1, j: 5},
                                        orientation: 3,
                                        resource: 2},
                                      { waterHex: { i: 1, j: 7 },
                                        landHex: { i: 2, j: 6},
                                        orientation: 3,
                                        resource: 7},
                                      { waterHex: { i: 3, j: 1 },
                                        landHex: { i: 3, j: 2},
                                        orientation: 1,
                                        resource: 1},
                                      { waterHex: { i: 4, j: 7 },
                                        landHex: { i: 3, j: 6},
                                        orientation: 4,
                                        resource: 7},
                                      { waterHex: { i: 5, j: 0 },
                                        landHex: { i: 4, j: 1},
                                        orientation: 0,
                                        resource: 3},
                                      { waterHex: { i: 6, j: 5 },
                                        landHex: { i:5, j: 5},
                                        orientation: 5,
                                        resource: 7},
                                      { waterHex: { i: 6, j: 0 },
                                        landHex: { i: 6, j: 1},
                                        orientation: 1,
                                        resource: 4},
                                      { waterHex: { i: 8, j: 0 },
                                        landHex: { i: 7, j: 1},
                                        orientation: 0,
                                        resource:7},
                                      { waterHex: { i: 8, j: 2 },
                                        landHex: { i: 7, j: 2},
                                        orientation: 5,
                                        resource: 7},
                                      { waterHex: { i: 7, j: 4 },
                                        landHex: { i: 7, j: 3},
                                        orientation: 4,
                                        resource: 7},],
       rules:{isPortHavoc2: true
       }
    },
    {
      title:"Random Board",
      description:"Fight for the most victory points using the classic layout.",
       layoutData: [[0,0,0,0,2,2,2,2],
                     [0,0,0,2,1,1,1,2],
                     [0,0,2,1,1,1,1,2],
                      [0,2,1,1,1,1,1,2],
                      [2,1,1,1,1,1,1,2],
                       [2,1,1,1,1,1,2],
                        [2,1,1,1,1,2],
                         [2,1,1,1,2],
                          [2,2,2,2]],
       resourceInventory: {'0': 22, '1':5, '2':5, '3':6, '4':6, '5':6, '6':2},
       numberInventory: {'0':0, '2': 2, '3':3, '4':3, '5':3, '6':3, '8':3, '9':3, '10':3, '11':3, '12':2},
       portInventory: {'7': 5, '1':1, '2':1, '3':2, '4':1, '5':1},
       defaultPortPlacementInventory: [{ waterHex: { i: 0, j: 4 },
                                       landHex: { i: 1, j: 4},
                                       orientation: 2,
                                       resource: 3},
                                       { waterHex: { i: 0, j: 6 },
                                         landHex: { i: 1, j: 5},
                                         orientation: 3,
                                         resource: 2},
                                       { waterHex: { i: 1, j: 7 },
                                         landHex: { i: 2, j: 6},
                                         orientation: 3,
                                         resource: 7},
                                       { waterHex: { i: 3, j: 1 },
                                         landHex: { i: 3, j: 2},
                                         orientation: 1,
                                         resource: 1},
                                       { waterHex: { i: 4, j: 7 },
                                         landHex: { i: 3, j: 6},
                                         orientation: 4,
                                         resource: 7},
                                       { waterHex: { i: 5, j: 0 },
                                         landHex: { i: 4, j: 1},
                                         orientation: 0,
                                         resource: 3},
                                       { waterHex: { i: 6, j: 5 },
                                         landHex: { i:5, j: 5},
                                         orientation: 5,
                                         resource: 7},
                                       { waterHex: { i: 6, j: 0 },
                                         landHex: { i: 6, j: 1},
                                         orientation: 1,
                                         resource: 4},
                                       { waterHex: { i: 8, j: 0 },
                                         landHex: { i: 7, j: 1},
                                         orientation: 0,
                                         resource:7},
                                       { waterHex: { i: 8, j: 2 },
                                         landHex: { i: 7, j: 2},
                                         orientation: 5,
                                         resource: 7},
                                       { waterHex: { i: 7, j: 4 },
                                         landHex: { i: 7, j: 3},
                                         orientation: 4,
                                         resource: 7},],
       rules:{

       },
    }
  ],
  'Seafarers 3P':[
    {
    title:"Heading For New Shores",
    layoutData: [[0,0,0,0,2,2,2,2,2],
                  [0,0,0,2,4,2,1,1,2],
                   [0,0,2,4,2,1,1,1,2],
                    [0,2,4,2,1,1,1,1,2],
                     [2,4,4,2,1,1,1,2,2],
                      [2,4,4,2,1,1,2,2],
                       [2,4,4,2,2,2,2],
                        [2,4,4,4,4,2],
                         [2,2,2,2,2]],
    description:"All starting settlements must be on the main land, then build settlements on the smaller islands to get gold.",
    resourceInventory: {'0': 35, '1':2, '2':2, '3':4, '4':3, '5':3},
    secondaryResourceInventory: {'0': 4, '1': 2, '2': 2, '3': 1, '4':1, '5': 1, '8':2},
    numberInventory: {'0':0, '2': 1, '3':1, '4':1, '5':2, '6':2, '8':2, '9':1, '10':2, '11':2, '12':0},
    secondaryNumberInventory: {'0':0, '2': 1, '3':1, '4':1, '5':1, '6':1, '8':1, '9':1, '10':1, '11':1, '12':0},
    portInventory: {'7': 3, '1':1, '2':1, '3':1, '4':1, '5':1},
    defaultPortPlacementInventory:[{ waterHex: { i: 0, j: 7 },
                                    landHex: { i: 1, j: 6},
                                    orientation: 3,
                                    resource: 5},
                                    { waterHex: { i: 1, j: 5 },
                                      landHex: { i: 1, j: 4},
                                      orientation: 1,
                                      resource: 7},
                                    { waterHex: { i: 1, j: 8 },
                                      landHex: { i: 1, j: 7},
                                      orientation: 4,
                                      resource: 1},
                                    { waterHex: { i: 2, j: 8 },
                                      landHex: { i: 3, j: 2},
                                      orientation: 3,
                                      resource: 7},
                                    { waterHex: { i: 4, j: 3 },
                                      landHex: { i: 3, j: 4},
                                      orientation: 0,
                                      resource: 3},
                                    { waterHex: { i: 4, j: 7 },
                                      landHex: { i: 3, j: 7},
                                      orientation: 5,
                                      resource: 2},
                                    { waterHex: { i: 5, j: 3 },
                                      landHex: { i:5, j: 4},
                                      orientation: 1,
                                      resource: 7},
                                    { waterHex: { i: 5, j: 6 },
                                      landHex: { i: 5, j: 5},
                                      orientation: 4,
                                      resource: 4},],

    rules:{ isHeadingForNewShores: true
    }

    },
    {
      title: "Four Islands",
      layoutData: [[0,0,0,0,2,2,2,2,2],
                    [0,0,0,2,2,2,1,1,2],
                     [0,0,2,1,1,2,1,1,2],
                      [0,2,1,1,2,1,1,2,2],
                       [2,2,2,2,2,2,2,2,2],
                        [2,1,1,1,2,1,1,2],
                         [2,1,1,2,1,1,2],
                          [2,1,2,2,2,2],
                           [2,2,2,2,2]],
      description:"Build on smaller islands to get special victory points.",
      resourceInventory: {'0': 16, '1':4, '2':4, '3':5, '4':5, '5':5},
      numberInventory: {'0':0, '2': 1, '3':2, '4':3, '5':3, '6':2, '8':2, '9':3, '10':3, '11':3, '12':1},
      portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
      defaultPortPlacementInventory:[{ waterHex: { i: 1, j: 8 },
                                      landHex: { i: 2, j: 7},
                                      orientation: 3,
                                      resource: 7},
                                      { waterHex: { i: 2, j: 2 },
                                        landHex: { i: 3, j: 2},
                                        orientation: 2,
                                        resource: 7},
                                      { waterHex: { i: 3, j: 4 },
                                        landHex: { i: 2, j: 4},
                                        orientation: 5,
                                        resource: 2},
                                      { waterHex: { i: 4, j: 5 },
                                        landHex: { i: 3, j: 6},
                                        orientation: 0,
                                        resource: 1},
                                      { waterHex: { i: 4, j: 2 },
                                        landHex: { i: 5, j: 1},
                                        orientation: 3,
                                        resource: 5},
                                      { waterHex: { i: 5, j: 4 },
                                        landHex: { i: 6, j: 4},
                                        orientation: 2,
                                        resource: 7},
                                      { waterHex: { i: 6, j: 6 },
                                        landHex: { i:5, j: 6},
                                        orientation: 5,
                                        resource: 4},
                                      { waterHex: { i: 6, j: 0 },
                                        landHex: { i: 5, j: 1},
                                        orientation: 0,
                                        resource: 7},

                                      { waterHex: { i: 7, j:2 },
                                        landHex: { i: 6, j: 2},
                                        orientation: 5,
                                        resource:3},],

      rules:{

      }
    },
    {
      title:"Random board",
      description:"Out-wit and out-trade your opponents to win the game sea farer pieces to win the game.",
      layoutData: [[0,0,0,0,2,2,2,2,2],
                    [0,0,0,2,3,3,3,3,2],
                     [0,0,2,3,3,3,3,3,2],
                      [0,2,3,3,3,3,3,3,2],
                       [2,3,3,3,3,3,3,3,2],
                        [2,3,3,3,3,3,3,2],
                         [2,3,3,3,3,3,2],
                          [2,3,3,3,3,2],
                           [2,2,2,2,2]],
      resourceInventory: {'0': 14, '1':4, '2':4, '3':5, '4':5, '5':5, '6': 2, '8':2},
      numberInventory: {'0':0, '2': 1, '3':3, '4':3, '5':3, '6':2, '8':2, '9':3, '10':3, '11':3, '12':1},
      portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},

      rules:{forceRandomPortLocations: true
      }
     },

  ],
  "Seafarers 4P":[
    {
  title:"Heading For Newer Shores",
  layoutData: [[0,0,0,0,2,2,2,2,2,2],
                [0,0,0,2,4,2,1,1,1,2],
                 [0,0,2,4,2,1,1,1,1,2],
                  [0,2,4,2,1,1,1,1,1,2],
                   [2,4,4,2,1,1,1,1,2,2],
                    [2,4,4,2,1,1,1,2,2],
                     [2,4,4,2,2,2,2,2],
                      [2,4,4,4,4,4,2],
                       [2,2,2,2,2,2]],
  description:"All starting settlements must be on the main land, then build settlements on the smaller islands to get gold.",
  resourceInventory: {'0': 0, '1':3, '2':3, '3':4, '4':4, '5':4, '6': 1},
  secondaryResourceInventory: {'0': 5, '1': 2, '2': 2, '3': 1, '4':1, '5': 1, '8':2},
  numberInventory: {'0':0, '2': 1, '3':2, '4':2, '5':2, '6':2, '8':2, '9':2, '10':2, '11':2, '12':1},
  secondaryNumberInventory: {'0':0, '2': 1, '3':1, '4':1, '5':1, '6':1, '8':1, '9':1, '10':1, '11':1, '12':0},
  portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
  defaultPortPlacementInventory:[{ waterHex: { i: 0, j: 7 },
                                  landHex: { i: 1, j: 9},
                                  orientation: 2,
                                  resource: 3},

                                  { waterHex: { i: 0, j: 9 },
                                    landHex: { i: 1, j: 10},
                                    orientation: 3,
                                    resource: 2},

                                  { waterHex: { i: 1, j: 5},
                                    landHex: { i: 2, j: 5},
                                    orientation: 2,
                                    resource: 7},

                                  { waterHex: { i: 2, j: 9 },
                                    landHex: { i: 2, j: 8},
                                    orientation: 4,
                                    resource: 1},

                                  { waterHex: { i: 3, j: 3 },
                                    landHex: { i: 3, j: 4},
                                    orientation: 1,
                                    resource: 7},

                                  { waterHex: { i: 4, j: 8 },
                                    landHex: { i: 4, j: 7},
                                    orientation: 4,
                                    resource: 5},

                                  { waterHex: { i: 5, j: 3 },
                                    landHex: { i:4, j: 4},
                                    orientation: 0,
                                    resource: 7},

                                  { waterHex: { i: 6, j: 4 },
                                    landHex: { i: 5, j: 5},
                                    orientation: 0,
                                    resource: 4},

                                  { waterHex: { i: 6, j:6 },
                                    landHex: { i: 5, j: 6},
                                    orientation: 5,
                                    resource:7},],

  rules:{ isHeadingForNewShores: true
  }

},
{
  title:"Four Islands 2: For I Land, Too",
  layoutData: [[0,0,0,0,2,2,2,2,2],
                [0,0,0,2,1,2,1,1,2],
                 [0,0,2,1,2,1,1,1,2],
                  [0,2,1,1,2,1,1,2,2],
                   [2,2,2,2,1,2,2,2,2],
                    [2,1,1,2,2,1,1,2],
                     [2,1,1,1,2,1,2],
                      [2,1,1,2,1,2],
                       [2,2,2,2,2]],
  description:"Build on smaller islands to get special victory points.",
  resourceInventory: {'0': 19, '1':4, '2':4, '3':5, '4':5, '5':5},
  numberInventory: {'0':0, '2': 1, '3':3, '4':3, '5':3, '6':2, '8':2, '9':3, '10':3, '11':3, '12':1},
  portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},
  defaultPortPlacementInventory:[{ waterHex: { i: 2, j: 2 },
                                  landHex: { i: 2, j: 3},
                                  orientation: 1,
                                  resource: 3},
                                  { waterHex: { i: 3, j: 7 },
                                    landHex: { i: 2, j: 7},
                                    orientation: 5,
                                    resource: 2},
                                  { waterHex: { i: 4, j: 2 },
                                    landHex: { i: 3, j: 2},
                                    orientation: 5,
                                    resource: 7},
                                  { waterHex: { i: 3, j: 4 },
                                    landHex: { i: 4, j: 4},
                                    orientation: 2,
                                    resource: 1},
                                  { waterHex: { i: 4, j: 6 },
                                    landHex: { i: 5, j: 6},
                                    orientation: 2,
                                    resource: 7},
                                  { waterHex: { i: 5, j: 3 },
                                    landHex: { i: 6, j: 2},
                                    orientation: 3,
                                    resource: 3},
                                  { waterHex: { i: 6, j: 0 },
                                    landHex: { i:5, j: 1},
                                    orientation: 0,
                                    resource: 7},
                                  { waterHex: { i: 6, j: 6 },
                                    landHex: { i: 5, j: 6},
                                    orientation: 5,
                                    resource: 4},

                                  { waterHex: { i: 7, j:0 },
                                    landHex: { i: 7, j: 1},
                                    orientation: 1,
                                    resource:7},],

  rules:{
  }
  },

{
  title:"Road Rage 3: Boats 'n Roads",
  description:"A race to shut down your opponents in a road and boat-centric battle. Wood, brick and wool are plenty.",
  layoutData: [[0,0,0,0,2,2,2,2,2,2],
                [0,0,0,2,3,3,3,3,3,2],
                 [0,0,2,3,3,3,3,3,3,2],
                  [0,2,3,3,3,3,3,3,3,2],
                   [2,2,3,3,3,3,3,3,2,2],
                    [2,3,3,3,3,3,3,3,2],
                     [2,3,3,3,3,3,3,2],
                      [2,3,3,3,3,3,2],
                       [2,2,2,2,2,2]],
  resourceInventory: {'0': 19, '1':4, '2':4, '3':5, '4':5, '5':5},
  numberInventory: {'0':0, '2': 1, '3':3, '4':3, '5':3, '6':2, '8':2, '9':3, '10':3, '11':3, '12':1},
  portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},

  rules:{isRoadRage2ANewWorld: true, forceRandomPortLocations: true
  }
 },
 {
   title:"Random board",
   description:"Out-wit and out-trade your opponents win the game with this scenario.",
   layoutData: [[0,0,0,0,2,2,2,2,2,2],
                 [0,0,0,2,3,3,3,3,3,2],
                  [0,0,2,3,3,3,3,3,3,2],
                   [0,2,3,3,3,3,3,3,3,2],
                    [2,2,3,3,3,3,3,3,2,2],
                     [2,3,3,3,3,3,3,3,2],
                      [2,3,3,3,3,3,3,2],
                       [2,3,3,3,3,3,2],
                        [2,2,2,2,2,2]],
   resourceInventory: {'0': 19, '1':4, '2':4, '3':5, '4':5, '5':5, '6': 2, '8':2},
   numberInventory: {'0':0, '2': 1, '3':3, '4':3, '5':3, '6':2, '8':2, '9':3, '10':3, '11':3, '12':1},
   portInventory: {'7': 4, '1':1, '2':1, '3':1, '4':1, '5':1},

   rules:{isRandomBoard: true, forceRandomPortLocations: true
   }
  },
]

}

var Home = React.createClass(
 {
 getDefaultProps: function()
 {
   return{
    }
 },

 getInitialState: function()
 {
   return {
     layout:null,
     boardShown:false,
     diceShown:false,
     statsShown:false,
     currentPage:0,
     scrollHeight:null,
     configSelected: [0,0],
     appManager: AppManager,
   }
 },

 componentDidMount: function()
 {
   var thisThing = this;
   this.refs.progressOverlay.fadeIn();
   this.state.appManager.initialize(function()
   {
     thisThing.forceUpdate();
     thisThing.state.appManager.loadConfiguration(function(configuration)
     {
       if( configuration != null )
       {
         thisThing._configuration = configuration;
         thisThing.forceUpdate();
       }
     })
     if( thisThing.state.appManager._products.length > 0 )
     {
       thisThing.refs.progressOverlay.fadeOut();
     }
     thisThing.state.appManager.updateProducts(function()
     {
       thisThing.forceUpdate();
       thisThing.state.appManager.updatePurchases(function()
       {
         thisThing.refs.progressOverlay.fadeOut();
         thisThing.forceUpdate();
       });
     });
   });

 },

 _hasCatanerated: false,
 boardSelected: function(shouldRecatanerate)
 {
   if( typeof shouldRecatanerate === 'undefined' ) shouldRecatanerate = !this._hasCatanerated;
   this._hasCatanerated = true;

   if( this.state.boardShown )
   {
     this.state.boardShown = false;
     this.state.diceShown = false;
     this.state.statsShown = false;

     this.refs.gameContainer.hide();
   }
   else
   {
     if( !this.state.diceShown && !this.state.statsShown )
     {
       if( shouldRecatanerate )
       {
         var configGroup = configGroups[this.state.configSelected[0]];
         var config = configs[configGroup][this.state.configSelected[1]];
         if( typeof config.rules === 'undefined' ) config.rules = {};
         for( var key in this._configuration )
         {
           config.rules[key] = this._configuration[key];
         }
         this.refs.gameContainer.show(config,1);
       }
       else
       {
         this.refs.gameContainer.show(null,1);
       }
     }
     else
     {
       this.refs.gameContainer.show(null,1);
     }
     this.state.boardShown = true;
     this.state.diceShown = false;
     this.state.statsShown = false;
   }
   this.updateTabs();
 },

 diceSelected: function()
 {
   if( !this._hasCatanerated )
   {
     this._hasCatanerated = true;
     var configGroup = configGroups[this.state.configSelected[0]];
     var config = configs[configGroup][this.state.configSelected[1]];
     if( typeof config.rules === 'undefined' ) config.rules = {};
     for( var key in this._configuration )
     {
       config.rules[key] = this._configuration[key];
     }
     this.refs.gameContainer.show(config,0);
   }

   if( this.state.diceShown )
   {
     this.state.boardShown = false;
     this.state.diceShown = false;
     this.state.statsShown = false;

     this.refs.gameContainer.hide();
   }
   else
   {
     this.refs.gameContainer.show(null,0);
     this.state.boardShown = false;
     this.state.diceShown = true;
     this.state.statsShown = false;
   }
   this.updateTabs();
 },

 statsSelected: function()
 {
   if( !this._hasCatanerated )
   {
     this._hasCatanerated = true;
     var configGroup = configGroups[this.state.configSelected[0]];
     var config = configs[configGroup][this.state.configSelected[1]];
     if( typeof config.rules === 'undefined' ) config.rules = {};
     for( var key in this._configuration )
     {
       config.rules[key] = this._configuration[key];
     }
     this.refs.gameContainer.show(config,1);
   }

   if( this.state.statsShown )
   {
     this.state.boardShown = false;
     this.state.diceShown = false;
     this.state.statsShown = false;
     this.refs.gameContainer.hide();
   }
   else
   {
     this.refs.gameContainer.show(null,2);
     this.state.boardShown = false;
     this.state.diceShown = false;
     this.state.statsShown = true;
   }
   this.updateTabs();
 },

 updateTabs: function()
 {
   this.refs.boardTab.setState({buttonType:this.state.boardShown ? 7 : 3})
   this.refs.diceTab.setState({buttonType:this.state.diceShown ? 7 : 3})
   this.refs.statsTab.setState({buttonType:this.state.statsShown ? 7 : 3})
 },

 configSelected: function(configSelected)
 {
   if( configSelected[0] != this.state.configSelected[0] || configSelected[1] != this.state.configSelected[1] )
   {
     for( var i = 0; i < configGroups.length; i++ )
     {
       var configGroup = configs[configGroups[i]];
       for( var j = 0; j < configGroup.length; j++ )
       {
         var key = "gameConfig"+i+","+j;
         var isSelected = (i == configSelected[0]) && (j == configSelected[1])
         this.refs[key].setIsSelected(isSelected)
       }
     }

    //  "gameConfig"+configGroupIndex+","+configIndex
     this.state.configSelected = configSelected;
   }
 },

 setCurrentPage: function(currentPage)
 {
   this.state.currentPage = currentPage;

   for( var i = 0; i < configGroups.length; i++ )
   {
     var key = "gameConfigPage"+i;
     var isSelected = i == currentPage;
     this.refs[key].setIsCurrentPage(isSelected)
   }
 },

 _configuration:{adjacentReds:false,fairDice:false,ports:0,maxDots:12,randomPortLocations:false,fairPorts:false, showLabels:false},
 configurationChanged: function(newConfiguration)
 {
   this._configuration = newConfiguration;
   this.state.appManager.saveConfiguration(newConfiguration);
 },

 render: function()
 {
   var appManager = this.state.appManager;

   var thisThing = this;
   var scrollWidth = 0;
   if( this.state.layout != null )
   {
     scrollWidth = Platform.OS === "ios" ? this.state.layout.width - 160 : this.state.layout.width - 60;
   }

   var leftArrowStyle = Platform.OS === "ios" ? {position:'absolute', left:(this.state.layout.width-scrollWidth)/4 - (60/2), width:60, height:60, top:(this.state.scrollHeight-60)/2} :
                                                {position:'absolute', left:0, width:30, top:0, bottom:0};
   var rightArrowStyle = Platform.OS === "ios" ? {position:'absolute', right:(this.state.layout.width-scrollWidth)/4 - (60/2), width:60, height:60, top:(this.state.scrollHeight-60)/2} :
                                                  {position:'absolute', right:0, width:30, top:0, bottom:0};




   return(
    <View style={{flex:1, flexDirection:'column'}} onLayout={(info) =>
      {
        var newLayout = info.nativeEvent.layout;
        if( thisThing.state.layout == null || thisThing.state.layout.width != newLayout.width || thisThing.state.layout.height != newLayout.height )
        {
          thisThing.state.layout = newLayout;
          thisThing.setState({layout:newLayout})
        }
      }}>
      <View style={{paddingTop:Globals.STATUS_BAR_HEIGHT + 44}} />

      <View style={{paddingHorizontal:10, paddingBottom:10, paddingTop:0, flex:1, marginBottom:65}}>

        {
          this.state.layout != null ?
            <View style={{flex:1, flexDirection:'row', alignSelf:'center', alignItems:'center',  overflow:'visible', backgroundColor:"#DDD", width:this.state.layout.width, paddingHorizontal:(this.state.layout.width - scrollWidth)/2}} onLayout={(info) =>
              {
                var newLayout = info.nativeEvent.layout;
                if( thisThing.state.scrollHeight == null || thisThing.state.scrollHeight != newLayout.height )
                {
                  thisThing.state.scrollHeight = newLayout.height;
                  thisThing.setState({scrollHeight:newLayout.height})
                }
              }}>
              {
                this.state.scrollHeight != null ?
                <ScrollView ref="configScroll" showsHorizontalScrollIndicator={false} horizontal={true} scrollEnabled={!(thisThing.state.boardShown || thisThing.state.diceShown || thisThing.state.statsShown)} scrollEventThrottle={200} snapToInterval={scrollWidth} horizontal={true} removeClippedSubviews={false} pagingEnabled={true} style={{height:this.state.scrollHeight, width:scrollWidth, overflow:'visible'}} onScroll={(info)=>
                  {
                    var offset = info.nativeEvent.contentOffset.x;
                    var currentPage = Math.round(parseFloat(offset)/parseFloat(scrollWidth));
                    if( currentPage != thisThing.state.currentPage )
                    {
                      thisThing.setCurrentPage(currentPage)
                    }
                  }}>
                  <View style={{flexDirection:'row', height:this.state.scrollHeight, overflow:'visible'}}>
                  {
                    configGroups.map(function(configGroup, configGroupIndex)
                    {
                      var productKey = configGroupProductKeys[configGroupIndex];
                      var isPurchased = appManager.isKeyPurchased(productKey);

                      return <GameConfigPage ref={"gameConfigPage"+configGroupIndex}
                              isPurchased={isPurchased}
                              pageWidth={scrollWidth}
                              productDescription={appManager.productDescription(productKey)}
                              productPrice={appManager.productPrice(productKey)}
                              purchaseSelected={function()
                              {
                                thisThing.refs.progressOverlay.fadeIn();
                                setTimeout(function()
                                {
                                  appManager.purchaseProduct(productKey, function()
                                  {
                                    appManager.updatePurchases(function()
                                    {
                                      thisThing.refs.progressOverlay.fadeOut();
                                      var key = "gameConfigPage"+configGroupIndex;
                                      thisThing.refs[key].setIsPurchased(appManager.isKeyPurchased(productKey))
                                      thisThing.forceUpdate();
                                    })
                                  }, function()
                                  {
                                    thisThing.refs.progressOverlay.fadeOut();
                                    // did not log in
                                  })

                                }, 50)
                              }}
                              isCurrentPage={configGroupIndex==thisThing.state.currentPage}
                              key={configGroup}>
                          <UILabel type={0} style={{alignSelf:'center', height:30, lineHeight:30}}>
                            {configGroup}
                          </UILabel>
                          <ScrollView scrollEnabled={!(thisThing.state.boardShown || thisThing.state.diceShown || thisThing.state.statsShown)} showsVerticalScrollIndicator={false} snapToInterval={148} style={{width:scrollWidth, flexDirection:'column', flex:1}}>
                          {
                            configs[configGroup].map(function(config, configIndex)
                            {
                              return <GameConfigCard ref={"gameConfig"+configGroupIndex+","+configIndex} key={"gameConfig"+configGroupIndex+","+configIndex} isSelected={thisThing.state.configSelected[0] == configGroupIndex && thisThing.state.configSelected[1] == configIndex} {...config} onPress={()=>
                                {
                                  thisThing.configSelected([configGroupIndex, configIndex])
                                }}/>
                            })
                          }
                          <View style={{height:10}} />
                        </ScrollView>
                      </GameConfigPage>
                    })
                  }
                  </View>
                </ScrollView>
                : null
              }
              <View style={{width:(scrollWidth-200)/2}}>
              </View>
              {
                this.state.scrollHeight != null ?
                  <Button buttonType={Platform.OS === "ios" ? 6 : 10} title="←" style={leftArrowStyle} onPress={()=>
                    {
                      if( thisThing.state.currentPage > 0 ) thisThing.refs.configScroll.scrollTo({y:0, x:(thisThing.state.currentPage-1)*scrollWidth, animated:true})
                    }}/> : null
              }
              {
                this.state.scrollHeight != null ?
                  <Button buttonType={Platform.OS === "ios" ? 6 : 10} title="→" style={rightArrowStyle} onPress={()=>
                    {
                      if( thisThing.state.currentPage < (configGroups.length-1) ) thisThing.refs.configScroll.scrollTo({y:0, x:(thisThing.state.currentPage+1)*scrollWidth, animated:true})
                    }}/> : null
              }
            </View>
            : <View style={{padding:10, flex:1}} />
        }
      </View>

      {
        this.state.layout != null ?
          <View style={{flexDirection:'row', width:this.state.layout.width, height:44, shadowOpacity:0.4, shadowRadius:1, shadowOffset:{width:0, height:2}, position:'absolute', top:Globals.STATUS_BAR_HEIGHT}}>
            <Button ref="diceTab" buttonType={thisThing.state.diceShown ? 7 : 3} fontWeight={thisThing.state.diceShown ? "bold" : "normal"} style={{padding:10, flex:1}} onPress={()=>
              {
                thisThing.diceSelected();
              }}>
              <Image source={require('./diceIcon.png')} style={{width:22, height:22}} />
            </Button>
            <Button ref="boardTab" buttonType={thisThing.state.boardShown ? 7 : 3} fontWeight={thisThing.state.boardShown ? "bold" : "normal"} style={{padding:10, flex:1}} onPress={()=>
              {
                thisThing.boardSelected();
              }}>
              <Hexagon sideLength={11} color={UIColor.secondary[1]}/>
            </Button>
            <Button ref="statsTab" buttonType={thisThing.state.statsShown ? 7 : 3} fontWeight={thisThing.state.statsShown ? "bold" : "normal"} style={{padding:10, flex:1}} onPress={()=>
              {
                thisThing.statsSelected();
              }}>
              <Icon name="bar-chart" size={22} color={UIColor.secondary[1]} />
            </Button>
          </View>
        : null
      }
      {
        this.state.layout != null ?
          <View style={{flexDirection:'column', width:this.state.layout.width, shadowOpacity:0.2, shadowRadius:1, shadowOffset:{width:0, height:-2}, position:'absolute', bottom:0, padding:10}}>
            <View style={{flexDirection:'row'}}>
              <Button buttonType={9} icon={"cog"} style={{padding:10}} onPress={()=>
              {
                thisThing.refs.settings.show(thisThing._configuration, 1);
              }}/>
              <View style={{width:10}} />
              <Button title="Catanerate!" style={{padding:10, flex:1}} onPress={()=>
              {
                thisThing.boardSelected({});
              }}/>
            </View>
          </View>
        : null
      }
      {
        this.state.layout != null ?
          <GameContainer ref="gameContainer" layout={this.state.layout} />
        : null
      }
      {
        this.state.layout != null ?
          <Settings ref="settings" layout={this.state.layout} configurationChanged={this.configurationChanged}/>
        : null
      }
      <ProgressOverlay ref="progressOverlay"/>
    </View>
  )
 }
})

module.exports = Home;
