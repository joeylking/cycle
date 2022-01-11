import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CommentForm from '../CommentForm/CommentForm';

const GiftDetail = ({ gift, user, editInterested }) => {
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(0);
  const [parentID, setParentID] = useState(null);

  useEffect(() => {
    getComments(gift.id);
    console.log('giftdetail useeffect');
  }, []);

  const getComments = async gift_id => {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${gift_id}/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setComments(response.data);
  };

  const interestedClick = gift => {
    if (gift.interested_users.includes(user.id)) {
      let arr = gift.interested_users.filter(iUser => iUser !== user.id);
      gift.interested_users = arr;
      editInterested(gift);
    } else {
      gift.interested_users.push(user.id);
      editInterested(gift);
    }
  };

  const getReplies = parentID => {
    let replies = comments.filter(comment => comment.parent === parentID);
    return replies;
  };

  const addComment = text => {
    const token = localStorage.getItem('token');
    const comment = { author: user.id, gift: gift.id, content: text };
    console.log(comment);
    const response = axios.post(
      `http://127.0.0.1:8000/api/comments/${gift.id}/`,
      comment,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    getComments(gift.id);
    setShowCommentInput(false);
  };

  const addReply = text => {
    const token = localStorage.getItem('token');
    const comment = {
      author: user.id,
      gift: gift.id,
      content: text,
      parent: parentID,
    };
    console.log(comment);
    const response = axios.post(
      `http://127.0.0.1:8000/api/comments/${gift.id}/`,
      comment,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setShowReplyInput(0);
    setParentID(null);
    getComments(gift.id);
  };

  const handleReplyClick = id => {
    setShowReplyInput(id);
    setParentID(id);
  };

  const parentComments = comments.filter(comment => comment.parent === null);
  return (
    <Container>
      {console.log(gift)}
      {console.log(comments)}
      <Row className='mt-3'>
        <Col>
          <img src={`http://127.0.0.1:8000${gift.image}`} />
        </Col>
        <Col>
          <h1>{gift.name}</h1>
          <p>
            Offered by:{' '}
            <img
              src={`http://127.0.0.1:8000${gift.giver.profile_pic}`}
              width='25'
              height='25'
              className='d-inline-block rounded-circle'
              alt={gift.giver.first_name}
            />{' '}
            {gift.giver.username}
          </p>
          <p>Condition: {gift.condition}</p>
          <p>Description: {gift.description}</p>
          {gift.interested_users.includes(user.id) ? (
            <Button
              variant='outline-primary'
              onClick={() => interestedClick(gift)}
            >
              Not Interested
            </Button>
          ) : (
            <Button variant='primary' onClick={() => interestedClick(gift)}>
              Interested
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <h2>Comments:</h2>
          {!showCommentInput && (
            <Button size='sm' onClick={() => setShowCommentInput(true)}>
              Add a Comment
            </Button>
          )}
          {showCommentInput && (
            <>
              <CommentForm submit={addComment} submitLabel={'Add Comment'} />
              <Button
                className='mt-2'
                onClick={() => setShowCommentInput(false)}
              >
                Cancel
              </Button>
            </>
          )}
          {parentComments.map(comment => {
            let replies = getReplies(comment.id);
            return (
              <div className='mt-2'>
                {console.log(comment.content)}

                <h3>
                  <img
                    src={`http://127.0.0.1:8000${comment.author.profile_pic}`}
                    width='30'
                    height='30'
                    className='d-inline-block rounded-circle'
                    alt={comment.author.first_name}
                  />{' '}
                  {comment.author.username}
                  {comment.author.id === gift.giver.id ? '(Giver)' : ''}
                </h3>
                <p>{comment.content}</p>
                {comment.author.id === user.id && (
                  <Button size='sm' className='me-2' variant='danger'>
                    Delete
                  </Button>
                )}
                {showReplyInput !== comment.id && (
                  <Button
                    size='sm'
                    onClick={() => handleReplyClick(comment.id)}
                  >
                    Reply
                  </Button>
                )}
                {showReplyInput === comment.id && (
                  <>
                    <CommentForm submit={addReply} submitLabel={'Reply'} />
                    <Button
                      className='mt-2'
                      onClick={() => setShowReplyInput(false)}
                    >
                      Cancel
                    </Button>
                  </>
                )}
                {replies.map(reply => {
                  return (
                    <div className='ms-5 mt-2'>
                      <h3>
                        <img
                          src={`http://127.0.0.1:8000${reply.author.profile_pic}`}
                          width='30'
                          height='30'
                          className='d-inline-block rounded-circle'
                          alt={reply.author.first_name}
                        />{' '}
                        {reply.author.username}
                        {reply.author.id === gift.giver.id ? '(Giver)' : ''}
                      </h3>
                      <p>{reply.content}</p>
                      {reply.author.id === user.id && (
                        <Button size='sm' variant='danger'>
                          Delete
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default GiftDetail;
