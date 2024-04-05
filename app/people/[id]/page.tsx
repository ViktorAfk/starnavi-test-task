'use client'

import { useCalculateFlowParams } from "@/app/ui/initialstate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import 'reactflow/dist/style.css';

// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: '50%', y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


export default function Page() {

const { id } = useParams();
 const { nodes, edges } = useCalculateFlowParams(id.toString())
  return (
    <div className="w-screen  h-dvh p-4">
     <ReactFlow  nodes={nodes} edges={edges} fitView/>
    </div>
  )
}
