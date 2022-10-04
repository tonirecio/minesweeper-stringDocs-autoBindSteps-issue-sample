import { defineFeature, loadFeature } from 'jest-cucumber'
import * as steps from './steps/minesweeper.core.steps.js'

const feature = loadFeature('./src/features/minesweeper.core.feature')

defineFeature(feature, test => {
  test('Uncovering a cell with the mouse - Disabling the cell', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    given('the player loads the following mock data:', (mockData) => {
      steps.loadMockData(mockData)
    })
    when(/^the player clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
      steps.uncoverCell(row, col)
    })
    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
      steps.isUncovered(row, col)
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
      steps.uncoverCell(row, col)
    })
    then('the player should lose the game', async () => {
      await steps.isGameOver()
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
      steps.uncoverCell(row, col)
    })
    then(/^the cell \((\d+),(\d+)\) should show the following value: (.*)$/, async (row, col, number) => {
      await steps.isValueInTheCell(row, col, number)
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
