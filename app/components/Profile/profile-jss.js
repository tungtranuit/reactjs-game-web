import { fade } from '@material-ui/core/styles/colorManipulator';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import colorfull from 'dan-api/palette/colorfull';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
const styles = theme => ({
  profileList: {
    padding: 0,
    '& li': {
      paddingLeft: 0
    }
  },
  avatar: {
    margin: 10,
  },
  linkEmail: {
    textDecoration: 'none',
    color: 'black'
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  blueAvatar: {
    backgroundColor: blue[500],
  },
  blueLinkedAvatar: {
    backgroundColor: blue[700],
  },
  blackAvatar: {
    backgroundColor: blueGrey[900],
  },
  greyAvatar: {
    backgroundColor: blueGrey[300],
  },
  redAvatar: {
    backgroundColor: red[300],
  },
  smallTitle: {
    paddingTop: 20,
    paddingLeft: 10
  },
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none',
  },
  pinkText: {
    color: colorfull[0],
    '& svg': {
      fill: colorfull[0],
    }
  },
  purpleText: {
    color: colorfull[1],
    '& svg': {
      fill: colorfull[1],
    }
  },
  blueText: {
    color: colorfull[2],
    '& svg': {
      fill: colorfull[2],
    }
  },
  tealAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[3],
  },
  tealText: {
    color: colorfull[3],
    '& svg': {
      fill: colorfull[3],
    }
  },
  orangeText: {
    color: colorfull[4],
    '& svg': {
      fill: colorfull[4],
    }
  },
  indigoAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[6],
  },
  indigoText: {
    color: colorfull[6],
    '& svg': {
      fill: colorfull[6],
    }
  },
  pinkProgress: {
    color: colorfull[0],
    '& div': {
      backgroundColor: colorfull[0],
    }
  },
  greenProgress: {
    color: colorfull[5],
    '& div': {
      backgroundColor: colorfull[5],
    }
  },
  orangeProgress: {
    color: colorfull[4],
    '& div': {
      backgroundColor: colorfull[4],
    }
  },
  purpleProgress: {
    color: colorfull[1],
    '& div': {
      backgroundColor: colorfull[1],
    }
  },
  blueProgress: {
    color: colorfull[2],
    '& div': {
      backgroundColor: colorfull[2],
    }
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      width: '100%'
    }
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3),
  }),
  progressRoot: {
    marginBottom: theme.spacing(3),
  },
  styledPaper: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    '& $title, & $subtitle': {
      color: theme.palette.common.white
    }
  },
  progress: {
    marginTop: 20,
    background: theme.palette.secondary.dark,
    '& div': {
      background: theme.palette.primary.light,
    }
  },

  progressWidget: {
    marginTop: 20,
    background: theme.palette.secondary.dark,
    '& div': {
      background: theme.palette.primary.light,
    }
  },
  chipProgress: {
    marginTop: 20,
    background: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    '& div': {
      background: colorfull[4],
      color: theme.palette.common.white
    }
  },
  secondaryWrap: {
    padding: `1px ${theme.spacing(2)}px`,
    borderRadius: 4,
    justifyContent: 'space-around',
    '& > $centerItem': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& li': {
      marginBottom: 30
    },
    '& $chip': {
      top: 50,
      position: 'absolute',
      fontSize: 11,
      fontWeight: 400,
    }
  },
  chip: {
    marginTop: 20,
    background: theme.palette.common.white,
    color: theme.palette.secondary.main,
    '& div': {
      background: green[500],
      color: theme.palette.common.white
    }
  },
  chiptag: {
    margin: theme.spacing(1),
    backgroundColor: '#3d00e0',
    color: 'white'
  },
  avatarM: {
    backgroundColor: 'white'
  },
  colList: {
    '& li': {
      padding: '10px 0'
    },
    '& $avatar': {
      margin: 0
    }
  },
  title: {},
  subtitle: {},
  rootAlbum: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  image: {
    position: 'relative',
    height: 'auto',
    boxShadow: theme.shadows[6],
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    marginBottom: 30,
    width: '100% !important', // Overrides inline-style
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.6,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  focusVisible: {},
  gridListAlbum: {
    height: 'auto',
    background: theme.palette.common.black
  },
  subheader: {
    width: '100%',
  },
  subscribeForm: {
    marginTop: theme.spacing(1) * -6,
    display: 'flex',
    '& > div': {
      flex: 1
    },
    '& button': {
      marginTop: theme.spacing(4.5),
      marginLeft: theme.spacing(1)
    }
  },
  whiteInputRoot: {
    '& label, input': {
      color: `${theme.palette.common.white} !important`,
    },
    '& > div': {
      borderColor: fade(theme.palette.common.white, 0.6),
    }
  },
  listText: {
    whiteSpace: 'normal'
  },
});

export default styles;
