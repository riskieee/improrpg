// main Content class for improRPG

class Content {
  constructor(text, addedBy) {
    this._storyNode = text
    this._author = addedBy
  }
  get author() {
    return this._author;
  }

  set author(newValue) {
    throw new Error(
      `author is only a getter. You can't override it with ${newValue}.`
    );
  }
}

module.exports = Content;
