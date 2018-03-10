
// will attempt to load posts when app loads
export function postsLoad() {
  return (dispatch) => {
    // request triggers Loading of the posts
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      }).then((response) => {
        // if response is successful, load the posts to the app
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

// sort on user id column
function sortUserId(self, other) {
  const idA = self.userId;
  const idB = other.userId;

  let compare = 0;
  if (idA > idB) {
    compare = 1;
  } else if (idA < idB) {
    compare = -1;
  }

  return compare;
}

// sort on id column
function sortId(self, other) {
  const idA = self.id;
  const idB = other.id;

  let compare = 0;
  if (idA > idB) {
    compare = 1;
  } else if (idA < idB) {
    compare = -1;
  }

  return compare;
}

// sort on title column
function sortTitle(self, other) {
  const titleA = self.title.toUpperCase();
  const titleB = other.title.toUpperCase();

  let compare = 0;
  if (titleA > titleB) {
    compare = 1;
  } else if (titleA < titleB) {
    compare = -1;
  }
  return compare;
}

// sort on body column
function sortBody(self, other) {
  const bodyA = self.body.toUpperCase();
  const bodyB = other.body.toUpperCase();

  let compare = 0;
  if (bodyA > bodyB) {
    compare = 1;
  } else if (bodyA < bodyB) {
    compare = -1;
  }
  return compare;
}

/* action to sort posts
will call corresponding sort function based on type */
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
