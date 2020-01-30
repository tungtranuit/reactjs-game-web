/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgApi from 'dan-api/images/photos';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import styles from './profile-jss';
import NewsCard from '../CardPaper/NewsCard';
/**
const styles = theme => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    background: 'none'
  },
});
* */

class Favorites extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        direction="row"
        spacing={2}
      >
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/fishing_frenzy.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
              Fishing Frenzy - Best Game Ever
              </Typography>
              <Typography component="p">
                <p>- Game for all ages with moments of great entertainment.</p>
                <p>- I think all of us have had great childhood experiences with games, in which the fishing game reminds us of the memories of a happy childhood.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/Tank_Defender.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
              Tank Defender - Best Funny Game
              </Typography>
              <Typography component="p">
                <p>- This is a game about the defence of their territories from emery invaders , in this beautiful game you control a super tank  as well as collect the boxes of supplies .</p>
                <p>- Download it, they are completely free and really help you relieve stress.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/space_game.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
              Space Purge - Journey into space
              </Typography>
              <Typography component="p">
                <p>- PROTECT THE EARTH FROM ASTEROIDS AND SMALL PLANETS AS LONG AS POSSIBLE!.</p>

                <p>- IN EACH LEVEL YOU HAVE OF AMMO WHICH INCREASES THE NUMBER OF HITS, GET THE EXTRA SCORE AND AMMO AT THE END OF THE LEVEL.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/girl_dress_up.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
               Girl Dress Up - Make a Beautiful Girl To Party
              </Typography>
              <Typography component="p">
                <p>- Girl Dress Up - Make a Beautiful Girl To Party.</p>

                <p>- This game is for children to entertain by decorating a doll-like girl.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/crazy_runner.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
               CrazyRunner - Funny Game Ever
              </Typography>
              <Typography component="p">
                <p>- You are a chubby boy, you will run on the road with many obstacles such as cars, wheels, and countless dangerous obstacles.</p>

                <p>-  You also get loads of gold, and sandwiches ... they help you overcome obstacles better.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/cowboy_run.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
                  Super Cowboy Run
              </Typography>
              <Typography component="p">
                <p>- Far-eastern cowboys are one of the most popular character shapes in many countries, try to play the role of cowboy characters and fight to protect the towns.</p>

                <p>- Experience shooting skills like a real cowboy fighting against goblins.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/duck_shooter.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
                  Duck Shooter
              </Typography>
              <Typography component="p">
                <p>- Fast and accurate shot. The game is really fun and relieves stress..</p>

                <p>- Have fun and improve observation for you and for the children .</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/zombie_shooter.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
                  Zombie Shooter
              </Typography>
              <Typography component="p">
                <p>- So this game keeps you entertained with Zombie shooters by using your logic and skills to kill Zombie.</p>

                <p>- It keeps you entertained and further trains your brain..</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/trafficgame.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
                  Cross The Road Safely - Traffic Game
              </Typography>
              <Typography component="p">
                <p>- Please help your character cross the road safely.</p>

                <p>- Have fun and improve observations for you and for children.</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/swift.png" />}
                    label="IOS Swift"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/englishkr.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
               멘토잉플레이어 - Mentoreng LLC.
              </Typography>
              <Typography component="p">
                <p>- Link on <a href="https://apps.apple.com/us/app/2525252525ec-25252525259e-252525252589-2525252525ea/id1435065722?ign-mpt=uo%3D2">App Store</a>.</p>
                <p>- English for korean</p>
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/react.png" />}
                    label="React Native"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/redux.png" />}
                    label="Redux"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/ssitrading.png"
              title="SSI MOBILE TRADING STOCK"
            >
              <Typography gutterBottom variant="h5" component="h2">
                SSI MOBILE TRADING STOCK(ssi.com.vn)
              </Typography>
              <Typography component="p">
              - SSI Mobile Trading is a securities trading application on mobile, bringing convenience to customers with outstanding advantages.
                <br />
              - Fast and convenient
                <br />
              - Set up watchlists easily
                <br />
              - Easily to trade, anytime, anywhere
                <br />
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android Java"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/xahive.png"
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="h5" component="h2">
                  Xahive App
              </Typography>
              <Typography component="p">
              - Send Messages and files easily and conveniently!
                <br />
              - Use your existing hardware, we take care of the setup
                <br />
              - Data Loss Prevention (DLP) features to protect data
                <br />
              - Manage and audit your employees communication
                <br />
              - Mitigate your Cybersecurity risk
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android Java"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/tanviet.png"
              title="Tan Viet"
            >
              <Typography gutterBottom variant="h5" component="h2">
                TVSI Mobile-Tan Viet Stock
              </Typography>
              <Typography component="p">
              - Place orders easily with the feature to suggest 3 best buying and selling prices
                <br />
              - Types of conditional commands, intelligent commands automatically
                <br />
              - Manage asset portfolio, account profit and loss/History
                <br />
              - Good Till Date Orders (GTD) - Orders over time / Trailing Orders (TS) - Trend orders
                <br />
              - Priority Orders (PRO) - Order to buy / sell paintings. Stop Loss / Stop Loss Orders
              </Typography>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/Fptfile.png"
              title="FPT WiFi File Transfer Pro"
            >
              <Typography gutterBottom variant="h5" component="h2">
               FPT WiFi File Transfer Pro
              </Typography>
              <Typography component="p">
              - Convert your android phone/tablet into a FTP Server!
                <br />
              - Use this free app to host your own FTP Server on your phone/tablet.
                <br />
              - Use the FTP Server to transfer files, photos, movies, songs etc...to/from your android device using a FTP client
                <br />
              - Provides access to external SD cards and USB storage devices
                <br />
              - Works while the device is in hotspot mode
                <br />
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android Java"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/metherwallet.png"
              title="Mether Wallet - Cryptocurrencies Wallet"
            >
              <Typography gutterBottom variant="h5" component="h2">
               Mether Wallet - Cryptocurrencies Wallet
              </Typography>
              <Typography component="p">
              - Free, client-side interface for generating Ethereum wallets & more.
                <br />
              - Interact with the Ethereum blockchain easily & securely.
                <br />
              - Create New Ether Wallet
                <br />
              - Access Wallet with Keystore / JSON File
                <br />
              - Cryptocurrency History Transaction.
                <br />
              - Send/Receive Ether & Tokens.
                <br />
              - Show Balance  Ether & Tokens.
                <br />
              - Scan QRCode to Payment.
                <br />
              - Contacts Address
                <br />
              - Crypto News
                <br />
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/react.png" />}
                    label="React Native"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/redux.png" />}
                    label="Redux"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/blockchain.png" />}
                    label="Blockchain"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/ios.jpg" />}
                    label="IOS"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/apptools.png"
              title="Fake Location - Fake Device ID"
            >
              <Typography gutterBottom variant="h5" component="h2">
                Tool Applications
              </Typography>
              <Typography component="p">
                - Change your location to anywhere in the Earth if you want.
                <br />
                - Change your Device ID.
                <br />
                - Internet Speed Meter-DataUsage
                <br />
                - WiFi Hotspot-Share Wifi-3G/4G
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android Java"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/web-tools.jpg"
              title="News - Personal - Crypto WebSite"
            >
              <Typography gutterBottom variant="h5" component="h2">
                News - Personal - Crypto WebSite.
              </Typography>
              <Typography component="p">
                - Blockchain News / Blog.
                <br />
                - Shopping WebSite.
                <br />
                - CV resume.
                <br />
                - Crypto Index and Trading.
                <br />
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/typescript.png" />}
                    label="Type Script"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/redux.png" />}
                    label="Redux"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/react.png" />}
                    label="React"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/angularjs.jpg" />}
                    label="Angular"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/go.png" />}
                    label="Golang"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image={imgApi[8]}
              title="Crypto App"
            >
              <Typography gutterBottom variant="h5" component="h2">
                  Crypto Market WebApp
              </Typography>
              <Typography component="p">
                 - Market Index
                <br />
                 - Charts.
                <br />
                 - Trading on base API from Binance, Bittrex , CoinBase..
                <br />
                 - History trade.
                <br />
                 - WishList
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/web.jpg" />}
                    label="Web App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/bootstrap.png" />}
                    label="Bootstrap"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/go.png" />}
                    label="Golang"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <NewsCard
              image="/images/apps/youtaxi.png"
              title="Youtaxi"
            >
              <Typography gutterBottom variant="h5" component="h2">
              Youtaxi (skyward.youtaxi)
              </Typography>
              <Typography component="p">
              - [YOUTAXI] is a personal and intimate application that creates passengers' self-consumption consciousness.
                <br />
              - With the empty car information displayed on the app, the driver's mobile phone, model, car number, and distance in kilometers are clear at a glance.
                <br />
              - With the GPS Tracker installed on the taxi,The management platform can grasp the location of all vehicles, record the driving trajectory of the called vehicle, and achieve true safety quality.
                <br />
              - No matter where you board or get off, you can easily learn all kinds of high-quality business information! 
                <br />
              </Typography>
              <br />
              <Grid
                container
                alignItems="flex-start"
                justify="center"
                direction="row"
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/android.png" />}
                    label="Android Java"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip
                    avatar={<Avatar style={{ backgroundColor: 'white' }} src="/images/icons/mobile.jpg" />}
                    label="Mobile App"
                    className={classes.chiptag}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </NewsCard>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favorites);
