import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { SupabaseClient } from "@supabase/supabase-js";

import { revalidatePath } from "next/cache";
import ComposeTweetForm from "../client-components/compose-tweet-form";
import { db } from "@/lib/db";
import { tweets } from "@/lib/db/schema";

const ComposeTweet = () => {
  async function submitTweet(formData: FormData) {
    "use server";

    const tweet = formData.get("tweet");

    if (!tweet) return;

    const supabaseClient = createServerComponentClient({cookies});

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey)
      return { error: { message: "supabase credentials are not provided!" } };

    const supabaseServer = new SupabaseClient(
      supabaseUrl, 
      supabaseSecretKey,
      { 
        auth: { persistSession: false },
      }
      );

    const { data: userData, error: userError } =
      await supabaseClient.auth.getUser();

    if (userError) return;

    console.log(tweet.toString());
    const {data, error} = await supabaseServer
      .from("tweets")
      .insert({
        text: tweet.toString(),
        id: randomUUID(),
        profile_id: userData.user.id,
      });

    revalidatePath("/");

    return { data: data, error: error };
  }

  return <ComposeTweetForm serverAction={submitTweet} />;
};

export default ComposeTweet;