document.addEventListener('DOMContentLoaded', function(){
var graphStr = '<?xml version="1.0" encoding="UTF-8"?><graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd">'
                                                + '<graph id="G" edgedefault="undirected">'
                                                +    '<node id="n0"/>'
                                                +    '<node id="n1"/>'
                                                +    '<node id="n2"/>'
                                                +    '<node id="n3"/>'
                                                +    '<node id="n4"/>'
                                                +    '<node id="n5">'
                                                +        '<graph id="n5:" edgedefault="undirected">'
                                                +          '<node id="n5::n0"/>'
                                                +          '<node id="n5::n1"/>'
                                                +          '<node id="n5::n2"/>'
                                                +          '<edge id="e0" source="n5::n0" target="n5::n2"/>'
                                                +          '<edge id="e1" source="n5::n1" target="n5::n2"/>'
                                                +        '</graph>'
                                                +    '</node>'
                                                +    '<node id="n6">'
                                                +        '<graph id="n6:" edgedefault="undirected">'
                                                +          '<node id="n6::n0">'
                                                +              '<graph id="n6::n0:" edgedefault="undirected">'
                                                +                '<node id="n6::n0::n0"/>'
                                                +               '</graph>'
                                                +          '</node>'
                                                +          '<node id="n6::n1"/>'
                                                +          '<node id="n6::n2"/>'
                                                +          '<edge id="e10" source="n6::n1" target="n6::n0::n0"/>'
                                                +          '<edge id="e11" source="n6::n1" target="n6::n2"/>'
                                                +        '</graph>'
                                                +    '</node>'
                                                +    '<edge id="e2" source="n5::n2" target="n0"/>'
                                                +    '<edge id="e3" source="n0" target="n2"/>'
                                                +    '<edge id="e4" source="n0" target="n1"/>'
                                                +    '<edge id="e5" source="n1" target="n3"/>'
                                                +    '<edge id="e6" source="n3" target="n2"/>'
                                                +    '<edge id="e7" source="n2" target="n4"/>'
                                                +    '<edge id="e8" source="n3" target="n6::n1"/>'
                                                +    '<edge id="e9" source="n6::n1" target="n4"/>'
                                                +  '</graph>'
                                    + '</graphml>';


var cy = cytoscape({
  // very commonly used options
  container: document.getElementById('cy'),
  elements: [ /* ... */ ],
  style: [
    {
        selector: 'node',
        style: {
            'content': 'data(id)'
        }
    },

    {
        selector: 'edge',
        style: {
            'target-arrow-shape': 'triangle'
        }
    },

    {
        selector: ':selected',
        style: {

        }
    }
],         
  layout: { name: 'grid' /* , ... */ },
  data: { /* ... */ },

  // initial viewport state:
  zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  boxSelectionEnabled: true,
  selectionType: 'single',
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,
  multiClickDebounceTime: 250,

  // rendering options:
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: 'auto',
  ready: function () {
    this.graphml({layoutBy: 'cose'});
    this.graphml(graphStr);
    console.log(this.graphml());
}
});


});