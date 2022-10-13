Feature: Minesweeper

Background: 
  Given the player opens the game

Scenario: Starting game - All the cells should be hidden  
  Then all the cells should be covered

Scenario: Starting game - All the cells should be enabled
  Then all the cells should be enabled  

Scenario: Uncovering a cell - Disabling the cell
  And lorem ipsum
  When the player uncovers the cell "1,2"
  Then the cell "1,2" should be disabled

Scenario: Uncovering a cell with the mouse - Using mouse left click
  And lorem ipsum
  When the player left clicks on the cell (1,2)
  Then the cell (1,2) should be disabled

Scenario: Uncovering a cell with a mine - Losing the game
  And lorem ipsum
  When the player uncovers the cell (1,1)
  Then the player should lose the game

Scenario: Uncovering a cell with a mine - Showing a highlighted mine
  And lorem ipsum
  When the player uncovers the cell (1,1)
  Then the cell (1,1) should show: a highlighted mine

Scenario Outline: Uncovering a cell with no mine - Displaying the number of adjacent mines
  And lorem ipsum <boardData>
  When the player uncovers the cell (2,2)
  Then the cell (2,2) should show the following value: <number>

Examples:
| boardData   | number |
| o*o-ooo-ooo | 1      |
| o*o-ooo-oo* | 2      |
| o*o-ooo-*o* | 3      |
| *o*-ooo-*o* | 4      |
| ***-*o*-ooo | 5      |
| *o*-*o*-*o* | 6      |
| ***-oo*-*** | 7      |
| ***-*o*-*** | 8      |

Scenario Outline: Uncovering a cell with no mine or mines around it - Displaying an empty cell
  And lorem ipsum
  When the player uncovers the cell (<row>,<column>)
  Then the cell (<row>,<column>) should be displayed empty

  Examples:
  | row | column |
  | 1   | 1      |
  | 1   | 3      |
  | 2   | 2      |

Scenario: Uncovering an empty cell - Uncovering neighbor cells
  And lorem ipsum
  When the player uncovers the cell (2,2)
  Then the minefield should look like this:

Scenario: Suspecting that a cell is hiding a mine - Tagging as mined
  When the player tags as "mined" the cell (1,1)
  Then the cell (1,1) should show a "mined" symbol

Scenario: Untagging the mined tag - Removing the mined symbol
  And the player tags as "mined" the cell (1,1)
  When the player untags the cell (1,1)
  Then the cell (1,1) should not show a "mined" symbol

Scenario: Tagging a cell as mined using the mouse - Using mouse right click
  When the player right clicks on the cell (1,1)
  Then the cell (1,1) should show a "mined" symbol

Scenario: Discovering all the cells without mines - Winning the game  
  And lorem ipsum 
  When the player uncovers the cell (1,2)
  Then the player should win the game

Scenario Outline: Finishing game, disabling all the cells
  And lorem ipsum
  When the player uncovers the cell <row>,<col>
  Then all the cells should be disabled
 
  Examples:
  | row | col |
  | 1   | 1   |
  | 1   | 2   |