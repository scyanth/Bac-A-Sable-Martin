import { Repo } from "../entities/repo";
import { Query, Resolver } from "type-graphql";

@Resolver(Repo)
export default class RepoResolver {
  @Query(() => [Repo])
  async getReposFull() {
    const repos = await Repo.find();
    console.info(repos);
    return repos;
  }

}