Feature: Minesweeper

  As a player:
  - I want to play to the classic minesweeper game
  - So I want to detect all the mines in the board

  How to refer to a cell: 
  - Using the (row,column) nomenclature
  - Rows and columns starts from 1

  How to load mock data: 
  - Using the <ctrl>+m keyboard combination to discover
    the load mock data form

  To define the board data will use: 
    "o" No mine
    "*" Mine
    "-" Row separator

    Thera are two ways to define mock data:
    - Inline:
      "***-ooo-*oo"
    - Table:
      | * | * | * |
      | o | o | o |
      | * | o | o |

  To define the board display will use:
    COVERED CELLS
      "." Hidden cell
      "!" Cell tagged has mined cell by the user
      "?" Cell tagged has inconclusive cell by the user
      "x" Cell wrongly tagged has no mined cell by the user
    UNCOVERED CELLS
      "0" Empty cell
      "1" Clean cell with 1 adjacent mine
      "2" Clean cell with 2 adjacent mines
      "3" Clean cell with 3 adjacent mines
      "4" Clean cell with 4 adjacent mines
      "5" Clean cell with 5 adjacent mines
      "6" Clean cell with 6 adjacent mines
      "7" Clean cell with 7 adjacent mines
      "8" Clean cell with 8 adjacent mines
      "9" Clean cell with 9 adjacent mines

Background: 
  Given the player opens the game 
          
Scenario: Uncovering a cell with the mouse - Disabling the cell
  Given the player loads the following mock data:
  """
  | * | o |  
  """
  When the player clicks on the cell (1,2)
  Then the cell (1,2) should be disabled


Scenario: Uncovering a cell with a mine - Losing the game
  Given the player loads the following mock data:
  """
  | * | o |
  """
  When the player uncovers the cell (1,1)
  Then the player should lose the game

Scenario Outline: Uncovering a cell with no mine - Displaying the number of adjacent mines
  Given the player loads the following mock data: <boardData>
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


  # And the board should display the following data: "*"
  # And the remaining mines counter should be "1"
  # And the game should be over with the following message: "You lose!"
