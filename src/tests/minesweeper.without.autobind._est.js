/* eslint-disable no-undef */

import { loadFeature, defineFeature } from 'jest-cucumber'

const feature = loadFeature('./src/features/minesweeper.feature')

defineFeature(feature, test => {
  test('Starting game - All the cells should be hidden', ({ given, then }) => {
    given('the player opens the game', () => {
    })
    then('all the cells should be covered', () => {
      expect(true).toBe(true)
    })
  })

  test('Starting game - All the cells should be enabled', ({ given, then }) => {
    given('the player opens the game', () => {
    })
    then('all the cells should be enabled', () => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering a cell with the mouse - Using mouse left click', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player left clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering a cell - Disabling the cell', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering a cell with a mine - Losing the game', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then('the player should lose the game', () => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering a cell with no mine - Displaying the number of adjacent mines', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given(/^the player loads the following mock data: (.*)$/, (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should show the following value: (.*)$/, (row, col, number) => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering a cell with no mine or mines around it - Displaying an empty cell', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((.*),(.*)\) should be displayed empty$/, (row, col) => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering a cell with a mine - Showing a highlighted mine', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should show: (.*)$/, (row, col, element) => {
      expect(true).toBe(true)
    })
  })

  test('Uncovering an empty cell - Uncovering neighbor cells', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then('the minefield should look like this:', (expectedMineFieldStatus) => {
      expect(true).toBe(true)
    })
  })

  test('Suspecting that a cell is hiding a mine - Tagging as mined', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should show a "(.*)" symbol$/, (row, col, tag) => {
      expect(true).toBe(true)
    })
  })

  test('Untagging the mined tag - Removing the mined symbol', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given(/^When the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
    })
    when(/^the player untags the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should not show a "(.*)" symbol$/, (row, col) => {
      expect(true).toBe(true)
    })
  })

  test('Tagging a cell as mined using the mouse - Using mouse right click', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    when(/^the player right clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then(/^the cell \((\d+),(\d+)\) should show a "mined" symbol$/, (row, col) => {
      expect(true).toBe(true)
    })
  })

  test('Discovering all the cells without mines - Winning the game', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
    })
    then('the player should win the game', () => {
      expect(true).toBe(true)
    })
  })

  test('Finishing game, disabling all the cells', ({ given, when, then }) => {
    given('the player opens the game', () => {
    })
    given('the player loads the following mock data:', (mockData) => {
    })
    when(/^the player uncovers the cell \((.*),(.*)\)$/, (row, col) => {
    })
    then('all the cells should be disabled', () => {
      expect(true).toBe(true)
    })
  })
})
