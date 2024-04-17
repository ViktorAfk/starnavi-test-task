import { calculateFlowParams } from "@/app/flow-params/initialEdgesandNodes"
import { mockEdges } from "@/mocks/mockdata/mock-edges";
import { mockNodes } from "@/mocks/mockdata/mock-nodes";
import { server } from "@/mocks/server";
import { HttpResponse, http } from "msw";

describe('calculate flow params', () => {
 it('should return corect initial params, if id exists', async() => {
  const HERO_ID = '10';
  const {initialEdges, initialNodes} = await calculateFlowParams(HERO_ID);
  const nodesIds = initialNodes.map(({ id }) => id);
  const mockNodesIds = mockNodes.map(({ id }) => id);

  expect(initialEdges).toEqual(mockEdges);
  expect(nodesIds).toEqual(mockNodesIds);
 })

 it('should throw an error, when we don\'t have such hero in database', async() => {
    const UREAL_ID = '150';

    server.use(
      http.get(`${process.env.NEXT_PUBLIC_API_URL}people/:id`, () => {
        return HttpResponse.json({error: "No such person"}, {status: 404})
        })
      );

    expect(async() => {
      await calculateFlowParams('150');
    }).rejects.toThrow();
  });
})
