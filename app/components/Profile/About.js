import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Check from '@material-ui/icons/Check';
import Facebook from '@material-ui/icons/Facebook';
import SportsFootball from '@material-ui/icons/SportsSoccer';
import Sports from '@material-ui/icons/SportsMma';
import MusicNoteSharp from '@material-ui/icons/MusicNoteSharp';
import LocalDrink from '@material-ui/icons/LocalDrink';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Web from '@material-ui/icons/Web';
import GitHub from '@material-ui/icons/GitHub';
import Forum from '@material-ui/icons/Forum';
import AssistantPhoto from '@material-ui/icons/AssistantPhoto';
import imgData from 'dan-api/images/imgData';
import Type from 'dan-styles/Typography.scss';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { MapWidget, DateWidget, WeatherWidget } from 'dan-components';
import Timeline from '../SocialMedia/Timeline';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './profile-jss';
import { dataSkill } from '../../api/dummy/data';
const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  main: theme.palette.primary.main,
  dark: theme.palette.primary.dark,
});

const myAbout = 'Hi, my name is Tung Tran and I\'m a senior software engineer.Welcome to VIPSoft!';
const Iframe = function Iframe(props) {
  return (
    <div>
      <iframe
        title="mussic"
        src={props.src}
        height={props.height}
        width={props.width}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};


class About extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={3}
      >
        <Grid item md={7} xs={12}>
          <div>
            {/*
            <Timeline dataTimeline={data} />
             */}
            <PapperBlock title="What I Do?" icon="ios-locate-outline" whiteBg desc="I have more than 9 years' experience building software for clients and companies. Power user software essentials for Windows, macOS and Android , IOS. VIPSoft is updated every day with dozens of apps, from  game, productivity to security .." />
            {/* My Interests */}
            <PapperBlock title="My Social" icon="ios-aperture-outline" whiteBg desc="">
              <Grid container className={classes.colList}>
                <Grid item md={6}>
                  <a className={classes.linkEmail} href="https://www.linkedin.com/in/tungtranuit/">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classNames(classes.avatar, classes.blueLinkedAvatar)}>
                          <LinkedIn />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="LinkedIn" secondary="My LinkedIn" />
                    </ListItem>
                  </a>
                </Grid>
                <Grid item md={6}>
                  <a className={classes.linkEmail} href="https://medium.com/codespace69">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classNames(classes.avatar, classes.blueLinkedAvatar)}>
                          <Web />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Medium" secondary="My Medium" />
                    </ListItem>
                  </a>
                </Grid>
                <Grid item md={6}>
                  <a className={classes.linkEmail} href="https://github.com/tungtranuit/">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classNames(classes.avatar, classes.blackAvatar)}>
                          <GitHub />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="GitHub" secondary="My GitHub" />
                    </ListItem>
                  </a>
                </Grid>
                <Grid item md={6}>
                  <a className={classes.linkEmail} href="https://stackoverflow.com/users/5469908/tung-tran">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classNames(classes.avatar, classes.redAvatar)}>
                          <Forum />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Stackoverflow" secondary="My Stackoverflow" />
                    </ListItem>
                  </a>
                </Grid>
                <Grid item md={6}>
                  <a className={classes.linkEmail} href="https://www.facebook.com/tungtran.uit">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classNames(classes.avatar, classes.blueAvatar)}>
                          <Facebook />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Facebook" secondary="My Facebook" />
                    </ListItem>
                  </a>
                </Grid>
              </Grid>
            </PapperBlock>
            {/* ---------------------------------------------------------------------- */}
            {/* My Interests */}
            <PapperBlock title="My Interests" icon="ios-heart-outline" whiteBg desc="">
              <Grid container className={classes.colList}>
                <Grid item md={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                        <SportsFootball />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Foolball" secondary="" />
                  </ListItem>
                </Grid>
                <Grid item md={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>
                        <LocalDrink />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Coffee" secondary="" />
                  </ListItem>
                </Grid>
                <Grid item md={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                        <MusicNoteSharp />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Music" secondary="" />
                  </ListItem>
                </Grid>
                <Grid item md={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                        <Sports />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Gym" secondary="" />
                  </ListItem>
                </Grid>
              </Grid>
            </PapperBlock>
            <PapperBlock title="Our Applications" icon="ios-analytics-outline" whiteBg desc="">
              <RadarChart cx={250} cy={250} outerRadius={200} width={650} height={500} data={dataSkill}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Tung Tran" dataKey="A" stroke={color.dark} fill={color.main} fillOpacity={0.8} />
              </RadarChart>
            </PapperBlock>
            {/* ----------------------------------------------------------------------*/}
            <PapperBlock title="Map" whiteBg icon="ios-navigate-outline" desc="My Address">
              <div>
                <div>
                  <MapWidget />
                </div>
              </div>
            </PapperBlock>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          {/* ----------------------------------------------------------------------*/}
          {/* About Me */}
          <PapperBlock title="About Me" icon="ios-contact-outline" whiteBg noMargin desc={myAbout}>
            <Divider className={classes.divider} />
            <List dense className={classes.profileList}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DateRange />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Born" secondary="Dec 12, 1991" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalPhone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone" secondary="(+84) 989444847 - (+84) 935910933" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOn />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Address" secondary="211/19B Gò Xoài- P.BHH A- Q.BinhTan- HCM City-VietNam" />
              </ListItem>
            </List>
          </PapperBlock>
          <Divider className={classes.divider} />
          {/* Profile Progress */}
          <div className={classes.progressRoot}>
            <Paper className={classes.styledPaper} elevation={4}>
              <Typography className={classes.title} variant="h5" component="h3">
                <span className={Type.light}>Software Developer Level: </span>
                <span className={Type.bold}>Senior</span>
              </Typography>
              <Grid container justify="center">
                <Chip
                  avatar={(
                    <Avatar>
                      <Check />
                    </Avatar>
                  )}
                  label="80% Progress"
                  className={classes.chip}
                  color="primary"
                />
              </Grid>
              <LinearProgress variant="determinate" className={classes.progress} value={80} />
            </Paper>
          </div>
          {/* ----------------------------------------------------------------------*/}
          {/* My Albums */}
          <PapperBlock title="Games" icon="ios-images-outline" whiteBg desc="">
            <div className={classes.albumRoot}>
              <GridList cellHeight={180} className={classes.gridList}>
                {
                  imgData.map((tile, index) => {
                    if (index >= 4) {
                      return false;
                    }
                    return (
                      <GridListTile key={index.toString()}>
                        <img src={tile.img} className={classes.img} alt={tile.title} />
                        <GridListTileBar
                          title={tile.title}
                          subtitle={(
                            <span>
                              by:&nbsp;
                              {tile.author}
                            </span>
                          )}
                          actionIcon={(
                            <IconButton className={classes.icon}>
                              <InfoIcon />
                            </IconButton>
                          )}
                        />
                      </GridListTile>
                    );
                  })
                }
              </GridList>
            </div>
            <Divider className={classes.divider} />
          </PapperBlock>
          {/* ----------------------------------------------------------------------*/}
          {/* My Albums */}
          <PapperBlock title="Current Time" icon="ios-clock-outline" whiteBg desc="">
            <div className={classes.albumRoot}>
              <DateWidget />
            </div>
          </PapperBlock>

          <PapperBlock title="Videos" icon="ios-musical-notes-outline" whiteBg desc="">
            <div className={classes.albumRoot}>
              <Iframe src="https://www.youtube.com/embed/bHeVLS6SjPc?autoplay=0" height="300" width="500" />
            </div>
          </PapperBlock>
          {/* ----------------------------------------------------------------------*/}


          {/* My Connection Me
          <PapperBlock title="My Connection" icon="ios-contacts-outline" whiteBg desc="">
            <List dense className={classes.profileList}>
              <ListItem button>
                <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>H</Avatar>
                <ListItemText primary="Harry Wells" secondary="2 Mutual Connection" />
              </ListItem>
              <ListItem button>
                <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>J</Avatar>
                <ListItemText primary="John DOe" secondary="8 Mutual Connection" />
              </ListItem>
              <ListItem button>
                <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>V</Avatar>
                <ListItemText primary="Victor Wanggai" secondary="12 Mutual Connection" />
              </ListItem>
              <ListItem button>
                <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>H</Avatar>
                <ListItemText primary="Baron Phoenix" secondary="10 Mutual Connection" />
              </ListItem>
            </List>
            <Divider className={classes.divider} />
            <Grid container justify="center">
              <Button color="secondary" className={classes.button}>
                See All
              </Button>
            </Grid>
          </PapperBlock>
          */}
          {/* ----------------------------------------------------------------------*/}
        </Grid>
      </Grid>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
