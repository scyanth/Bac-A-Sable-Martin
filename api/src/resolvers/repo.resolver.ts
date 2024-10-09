import { Repo } from "../entities/repo";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class createRepoInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  isFavorite: boolean;

}

@Resolver(Repo)
export default class RepoResolver {
  @Query(() => [Repo])
  async getRepos() {
    const repos = await Repo.find();
    console.log(repos);
    return repos;
  }

  @Mutation(() => Repo)
  async createRepo(@Arg("repoInput") repoInput: createRepoInput) {
    console.log(repoInput);
    //const newRepo = await Repo.create(repoInput);
    const newRepo = new Repo();

    newRepo.id = repoInput.id;
    newRepo.name = repoInput.name;
    newRepo.url = repoInput.url;
    newRepo.isFavorite = repoInput.isFavorite;

    return newRepo;
  }

}