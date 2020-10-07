var React = require('react');

import * as d3 from "d3";

export default class Network extends React.Component{

  d3props = {
    vis: null,
    nodeArea: null,
    messageText: null,
    layoutText: null,
    linkCostText: null,
    force: null,
    zoom: null,
    node:null,
    link:null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // visualisations setup
    this.visSetup();
    //this.update(this.props);
  }


  }

  render() {
    return (
      <div>
        <div id="mapWrap" ></div>
        </div>
    );
  }

}

Network.defaultProps = {
  width : 500,
  height: 400,
  networkdata: {
    "nodes": [
      {
        "id": 1, "name": "A" , latLng: { lat : 18.5245649, lng : 73.7228812 }, title: 'Pune' },
      { "id": 2, "name": "B" , latLng: { lat : 18.5741428, lng : 73.962115 }, title: 'Wagholi' },
      { "id": 3, "name": "C" , latLng: { lat : 18.6584961, lng : 73.9236265 }, title: 'Dhanore' },
      { "id": 4, "name": "D" , latLng: { lat : 18.5672537, lng : 73.9086253 }, title: 'Viman nagar' },
      { "id": 5, "name": "E" , latLng: { lat : 18.4439642, lng : 73.7918724 }, title: 'Dhayari' },
      { "id": 6, "name": "F" , latLng: { lat : 18.4087148, lng : 73.4863376 }, title: 'Lavasa' },
      { "id": 7, "name": "G" , latLng: { lat : 18.7621142, lng : 73.8570119 }, title: 'Chakan' },
      { "id": 8, "name": "H" , latLng: { lat : 18.5710016, lng : 74.0148067 }, title: 'Kesnand' },
      { "id": 9, "name": "I" , latLng: { lat : 18.4572264, lng : 74.564606 }, title: 'Daund' },
      { "id": 10, "name": "J" , latLng: { lat : 18.8268129, lng : 74.3692875 }, title: 'Shirur' },
    ],
    "links": [
      { "source": 1, "target": 2 },
      { "source": 1, "target": 5 },
      { "source": 1, "target": 6 },
      { "source": 2, "target": 3 },
      { "source": 2, "target": 7 } ,
      { "source": 3, "target": 4 },
      { "source": 8, "target": 3 } ,
      { "source": 4, "target": 5 },
      { "source": 4, "target": 9 },
      { "source": 5, "target": 10 }
    ]
  }
}
