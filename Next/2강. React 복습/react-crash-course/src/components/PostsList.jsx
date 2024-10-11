import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  useState();

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
