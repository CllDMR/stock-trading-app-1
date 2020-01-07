import { ExampleActions, ExampleState } from "./Example";
import { PostActions, PostState } from "./Post";
import { TokenActions, TokenState } from "./Token";

import * as ExampleConstants from "@constants/Example";
import * as PostConstants from "@constants/Post";
import * as TokenConstants from "@constants/Token";

export type RootActionTypes =
  | ReturnType<PostActions>
  | ReturnType<ExampleActions>
  | ReturnType<TokenActions>;

export type RootActions = PostActions | ExampleActions | TokenActions;

export type RootState = {
  example: ExampleState;
  post: PostState;
  token: TokenState;
};

export const RootConstants = {
  ExampleConstants: { ...ExampleConstants },
  PostConstants: { ...PostConstants },
  TokenConstants: { ...TokenConstants }
};
