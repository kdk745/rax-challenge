export function postsLoad() {
  return (dispatch) => {
    // request triggers Loading of the posts
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      }).then((response) => {
        dispatch(postsLoadSuccess(response));
      }).catch(() => {
        dispatch(postsLoadError('could not load posts'))
      })
  };
}

export function postsLoadSuccess(items) {
  return {
    type: "POSTS_LOAD_SUCCESS",
    items
  };
}

export function postsLoadError(err) {
  return {
    type: "POSTS_LOAD_ERROR",
    err
  };
}

function sortUserId(first, other) {
  const idA = first.userId;
  const idB = other.userId;

  let compare = 0;
  if (idA > idB) {
    compare = 1;
  } else if (idA < idB) {
    compare = -1;
  }

  return compare;
}

function sortId(first, other) {
  const idA = first.id;
  const idB = other.id;

  let compare = 0;
  if (idA > idB) {
    compare = 1;
  } else if (idA < idB) {
    compare = -1;
  }

  return compare;
}

function sortTitle(first, other) {
  const titleA = first.title.toUpperCase();
  const titleB = other.title.toUpperCase();

  let compare = 0;
  if (titleA > titleB) {
    compare = 1;
  } else if (titleA < titleB) {
    compare = -1;
  }
  return compare;
}

function sortBody(first, other) {
  const bodyA = first.body.toUpperCase();
  const bodyB = other.body.toUpperCase();

  let compare = 0;
  if (bodyA > bodyB) {
    compare = 1;
  } else if (bodyA < bodyB) {
    compare = -1;
  }
  return compare;
}

export function sortPosts(data, type) {
  switch(type) {
    case "User ID":
        return(postsLoadSuccess(data.sort(sortUserId)))
    case "ID":
        return(postsLoadSuccess(data.sort(sortId)))
    case "Title":
        return(postsLoadSuccess(data.sort(sortTitle)))
    case "Body":
        return(postsLoadSuccess(data.sort(sortBody)))
  }
}
