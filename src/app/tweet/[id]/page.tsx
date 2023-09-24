import Tweet from "@/components/client-components/tweet";
import { db } from "@/lib/db";
import { likes, profiles, replies, tweets } from "@/lib/db/schema";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { and, desc, eq, exists } from "drizzle-orm";
import { getTweets } from "@/lib/supabase/queries";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { redirect } from "next/navigation";

const TweetPage = async ({ params }: { params: { id: string } }) => {
  const supabaseClient = createServerComponentClient({
    cookies,
  });

  const { data: userData, error: userError } =
    await supabaseClient.auth.getUser();

  const tweet = await getTweets({
    currentUserID: userData.user?.id,
    getSingleTweetId: params.id,
  });

  if (!tweet) {
    redirect("/");
  }

//   const repliesRes = await getTweets({
//     currentUserID: userData.user?.id,
//     orderBy: true,
//     replyId: tweet.tweet.id,
//   });

  return (
    <main className="flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      {tweet &&
        tweet.data.map((tweet:any) => (
          <Tweet
            key={tweet.id}
            tweet={
              {tweetDetails:{
                replyId: tweet.id,
                id: tweet.id,
                text: tweet.text,
                updatedAt: tweet.updated_at,
                createdAt: tweet.created_at,
                profileId: tweet.profile_id,
                isReply: tweet.is_reply,
            },
            userProfile:{
              id: tweet.id,
              updatedAt: tweet.updated_at,
              createdAt: tweet.created_at,
              username: tweet.username,
              fullName: tweet.full_name
            }
          }}
            currentUserId={userData.user?.id}
            likesCount={tweet.likes_count}
            hasLiked={tweet.user_has_liked}
            repliesCount={0}
          />
        ))}
      
      {/* {tweet ? (
        <Tweet
          hasLiked={Boolean(tweet[0].hasLiked)}
          likesCount={tweet[0].likes.length ?? 0}
          tweet={{
            tweetDetails: tweet[0].tweet,
            userProfile: tweet[0].profile,
          }}
          currentUserId={userData.user?.id}
          repliesCount={tweet[0].replies.length}
        />
      ) : (
        <div>no tweet found</div>
      )} */}
      {/* {repliesRes &&
        repliesRes.map(({ hasLiked, likes, profile, replies, tweet }) => {
          return (
            <Tweet
              key={tweet.id}
              hasLiked={hasLiked}
              likesCount={likes.length}
              tweet={{
                tweetDetails: tweet,
                userProfile: profile,
              }}
              repliesCount={replies.length}
              currentUserId={userData.user?.id}
            />
          );
        })} */}
    </main>
  );
};

export default TweetPage;