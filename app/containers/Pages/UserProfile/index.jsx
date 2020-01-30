import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import dummy from 'dan-api/dummy/dummyContents';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InsertDriveFile from '@material-ui/icons/InsertDriveFileRounded';
import FolderOpenRounded from '@material-ui/icons/FolderOpenRounded';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from 'dan-api/apps/timelineData';
import { fetchAction } from 'dan-actions/SocmedActions';
import {
  Cover,
  About,
  Connection,
  Favorites,
  Albums
} from 'dan-components';
import bgCover from 'dan-images/petal_bg.svg';
import styles from 'dan-components/SocialMedia/jss/cover-jss';
import {
  Timeline
} from '../../pageListAsync';
/**
import {
  CHANGE_LOCALE
} from '../../LanguageProvider/constants';
import {
  changeLocale
} from '../../LanguageProvider/actions';
 */
function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class UserProfile extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(data);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // const title = brand.name + ' - Profile';
    // console.log(this.props.messages('boilerplate.components.Header.features'));
    const { intl } = this.context;
    const title = intl.formatMessage({ id: 'tonyweb.containers.Pages.WebSite.title' });
    const myQuote = intl.formatMessage({ id: 'tonyweb.containers.Pages.UserProfile.quote' });
    const description = brand.desc;
    const { dataProps, classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${title}`} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          avatar={dummy.user.avatar}
          name={dummy.user.name}
          title={dummy.user.title}
          desc={myQuote}
        />
        <AppBar position="static" className={classes.profileTab}>
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<AccountCircle />} />
              <Tab icon={<InsertDriveFile />} />
              <Tab icon={<FolderOpenRounded />} />
              <Tab icon={<PhotoLibrary />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<FolderOpenRounded />} label="APPS" />
              <Tab icon={<InsertDriveFile />} label="NEWS" />
              <Tab icon={<AccountCircle />} label="ABOUT" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 2 && <TabContainer><About data={dataProps} /></TabContainer>}
        {value === 1 && <TabContainer><Timeline /></TabContainer>}
        {value === 0 && <TabContainer><Favorites /></TabContainer>}
      </div>
    );
  }
}
UserProfile.contextTypes = {
  intl: PropTypes.object.isRequired
};
UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  dataProps: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired
  // language: PropTypes.func.isRequired,
};

const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, 'dataTimeline']),
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch)
  // language: bindActionCreators(changeLocale, dispatch),
});

const UserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(UserProfile);

export default withStyles(styles)(UserProfileMapped);
