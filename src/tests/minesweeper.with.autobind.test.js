/* eslint-disable no-undef */
import { loadFeatures, autoBindSteps } from 'jest-cucumber'

const features = loadFeatures('./src/features/**/*.feature')

const stepsRef = ({ given, and, when, then }) => {
  and('the player opens the game', () => {
  })
  then('all the cells should be covered', () => {
    expect(true).toBe(true)
  })
  then('all the cells should be enabled', () => {
    expect(true).toBe(true)
  })
  given('lorem ipsum', () => {
  })
  when(/^the player left clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
  })
  then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
    expect(true).toBe(true)
  })
  when(/^the player uncovers the cell (\d+),(\d+)$/, (row, col) => {
  })
  then('the player should lose the game', () => {
    expect(true).toBe(true)
  })
  given(/^the player loads the following mock data: (.*)$/, (mockData) => {
  })
  then(/^the cell \((\d+),(\d+)\) should show the following value: (.*)$/, (row, col, number) => {
    expect(true).toBe(true)
  })
  then(/^the cell \((.*),(.*)\) should be displayed empty$/, (row, col) => {
    expect(true).toBe(true)
  })
  then(/^the cell \((\d+),(\d+)\) should show: (.*)$/, (row, col, element) => {
    expect(true).toBe(true)
  })
  then('the minefield should look like this:', () => {
    expect(true).toBe(true)
  })
  and(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
  })
  then(/^the cell \((\d+),(\d+)\) should show a "(.*)" symbol$/, (row, col, tag) => {
    expect(true).toBe(true)
  })
  given(/^When the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
  })
  when(/^the player untags the cell \((\d+),(\d+)\)$/, (row, col) => {
  })
  then(/^the cell \((\d+),(\d+)\) should not show a "(.*)" symbol$/, (row, col) => {
    expect(true).toBe(true)
  })
  when(/^the player right clicks on the cell \((\d+),(\d+)\)$/, (row, col) => {
  })
  then(/^the cell \((\d+),(\d+)\) should show a "mined" symbol$/, (row, col) => {
    expect(true).toBe(true)
  })
  then('the player should win the game', () => {
    expect(true).toBe(true)
  })
  when(/^the player uncovers the cell \((.*),(.*)\)$/, (row, col) => {
  })
  then('all the cells should be disabled', () => {
    expect(true).toBe(true)
  })
  then(/^the cell \((\d+),(\d+)\) should be disabled$/, (arg0, arg1) => {
    expect(true).toBe(true)
  })
  when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

  })
  then(/^the cell \((\d+),(\d+)\) should be disabled$/, (arg0, arg1) => {

  })
  when(/^the player uncovers the cell (\d+),(\d+)$/, (arg0, arg1) => {

  })

  then(/^the cell (\d+),(\d+) should be disabled$/, (arg0, arg1) => {

  })
  when(/^the player uncovers the cell "(.*)"$/, (arg0) => {

  })

  then(/^the cell "(.*)" should be disabled$/, (arg0) => {

  })
}

autoBindSteps(features, [stepsRef])
