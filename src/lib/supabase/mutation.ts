"use server";

import { randomUUID } from "crypto";
import { supabaseServer } from "./index";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { likes, profiles, replies, tweets } from "../db/schema";
import { eq } from "drizzle-orm";

export const likeTweet = async ({
  tweetId,
  userId,
}: {
  tweetId: string;
  userId: string;
}) => {
  try {
    const {data, error} = await supabaseServer
    .from("likes")
    .insert({
      id: randomUUID(),
      user_id: userId,
      tweet_id: tweetId
    });
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/");
};

export const unlikeTweet = async ({
  tweetId,
  userId,
}: {
  tweetId: string;
  userId: string;
}) => {
  const { data, error } = await supabaseServer
    .from("likes")
    .delete()
    .eq("tweet_id", tweetId)
    .eq("user_id", userId);

  revalidatePath("/");
  //console.log({ data, error });
};

export const reply = async ({
  tweetId,
  userId,
  replyText,
}: {
  tweetId: string;
  userId: string;
  replyText: string;
}) => {
  // you can verify/check the replyText is truthy

  if (replyText === "") return;

  const { data, error } = await supabaseServer
    .from("tweets")
    .insert({
      id:randomUUID(),
      text: replyText,
      profile_id: userId,
      is_reply: true,
      reply_id: tweetId,
    });
  // const { data, error } = await supabaseServer
  // .from("replies")
  // .insert({
  //   id:randomUUID(),
  //   text: replyText,
  //   user_id: userId,
  //   tweet_id: tweetId,
  // });
    console.log(error)


  revalidatePath(`/tweet/[id]`);
};

export const saveNewAvatar = async ({
  publicUrl,
  profileId,
}: {
  publicUrl: string;
  profileId: string;
}) => {
  // check if the user setting the avatar is the actual owner

  // await db
  //   .update(profiles)
  //   .set({
  //     avatarUrl: publicUrl,
  //   })
  //   .where(eq(profiles.id, profileId));
};