import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import {getTweets} from '@/lib/supabase/queries'
import ComposeTweet from './server-components/compose-tweet'
import Tweet from './client-components/tweet'

const MainComponent = async () => {
  const supabaseClient = createServerComponentClient({
    cookies,
  });

  const {data: userData, error: userError} =
    await supabaseClient.auth.getUser();
  
  const res = await getTweets({ currentUserID: userData.user?.id });
  //console.log(res)
  return (
    <main className='sticky top-0 flex h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
      <h1 className='text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0'>Home</h1>
      <div className='border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch py-6 space-x-2 border-gray-600 relative'>
        <div className='w-11 h-11 bg-slate-400 rounded-full flex-none'></div>
        <ComposeTweet/>
      </div>
      <div className='w-full'>
        {/*res &&
          res.map(({ likes, tweet, profile, hasLiked, replies }) => {
            return (
              <Tweet
                key={tweet.id}
                tweet={{
                  tweetDetails: {
                    ...tweet,
                  },
                  userProfile: {
                    ...profile,
                  },
                }}
                likesCount={likes.length}
                currentUserId={userData.user?.id}
                hasLiked={hasLiked}
                repliesCount={replies.length}
              />
            );
              })*/}
        {res &&
        res.data.map((tweet:any) => (
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
      </div>
    </main>
  );
};

export default MainComponent