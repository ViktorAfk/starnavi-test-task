'use client'

import getLayoutedElements from "@/app/flow-params/layoutGraph";
import { calculateFlowParams } from "@/app/flow-params/initial-elements";
import { useParams } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import PageError from "./error";

export default function Page() {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();

const onLayout = useCallback(
  async() => {
    try {
      const { initialNodes, initialEdges } = await calculateFlowParams(id.toString());
      getLayoutedElements(initialNodes, initialEdges).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
   });
    } catch (error) {
      console.error('Get data error:', error);
      setHasError(true);
      throw new Error(`Failed to get calculated flow params.`);
    }
   
 },
 [id, setEdges, setNodes]
);

 useLayoutEffect(() => {
  onLayout();
}, [onLayout]);

  return (
    <div className="w-screen  h-dvh p-4">
      {hasError && <PageError />}
      <ReactFlow  nodes={nodes} edges={edges} fitView/> 
    </div>
  )
}
