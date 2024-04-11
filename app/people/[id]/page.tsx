'use client'

import getLayoutedElements from "@/app/flowparams/layoutGraph";
import { calculateFlowParams } from "@/app/flowparams/initialEdgesandNodes";
import { useParams } from "next/navigation";
import { useCallback, useLayoutEffect } from "react";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import { getResource } from "@/app/api/data";
import { Hero, Resourses } from "@/app/api/definitions";

export default function Page() {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { id } = useParams();

const onLayout = useCallback(
  async() => {

   const { initialNodes, initialEdges } = await calculateFlowParams(id.toString());

   getLayoutedElements(initialNodes, initialEdges).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
     setNodes(layoutedNodes);
     setEdges(layoutedEdges);
   });
 },
 [id, setEdges, setNodes]
);

 useLayoutEffect(() => {
  onLayout();
}, [onLayout]);
 
  return (
    <div className="w-screen  h-dvh p-4">
      <ReactFlow  nodes={nodes} edges={edges} fitView/> 
    </div>
  )
}
