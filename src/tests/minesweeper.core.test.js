import { MineSweeperSteps } from './steps/minesweeper.core.steps.js'
import { defineFeature, loadFeature } from 'jest-cucumber'
const feature = loadFeature('./src/features/minesweeper.core.feature')

defineFeature(feature, test => {
  test('Revealing a cell with a mine - Losing game', ({ given, when, then }) => {
  })

  test('The are no mines on the minefield - Winning game', ({
    given,
    then
  }) => {
    given(/^the user opens the game loading the following mock data: (.*)$/, (mockData) => {
      MineSweeperSteps.TheUserOpensTheGameLoadingTheFollowingMockData(mockData)
    })
    then('the user should win the game', () => {
      MineSweeperSteps.TheUserShouldWinTheGame()
    })
  })

  test('Starting game - Hidding mines', ({
    given,
    then
  }) => {
    given('the user opens the game', () => {
      MineSweeperSteps.TheUserOpensTheGame()
    })
    then('all the cells in the board should be covered', () => {
      MineSweeperSteps.AllTheCellsInTheBoardShouldBeCovered()
    })
  })
})
