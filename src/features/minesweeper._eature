Scenario: The are no mines on the minefield - Winning game
  Given the user opens the game loading the following mock data:
  """
  o
  """
  Then the user should win the game
  # And the remaining mines counter should be "0"
  # And the game should be over with the following message: "You win!"

Scenario Outline: Default values - Showing the number of hidden mines in the non-tagged mines counter
  When the player loads the following mock data: "<boardData>"
  Then the non-tagged mines counter should be "<mines>"

Examples:
| boardData   | mines |
| o*o-ooo-ooo |     1 |
| o*o-ooo-oo* |     2 |
| o*o-ooo-*o* |     3 |
| *o*-ooo-*o* |     4 |
| ***-*o*-ooo |     5 |
| *o*-*o*-*o* |     6 |
| ***-oo*-*** |     7 |
| ***-*o*-*** |     8 |


  
Scenario: Tagging a cell as mined 
  Given the board loads the following data: "*"
  When the user tags the cell, on row "1" column "1", as mined
  Then the board should display the following data: "!"
  And the remaining mines counter should be "0"

Scenario: Tagging a cell as inconclusive
  Given the board loads the following data: "*"
  When the user tag the cell("1", "1") as inconclusive
  Then the board should display the following data: "?"
  And the remaining mines counter should be "1"

Scenario: Excessively tagging - No aim
  Given the board loads the following data: "*o-oo"
  And the user tags the cell, on row "1" column "2", as mined
  When the user tags the cell, on row "2" column "1", as mined
  Then the board should display the following data: ".!-!."
  And the remaining mines counter should be "-1"

Scenario: Excessively tagging - With some aim
  Given the board loads the following data: "*o-oo"
  And the user tags the cell, on row "1" column "2", as mined
  When the user tags the cell, on row "1" column "1", as mined
  Then the board should display the following data: "!!-.."
  And the remaining mines counter should be "-1"

Scenario: Showing bad tags when the game is over
  Given the board loads the following data: "*o-oo"
  And the user tags the cell, on row "1" column "2", as mined
  When the user reveals the cell on row "1" column "1"
  Then the board should display the following data: "*x-.."

Scenario: Disabling board cells when the game is over
  Given the board loads the following data: "*o-oo"
  And the user tags the cell, on row "1" column "2", as mined
  And the user reveals the cell on row "1" column "1"
  When the user reveals the cell on row "2" column "1"
  And the user reveals the cell on row "2" column "2"
  Then the board should display the following data: "*x-.."
  
Scenario: Showing all mines when the user lose the game
  Given the board loads the following data: "*o-**"
  And the user reveals the cell on row "1" column "1"
  Then the board should display the following data: "*.-**"



Scenario: Reavealing a cell with no adjacent mines -> Revealing adjacent cells (recursively)
  Given the board loads the following data
  """
  | o  | o | o | o | o | o |
  **oooo
  oooooo
  oooooo
  oooooo
  ooooo*
  """
  When the user reveals the cell on row "4" column "4"
  Then the board should display the following data
  """
  | . | . | 1 | 0 | 0 | 0 |
  ..1000
  221000
  000000
  000011
  00001.
  """
