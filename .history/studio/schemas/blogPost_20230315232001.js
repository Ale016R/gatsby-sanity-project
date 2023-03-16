// in blogPost.js
export default {
    name: 'blogPost',
    title: 'Blog post',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'sponsor',
        title: 'Sponsor',
        type: 'sponsor'
      }
    ]
  }
  
  // in sponsor.js
  export default {
    name: 'sponsor',
    title: 'Sponsor',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url'
      }
    ]
  }