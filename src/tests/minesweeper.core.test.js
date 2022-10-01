// import { expect } from '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import * as steps from './steps/minesweeper.core.steps.js'
import { defineFeature, loadFeature } from 'jest-cucumber'
// import { expect } from '@testing-library/react'
const feature = loadFeature('./src/features/minesweeper.core.feature')

defineFeature(feature, test => {
  test('Revealing a cell with a mine - Losing game', ({ given, when, then }) => {
    given('the user opens the game loading the following mock data:', (mockData) => {
      steps.openTheGameWithMockData(mockData)
    })
    when(/^the user uncovers the cell in row (.*) column (.*)$/, (row, column) => {
      steps.uncoverCell(row, column)
    })
    then('the user should lose the game', () => {
      expect(steps.isGameOver()).toEqual(true)
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
