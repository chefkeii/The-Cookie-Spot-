import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from "../../utils/mutations"
// import UPDATE_COMMENT
import { useState } from "react"

const CommentList = ({ comments = [] }) => {
  const [removeComment] = useMutation(REMOVE_COMMENT);

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  async function deleteHandler(commentId) {
    const thoughtId = window.location.href.split("/")[4].split("#")[0]

    console.log(thoughtId)
    console.log(commentId)

    await removeComment({
      variables: {
        thoughtId,
        commentId
      }
    })
  }


  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-black text-light">
                <div class="flex-row justify-space-between">
                  <h5 className="card-header">
                    {comment.commentAuthor} commented{' '}
                    <span style={{ fontSize: '0.825rem' }}>
                      on {comment.createdAt}
                    </span>

                  </h5>
                  <div>


                    <a href="#" onClick={() => {
                      deleteHandler(comment._id)
                    }}>
                      <span class="comment-icons material-symbols-outlined">
                        delete
                      </span>
                    </a>
                  </div>
                </div>
                <CommentBody comment={comment} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

function CommentBody({ comment }) {
  const [showEdit, setShowEdit] = useState(false);

  // create funtion mutation from UPDATE_COMMENT
  // const [updateComment] = useMutation(UPDATE_COMMENT)

  async function handleEditSubmit() {
    // await updateComment({variables})
  }

  function toggleEdit () {
    setShowEdit(!showEdit)
  }

  return (
    <>
      <div class="flex-row justify-space-between">
      <p className="card-body">{comment.commentText}</p>
      <a onClick={toggleEdit}>
        <span class="comment-icons material-symbols-outlined">
          edit
        </span>
      </a>
      </div>
      {
        showEdit ? (
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleEditSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={comment.commentText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
              // onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-black btn-block py-3" type="submit">
                Update Comment
              </button>
            </div>
          </form>
        ) : null
      }
    </>
  )
}


export default CommentList;
