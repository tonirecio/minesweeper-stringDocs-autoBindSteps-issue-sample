/* eslint-disable no-undef */
// import { loadFeatures, autoBindSteps } from 'jest-cucumber'
import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/minesweeper.core.steps.js'
// const features = loadFeatures('./src/features/**/*.feature')

// const stepsRef = ({ given, and, when, then }) => {
//   given('the player opens the game', () => {
//     steps.openTheGame()
//   })
//   then('all the cells should be covered', () => {
//     // steps.isUncovered(row, col)
//   })
//   given(/^the player loads the following mock data: (.*)$/, (mockData) => {
//     steps.loadMockData(mockData)
//   })
//   when(/^the player clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
//     steps.uncoverCell(row, col)
//   })
//   then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
//     steps.isUncovered(row, col)
//   })
//   when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
//     steps.uncoverCell(row, col)
//   })
//   then(/^the cell \((\d+),(\d+)\) should show the following value: (.*)$/, (row, col, value) => {
//     // steps.isValueInTheCell(row, col, value)
//   })
//   then('the player should lose the game', async () => {
//     await steps.isGameOver()
//   })
// }

// autoBindSteps(features, [stepsRef])

const feature = loadFeature('./src/features/minesweeper.core.feature')

defineFeature(feature, test => {
  test('Starting game - All the cells should be hidden', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    then('all the cells should be covered', () => {
      expect(steps.areAllCellsCovered()).toBe(true)
    })
  })

  test('Uncovering a cell with the mouse - Using mouse left click', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player left clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
      expect(steps.isUncovered(Number(row) - 1, Number(col) - 1)).toBe(true)
    })
  })

  test('Uncovering a cell - Disabling the cell', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
      expect(steps.isUncovered(Number(row) - 1, Number(col) - 1)).toBe(true)
    })
  })

  test('Uncovering a cell with a mine - Losing the game', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then('the player should lose the game', () => {
      expect(steps.isGameOver()).toBe(true)
    })
  })

  test('Uncovering a cell with no mine - Displaying the number of adjacent mines', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given(/^the player loads the following mock data: (.*)$/, (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then(/^the cell \((\d+),(\d+)\) should show the following value: (.*)$/, (row, col, number) => {
      expect(steps.isValueInTheCell(Number(row) - 1, Number(col) - 1, number)).toBe(true)
    })
  })

  test('Uncovering a cell with no mine or mines around it - Displaying an empty cell', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then(/^the cell \((.*),(.*)\) should be displayed empty$/, (row, col) => {
      expect(steps.isValueInTheCell(Number(row) - 1, Number(col) - 1, '')).toBe(true)
    })
  })

  test('Uncovering a cell with a mine - Showing a highlighted mine', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then(/^the cell \((\d+),(\d+)\) should show: (.*)$/, (row, col, element) => {
      expect(steps.isCellShowingA(Number(row) - 1, Number(col) - 1, element)).toBe(true)
    })
  })

  test('Uncovering an empty cell - Uncovering neighbor cells', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(Number(row) - 1, Number(col) - 1)
    })
    then('the minefield should look like this:', (expectedMineFieldStatus) => {
      expect(steps.isMineFieldLookLike(expectedMineFieldStatus)).toBe(true)
    })
  })

  test('Suspecting that a cell is hiding a mine - Tagging as mined', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
      steps.tagCell(Number(row) - 1, Number(col) - 1, tag)
    })
    then(/^the cell \((\d+),(\d+)\) should show a "(.*)" symbol$/, (row, col, tag) => {
      expect(steps.isCellShowingA(Number(row) - 1, Number(col) - 1, '!')).toBe(true)
    })
  })

  test('Untagging the mined tag - Removing the mined symbol', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given(/^When the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
      steps.tagCell(Number(row) - 1, Number(col) - 1, tag)
    })
    when(/^the player untags the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.tagCell(Number(row) - 1, Number(col) - 1, '')
    })
    then(/^the cell \((\d+),(\d+)\) should not show a "(.*)" symbol$/, (row, col) => {
      expect(steps.isCellShowingA(Number(row) - 1, Number(col) - 1, '.')).toBe(true)
    })
  })
  // test('The are no mines on the minefield - Winning game', ({
  //   given,
  //   then
  // }) => {
  //   given(/^the user opens the game loading the following mock data: (.*)$/, (mockData) => {
  //     // MineSweeperSteps.TheUserOpensTheGameLoadingTheFollowingMockData(mockData)
  //   })
  //   then('the user should win the game', () => {
  //     // MineSweeperSteps.TheUserShouldWinTheGame()
  //   })
  // })

  // test('Starting game - Hidding mines', ({
  //   given,
  //   then
  // }) => {
  //   given('the user opens the game', () => {
  //     steps.openTheGame()
  //   })
  //   then('all the cells in the board should be covered', () => {
  //     // MineSweeperSteps.AllTheCellsInTheBoardShouldBeCovered()
  //   })
  // })
})
