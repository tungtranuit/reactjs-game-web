import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import imgApi from 'dan-api/images/photos';
import avatarApi from 'dan-api/images/avatars';
import PapperBlock from '../PapperBlock/PapperBlock';
import NewsCard from '../CardPaper/NewsCard';
import ProfileCard from '../CardPaper/ProfileCard';
import styles from './jss/socialMedia-jss';

const slideData = [
  {
    label: 'How to be happy :)',
    imgPath: '/images/DSC_0632.jpg',
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: '/images/shr_c.jpg',
  },
  {
    label: '2. Team party - Inotech Company',
    imgPath: '/images/albums/11831800_784356815017372_5618815209206001172_n.jpg',
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: '/images/albums/15259749_1095644910555226_5546564139493219164_o.jpg',
  },
  {
    label: '4. Teamwork',
    imgPath: 'images/albums/15271986_1095645660555151_7852533402076731840_o.jpg'
  },
];

class SideSection extends React.Component {
  state = {
    activeStepSwipe: 0,
  };

  handleNextSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe + 1,
    }));
  };

  handleBackSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe - 1,
    }));
  };

  handleStepChangeSwipe = activeStepSwipe => {
    this.setState({ activeStepSwipe });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStepSwipe } = this.state;

    const maxStepsSwipe = slideData.length;
    return (
      <div>
        {/* Trending */}
        <PapperBlock title="MY SKILL" icon="ios-flame-outline" whiteBg desc="">
          <h4>Technical</h4>
          <List dense className={classes.trendingList}>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#JAVA #Android</a>
              <ListItemText secondary="Over 8 years" />
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.blueProgress)} value={95} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#Swift #Object-C #IOS</a>
              <ListItemText secondary="Over 3 years" />
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.orangeProgress)} value={65} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#ReactNative #ReactJS #React</a>
              <ListItemText secondary="Over 3 years" />
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.blueProgress)} value={80} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#HTML #CSS #JS #JQUERY</a>
              <ListItemText secondary="Over 8 years" />
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.blueProgress)} value={90} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#Type Script</a>
              <ListItemText secondary="2 years" />
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.blueProgress)} value={70} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#AngularJS</a>
              <ListItemText secondary="1.5 years" />
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.purpleProgress)} value={60} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#NodeJS Express #GraphQL</a>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.purpleProgress)} value={60} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#Golang</a>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.purpleProgress)} value={45} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#Database #MSSQL #MySQL</a>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.pinkProgress)} value={55} />
            </ListItem>
            <ListItem className={classes.noPadding} style={{ marginTop: 15 }}>
              <a href="#" className={classes.link}>#Unity || #NET</a>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.pinkProgress)} value={65} />
            </ListItem>
          </List>
          <br />
          <h4>Professional</h4>
          <List dense className={classes.trendingList}>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>#Effective communication</a>
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>#Team player</a>
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>#Strong problem solver</a>
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>#Good time management</a>
            </ListItem>
          </List>
        </PapperBlock>
        {/* Trending */}
        <PapperBlock title="EDUCATION" icon="ios-flame-outline" whiteBg desc="">
          <List dense className={classes.trendingList}>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>UNIVERSITY OF INFORMATION TECHNOLOGY</a>
              <ListItemText secondary="Faculty of Computer Science" />
            </ListItem>
          </List>
        </PapperBlock>
        {/* Trending */}
        <PapperBlock title="AWARDS" icon="ios-flame-outline" whiteBg desc="">
          <List dense className={classes.trendingList}>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>EMPLOYEE OF THE YEAR AT CMN ONLINE.</a>
              <ListItemText secondary="2016" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>TOP WINNER HACKATHON #POLICYAL #BLOCKCHAIN.</a>
              <ListItemText secondary="2018" />
            </ListItem>
          </List>
        </PapperBlock>
        {/* Trending */}
        <PapperBlock title="LANGUAGES" icon="ios-flame-outline" whiteBg desc="">
          <List dense className={classes.trendingList}>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>English.</a>
              <ListItemText secondary="Toeic 550" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>Chinese.</a>
              <ListItemText secondary="HSK 2" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>Vietnamese.</a>
              <ListItemText secondary="Native" />
            </ListItem>
          </List>
        </PapperBlock>
        {/* Trending */}
        <Divider className={classes.divider} />
        {/* ----------------------------------------------------------------------*/}
        {/* News Or Ads Section */}
        <Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStepSwipe}
            onChangeIndex={this.handleStepChangeSwipe}
            enableMouseEvents
            className={classes.sliderWrap}
          >
            {slideData.map((slide, index) => (
              <div className={classes.figure} key={index.toString()}>
                <NewsCard
                  image={slide.imgPath}
                  title="slide.label"
                  className={classes.sliderContent}
                >
                  <Typography gutterBottom className={classes.title} variant="h5" component="h2">
                    {slide.label}
                  </Typography>
                </NewsCard>
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            steps={maxStepsSwipe}
            position="static"
            activeStep={activeStepSwipe}
            className={classes.mobileStepper}
            nextButton={(
              <Button size="small" onClick={this.handleNextSwipe} disabled={activeStepSwipe === maxStepsSwipe - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )}
            backButton={(
              <Button size="small" onClick={this.handleBackSwipe} disabled={activeStepSwipe === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            )}
          />
        </Paper>
        {/* ----------------------------------------------------------------------*/}
      </div>
    );
  }
}

SideSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideSection);
