function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

// example usage

const pets = [
  {type: "Dog", name: "Spot"},
  {type: "null", name: "Tiger"},
  {type: "Dog", name: "Rover"},
  {type: "Cat", name: "Leo"}
];

let comments = [{
    refId: null,
    subComments: [],
    _id: "5d118e9a61019f8e4489d64f",
    createTime: "2019-06-25T03:01:46.231Z",
    author: 'asa.x',
    email: 'sss@343.com',
    context: 'test-comment',
    blogId: '5d0b3291ff7c1b50ec3b77ab',
    __v: 0,
    modifiedTime: "2019-07-06T06:30:55.395Z"
  },
    {
      refId: null,
      subComments: [],
      _id: "5d19a495ead1ad045cabf0f4",
      createTime: "2019-07-01T06:13:41.557Z",
      modifiedTime: "2019-07-01T06:13:41.557Z",
      author: 'asa.x',
      email: 'sss@3r343.com',
      context: 'test1',
      blogId: '5d0b3291ff7c1b50ec3b77ab',
      __v: 0
    },
    {
      refId: null,
      subComments: [],
      _id: "5d19d08d41ddef2d84a100ed",
      createTime: "2019-07-01T09:21:17.992Z",
      modifiedTime: "2019-07-01T09:21:17.992Z",
      author: 'asa.x',
      email: null,
      context: null,
      blogId: '5d0b3291ff7c1b50ec3b77ab',
      __v: 0
    },
    {
      refId: '5d118e9a61019f8e4489d64f',
      subComments: [],
      _id: "5d201cb22dcbb43a385a7749",
      createTime: "2019-07-06T03:59:46.396Z",
      modifiedTime: "2019-07-06T03:59:46.396Z",
      email: 'ref comment@asa.com',
      context: 'sub comments -> test-comment',
      author: 'asa.x',
      blogId: '5d0b3291ff7c1b50ec3b77ab',
      __v: 0
    }]
;

function divideComment(comments) {
  if (comments.length === 0) return;
  let refIds2CommentsMap = groupBy(comments, (ele) => ele.refId);
  let firstLayerComments = refIds2CommentsMap.get(null);
  debugger;
  for (let refId of refIds2CommentsMap.keys()) {
    if (!refId || refId === "null") continue;
    let refIdComments = firstLayerComments.filter(item => {
      return refId === item._id;
    });
    let parentComment = refIdComments[0];
    parentComment.subComments = refIds2CommentsMap.get(refId) || [];
  }
  firstLayerComments.forEach(parent => {
    if (parent.subComments.length !== 0) {
      parent.subComments.forEach(sub => {
        console.log("sub: %o", sub);
      })
    }
  });
  return firstLayerComments;
}

divideComment(comments);
