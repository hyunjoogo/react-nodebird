import React, {useCallback} from "react";
import {Button, Form, Input} from "antd";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import {useSelector} from "react-redux";

const CommentForm= ({post}) => {
  const id = useSelector((state)=>state.user.me?.id);
  const [commentText, setCommentText]=useInput('');
  const onSubmitComment = useCallback(()=> {
    console.log(post.id, commentText)
  },[commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{position:"relative", margin: 0}}>
        <Input.TextArea value={commentText} onChange={setCommentText} rows={4}/>
        <Button type="primary" htmlType="submit"
                style={{position:"absolute", right:"0", bottom :"-40px"}}>삐약</Button>
      </Form.Item>
    </Form>
  )
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
}

export default CommentForm;
