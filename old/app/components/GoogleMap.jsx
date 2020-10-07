var React = require('react');

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class GoogleMap extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <div style={{ height: '40vh', width: '80%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDjOpxryewnVCCtjvVw_c0Q3F1d08MLKYg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }

}

GoogleMap.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11,
  markersData: [
    { latLng: { lat : 18.5245649, lng : 73.7228812 }, title: 'Pune' },
    { latLng: { lat : 18.5741428, lng : 73.962115 }, title: 'Wagholi' },
    { latLng: { lat : 18.6584961, lng : 73.9236265 }, title: 'Dhanore' },
    { latLng: { lat : 18.5672537, lng : 73.9086253 }, title: 'Viman nagar' }
  ],
  width : 700,
  height: 300
}
