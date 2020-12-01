import { createMuiTheme } from '@material-ui/core/styles'
import { whiteColor, grayColor, blueDarkColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueDarkColor,
            contrastText: whiteColor
        },
        secondary: {
            main: blueDarkColor,
            contrastText: whiteColor
        }
    }
})

export default theme;