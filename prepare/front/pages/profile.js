import React from "react";
import AppLayout from "./components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "./components/NicknameEditForm";
import FollowList from "./components/FollowList";

const Profile = () => {
  const followerList = [{nickName : '김현주'},{nickName : '바보'},{nickName : '주'}]
  const followingList = [{nickName : '김현주'},{nickName : '바보'},{nickName : '주'}]

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />

      </AppLayout>
    </>
  )
}

export default Profile;
