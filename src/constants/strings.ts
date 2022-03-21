export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = [
  'Uramashuye ikibazo!',
  "Ubitoye nk'uwadubuye !",
  'Neza Cane!',
  'Uri incambwenge kabisa!',
]
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Indome ntizikwiye'
export const WORD_NOT_FOUND_MESSAGE = 'Iryo jambo ntiribaho mu Kirundi'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ijambo ryo gutora ryari ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Utegerezwa gukoresha ${guess} mu kibanza ${position}`

export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Ijambo ritegerezwa kuva ririmwo urudome ${letter}`
export const ENTER_TEXT = 'Emera'
export const DELETE_TEXT = 'Futa'
export const STATISTICS_TITLE = 'Ingene umukino wawe uhagaze'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Ijambo rishasha riza muri'
export const SHARE_TEXT = 'Sangiza abandi'
export const TOTAL_TRIES_TEXT = 'Incuro wagerageje'
export const SUCCESS_RATE_TEXT = 'Incuro wabitoye'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
