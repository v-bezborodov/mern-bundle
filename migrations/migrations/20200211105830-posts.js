const Post = require('../../models/post-model')

module.exports = {
  async up(db, client) {
    const post = [
        {user_id: '1',
          title: 'The Beatles',
          body: 'The Beatles',
          category: 'The Beatles',
          }
        ];
    await db.collection('posts').insertMany(post);

  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('post').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    // await db.collection('user').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
