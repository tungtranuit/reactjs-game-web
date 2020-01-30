import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import postContent from 'dan-api/dummy/blog-post.md';
import Button from '@material-ui/core/Button';
import { Comments, ShowcaseCard } from 'dan-components';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Brightness5 from '@material-ui/icons/Brightness5';
import People from '@material-ui/icons/People';
import commentData from 'dan-api/apps/commentData';
import img from 'dan-api/images/photos';
import Markdown from './Markdown';
import SidebarBlog from './SidebarBlog';
import styles from './blogStyle-jss';

class Article extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={10} xs={12}>
              <article className={classes.article}>
                <div className={classes.content}>
                  <Typography variant="h4" gutterBottom>
                  Privacy Policy for VIPSoft
                  </Typography>
                  <Markdown>
                    {postContent}
                  </Markdown>
                  <Divider className={classes.dividerBordered} />
                </div>
              </article>
              <Divider className={classes.dividerBordered} />
              <section>
                <Typography className={classes.title}>
                  Write comments
                </Typography>
              </section>
              <Typography variant="h6" className={classes.title2} gutterBottom>Related Posts</Typography>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
