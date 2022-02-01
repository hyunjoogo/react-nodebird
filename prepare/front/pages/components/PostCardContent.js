import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";

function PostCardContent({postData}) {
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((word, index) => {
        if (word.match(/(#[^\s#]+)/)) {
          return <Link href={`/hashtag/${word.slice(1)}`} key={index}><a>{word}</a></Link>
        }
        return word;
      })}
    </div>
  )
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired
}

export default PostCardContent;
