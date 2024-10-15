import { Lang } from "../entities/lang";
import { Query, Resolver } from "type-graphql";

@Resolver(Lang)
export default class LangResolver {
  @Query(() => [Lang])
  async getLangs() {
    const langs = await Lang.find();
    console.log(langs);
    return langs;
  }
}