import React from 'react';
// import useComments from '../../hooks/use-comments';
// import { textParser } from '../../shared/utils/utils';
// import Loader from '../loader/loader';
// import Error from '../error/error';
import '../../scss/components/comments.sass';


const Comments = () => {
/*   const {
    tree,
    loading,
    isCommentsFailed,
    commentsCount,
    handleRefreshComments
  } = useComments(); */

/*   const renderComments = (nodes) => {
    if (!nodes) return null;

    return (
      <div>
        {nodes.map((node) => {
          const parsedText = textParser(node.text);
          return (
            <div
              key={node.id}>
              <p className={classes.commentBy}>{node.by}</p>
              <p className={classes.comment}>{parsedText}</p>
            </div>
          );
        })}
      </div>
    );
  }; */

  return (
    <div className="comments">
      <div className="comments__header">
        197 comments
      </div>
      <div className="comments__body">
        <div className="comment">
          <div className="comment-head">
            <span className="comment-author">By Ilya</span>
            <span className="comment-time">15 hours ago</span>
          </div>
          <div className="comment-text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum modi facere unde, saepe reiciendis 
                in exercitationem laudantium! Modi, nulla asperiores. Aperiam laborum perferendis assumenda rem
                recusandae non eveniet laudantium doloremque.
            </p>
            <div className="nested-comment">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



/* return (
  <div>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Grid container className={classes.boxWrapper}>
          <div item xs={10}>
            <Typography variant="h5"> Comments {commentsCount} </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={handleRefreshComments}
            >
              Refresh
            </Button>
          </Grid>
        </Grid>
        {isCommentsFailed ? (
          <Error />
        ) : (
          <Grid container className={classes.boxWrapper}>
            <Grid item xs={12}>
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                defaultExpanded={['root']}
                className={classes.root}
                multiSelect
              >
                {renderComments(tree)}
              </TreeView>
            </Grid>
          </Grid>
        )}
      </>
    )}
  </div>
);
};
 */
export default Comments;
