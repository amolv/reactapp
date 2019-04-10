var React = require('react');

import * as d3 from "d3";
import L from 'leaflet';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const style = {
  width: "80%",
  height: "400px"
};

export default class LeaftletMap extends React.Component{

  d3props = {
    vis: null,
    nodeArea: null,
    messageText: null,
    layoutText: null,
    linkCostText: null,
    force: null,
    zoom: null
  };

  constructor(props) {
    super(props);
    this.state = { }
  }

  componentDidMount() {
    // map leaftlet
    this.map = L.map("mapWrap", {
      center: [18.5974443,73.9624826],
      zoom: 10,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    this.map.on('moveend', () => {
      console.log('moveend');
      this.updateMarkersPositions();
    } );
    this.map.on('zoom', () => {
      console.log('view rest map alled ');
      this.updateMarkersPositions();
    } );
    this.layer = L.layerGroup().addTo(this.map);

    // visualisations setup
    this.visSetup();
    this.updateMarkers();
    //this.update(this.props);
  }
  updateMarkersPositions(){
    console.log ( 'updateMarkersPositions', this.d3props.nodeArea.selectAll('g.red') );
    this.d3props.nodeArea.selectAll('g.red').remove();
    this.addRedMarkers();
  }
  updateMarkers() {
    let markersData = this.props.networkdata.nodes;
    this.layer.clearLayers();
    markersData.forEach(marker => {
      L.marker(
        marker.latLng,
        { title: marker.title, alt : marker.title }
      ).addTo(this.layer);
    });

    this.addRedMarkers();

  }
  addRedMarkers(){
    let markersData = this.props.networkdata.nodes;
    markersData.forEach(marker => {
      marker.LatLng = new L.LatLng( marker.latLng.lat, marker.latLng.lng );
    });
    // const markerElements = this.d3props.nodeArea.append('g').attr('class', 'red')
    //   .selectAll('circle')
    //   .data(markersData)
    //   .enter().append('circle')
    //   .style("stroke", "black")
		// 	.style("opacity", .9)
		// 	.style("fill", "red")
		// 	.attr("r", 6);

    // markerElements.attr('transform', ( d => {
    //   return "translate("+ this.map.latLngToLayerPoint(d.LatLng).x +","+ this.map.latLngToLayerPoint(d.LatLng).y +")";
    // }))
    // map pointer links , ploylines of leaflet
    console.log( 'pointerLinks', this.props.networkdata.links );
    this.props.networkdata.links.forEach(marker => {
      let latlngs = [ marker.source.LatLng, marker.target.LatLng];
      var polyline = L.polyline(latlngs, {color: 'red'}).addTo( this.map );
      // zoom the map to the polyline
      //this.map.fitBounds(polyline.getBounds());

    });

  }
  // componentDidUpdate({ markerPosition }) {
  //   // check if position has changed
  //   if (this.props.markerPosition !== markerPosition) {
  //     this.updateMarkers(this.props.markersData);
  //   }
  // }

  visSetup() {
    this.d3props.vis = d3.select('#mapWrap')
                          .append("svg")
                          .attr("width", this.props.width ).attr("height", this.props.height );

    this.d3props.nodeArea = this.d3props.vis.append('g').attr('id', 'network-vis');

    this.d3props.force = d3.forceSimulation()
                .force('charge', d3.forceManyBody().strength(-200))
                .force('center', d3.forceCenter( this.props.width / 2, this.props.height / 2))
    this.ticked();
  }
  ticked() {
    let nodes = this.props.networkdata.nodes;
    let links = this.props.networkdata.links;
    const nodeElements = this.d3props.nodeArea.append('g').attr('class', 'bnodes')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
        .attr('r', 8)

    const textElements = this.d3props.nodeArea.append('g').attr('class', 'texts')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr('dx', 15)
        .attr('dy', 4)

    let link_force =  d3.forceLink(links).id(function(d) { return d.id; });
    console.log( 'link_force', nodes, link_force );

    this.d3props.force.nodes( nodes );
    this.d3props.force.force( 'links', link_force );
    var linkElements = this.d3props.nodeArea.append('g').attr('class', 'links')
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
          .style("stroke", "#000").style("stroke-width", 2)


    this.d3props.force.on('tick', () => {
      nodeElements
        .attr('cx', node => node.x)
        .attr('cy', node => node.y)
      linkElements
        .attr("x1", d => d.source.x )
        .attr("y1", d => d.source.y )
        .attr("x2", d => d.target.x )
        .attr("y2", d => d.target.y )
      textElements
        .attr('x', node => node.x)
        .attr('y', node => node.y)
    })

  }

  render() {
    return (
      <div>
        <div id="mapWrap" style={style} ></div>
        </div>
    );
  }

}

LeaftletMap.defaultProps = {
  markersData: [
    { latLng: { lat : 18.5245649, lng : 73.7228812 }, title: 'Pune' },
    { latLng: { lat : 18.5741428, lng : 73.962115 }, title: 'Wagholi' },
    { latLng: { lat : 18.6584961, lng : 73.9236265 }, title: 'Dhanore' },
    { latLng: { lat : 18.5672537, lng : 73.9086253 }, title: 'Viman nagar' }
  ],
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
