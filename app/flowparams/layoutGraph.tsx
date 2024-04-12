import ELK, { ElkNode } from "elkjs/lib/elk.bundled.js";
import { Edge, Node } from "reactflow";

const elk = new ELK();
const styles = {
  width: '400px',
  background: '#101010',
  color: 'white',
}
const elkOptions = {
  'elk.algorithm': 'mrtree',
  'elk.layered.spacing.nodeNodeBetweenLayers': '125',
  'elk.spacing.nodeNode': '125',
};

export default async function getLayoutedElements (nodes: Node[], edges:Edge[]) {
  const graph: ElkNode = {
    id: 'root',
    layoutOptions: {'elk.direction': "DOWN", ...elkOptions},
    children: nodes.map((node) => ({
      ...node,
      // Adjust the target and source handle positions based on the layout
      // direction.
      targetPosition: 'top',
      sourcePosition: 'bottom',

      // Hardcode a width and height for elk to use when layouting.
      width: 400,
      height: node.id.includes('Hero') ? 550 : 400,
    })),
    edges: edges.map(edge => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  };

  const layout = await elk.layout(graph);
  if(!layout || !layout.children) {
    return {
      nodes: [],
      edges: [],
    }
  }

  return {
    nodes: layout.children.map((node) => {
      const initialNode = nodes.find((n) => n.id === node.id);
      if (!initialNode) {
        throw new Error("Node not found");
      }
      return {
        ...initialNode,
        position: {
          x: node.x,
          y: node.y
        },
        style: styles,
      } as Node;
    }),

    edges: (layout.edges ?? []).map((edge) => {
      const initialEdge = edges.find((e) => e.id === edge.id);
      if (!initialEdge) {
        throw new Error("Edge not found");
      }
      return {
        ...initialEdge,
        source: edge.sources[0],
        target: edge.targets[0]
      } as Edge;
    })
  }
};
