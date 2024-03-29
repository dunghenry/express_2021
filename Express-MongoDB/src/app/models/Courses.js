const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String, maxLength: 255 },
  description: {type: String, maxLength: 255},
  image:{type: String, maxLength: 255},
  videoId: {type: String, maxLength: 255},
  slug: { type: String, slug: "name", unique: true},
  // createAt: {type: Date, default: Date.now},
  // updateAt: {type: Date, default: Date.now},
},{
  timestamps: true,
});
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt : true });
module.exports = mongoose.model('Course', Course);