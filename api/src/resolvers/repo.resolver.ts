import { Repo } from "../entities/repo";
import { Status } from "../entities/status";
import { Lang } from "../entities/lang";
import { In } from "typeorm";
import { Arg, Field, InputType, Mutation, Query, Resolver, ID } from "type-graphql";

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

  @Field()
  status: number;

  @Field(() => [ID])
  languages: number[];

}

@Resolver(Repo)
export default class RepoResolver {
  @Query(() => [Repo])
  async getRepos() {
    const repos = await Repo.find({relations: {status: true, languages: true}});
    console.log(repos);
    return repos;
  }

  @Query(() => Repo)
  async getRepoById(@Arg("id") id: string) {
    const repo = await Repo.findOneOrFail({where: {id : id}, relations: {status: true, languages: true}});
    console.log(repo);
    return repo;
  }

  @Mutation(() => Repo)
  async createRepo(@Arg("repoInput") repoInput: createRepoInput) {
    console.log(repoInput);

    const newRepo = new Repo();

    newRepo.id = repoInput.id;
    newRepo.name = repoInput.name;
    newRepo.url = repoInput.url;
    newRepo.isFavorite = repoInput.isFavorite;

    try {
      newRepo.status = await Status.findOneOrFail({where: {id : repoInput.status}});
      newRepo.languages = await Lang.find({where: {id: In (repoInput.languages.map((l: number) => l))}});
      newRepo.save();

    } catch (error) {
      console.error(error);
    }
    
    return newRepo;
  }

}