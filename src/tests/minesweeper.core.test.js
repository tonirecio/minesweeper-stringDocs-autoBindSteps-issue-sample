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
      steps.isUncover(row, col)
    })
  })

  test('Uncovering a cell with a mine - Losing game', ({ given, when, then }) => {
    given('the player opens the game', () => {
      console.log('1')
      steps.openTheGame()
      console.log('2')
    })
    given('the player loads the following mock data:', (mockData) => {
      console.log('3')
      steps.loadMockData(mockData)
      console.log('4')
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
      console.log('5')
      steps.uncoverCell(row, col)
      console.log('6')
    })
    then('the player should lose the game', async () => {
      // const welcomeElement = screen.getByText('GAME OVER')
      console.log('7')
      // expect(await steps.isGameOver()).toEqual(true)
      // expect(steps.isUncover(1, 1)).toEqual(true)
      await steps.isGameOver()
      console.log('8')
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
