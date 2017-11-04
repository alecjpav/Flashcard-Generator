// require fs
var fs = require("fs");

module.exports = clozeCard;

// constructor for clozeCard
function clozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '_____');

}