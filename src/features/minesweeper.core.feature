Feature: Minesweeper

  How to load mock data? 
  bla bla bla

rows and columns starts from 1

  As a user
  I want to play to the classic minesweeper game
  So that I can to detect all the mines in the board

  To define the board data will use: 
    "o" No mine
    "*" Mine

  To define the board display will use:
    "." Hidden cell
    "!" Cell tagged has mined cell by the user
    "?" Cell tagged has inconclusive cell by the user
    "x" Cell wrongly tagged has no mined cell by the user
    "0" Clean cell without adjacent mines
    "1" Clean cell with 1 adjacent mine
    "2" Clean cell with 2 adjacent mines
    "3" Clean cell with 3 adjacent mines
    "4" Clean cell with 4 adjacent mines
    "5" Clean cell with 5 adjacent mines
    "6" Clean cell with 6 adjacent mines
    "7" Clean cell with 7 adjacent mines
    "8" Clean cell with 8 adjacent mines
    "9" Clean cell with 9 adjacent mines

Scenario: Uncovering a cell with the mouse - Disabling the cell
  Given the user opens the game loading the following mock data:
  """
  | * | o |
  | o | o |
  """
  When the user clicks on the cell (1,1)
  Then the cell (1,1) should be disabled


Scenario: Uncovering a cell with a mine - Losing game
  Given the user opens the game loading the following mock data:
  """
  | * | o |
  """
  When the user uncovers the cell (1,1)
  Then the user should lose the game
  # And the board should display the following data: "*"
  # And the remaining mines counter should be "1"
  # And the game should be over with the following message: "You lose!"
