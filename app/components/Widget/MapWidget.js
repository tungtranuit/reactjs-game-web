import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocationOn from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import styles from './widget-jss';

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    {...props}
    defaultZoom={8}
    defaultCenter={{ lat: 10.782619, lng: 106.5988988 }}
  >
    <Marker
      position={{ lat: 10.782619, lng: 106.5988988 }}
    />
  </GoogleMap>
));

class MapWidget extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.mapWrap}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsBKKQ9Z1G6BZ6l2WnhtThEj1hwkN3HVM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '220px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <div className={classes.address}>
          <Card className={classes.card}>
            <CardContent>
              <ListItem>
                <Avatar className={classes.avatar}>
                  <LocationOn />
                </Avatar>
                <ListItemText primary="My Address" secondary="211/19B Go Xoai - P.BHH A- Q.Binh Tan - HCM City" />
              </ListItem>
            </CardContent>
          </Card>
        </div>
      </Paper>
    );
  }
}

MapWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapWidget);
