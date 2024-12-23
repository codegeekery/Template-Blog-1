// pages/api/updateClick.js
import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-08",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const updatePostClicks = async (postId) => {
  try {
    await client
      .patch(postId)
      .setIfMissing({ clicks: 0 })
      .inc({ clicks: 1 })
      .commit();
  } catch (error) {
    throw new Error("Error updating clicks");
  }
};

export const POST = async (request) => {
  if (request.method !== 'POST') return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });

  try {
    const { postId } = await request.json();

    await updatePostClicks(postId);
    return NextResponse.json({ message: 'Click count updated' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
