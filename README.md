# Data Structures and Algorithms in JS

## No Solutions Branch

The branch you are looking at has all of the solutions removed, so you use this to practice implementing them. 👍

---

The goal here is to provide a comprehensive test suite for each topic with empty implementations, so you can practice implementing these as a refresher, learning for the first time, warming up your chops at the start of the day, or whatever.

A lot of this material is based off of and/or expanded from the following repos:

- [Exercises for Intro to Algorithms and Data Structures in JavaScript](https://github.com/kuychaco/algoClass)
- [4 Semesters of CS, Part 2](https://github.com/btholt/four-semesters-of-cs-part-two)

(If the project structure seems... elaborate... for such a simple project, it is because I went the lazy way and used `create-react-app` to bootstrap the linting, testing, and such. Obviously there is no actual React in use here--the only command you really need to use is `yarn test` to run the tests. )

---

## Usage

- Clone it!
- Run `yarn` or `npm i`

If you're looking to do some implementations of your own:

- `git checkout no-solutions`
- `yarn test` -- now get to work getting these passing!

Bear in mind that, in the `no-solutions` branch, _all_ tests are failing by default, so you're looking at dozens if not hundreds of failures. Jest does a handsome job of not re-running unchanged tests, but nonetheless, it might be helpful to just add `.only` to the `describe` block on the tests you are currently working on to minimize the noise. Godspeed!
