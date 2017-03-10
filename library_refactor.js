
function track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

function playlist(name) {
  this.name = name;
  this.tracks = [];
};
playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};
playlist.prototype.overallRating = function() {
  const totalRating = this.tracks.map(function(track) { return track.rating });
  return (totalRating.reduce(function(a, b) { return a + b}, 0) / this.tracks.length);
};
playlist.prototype.totalDuration = function() {
  const durations = this.tracks.map((track) => track.length);
  return durations.reduce((a, b) => a + b, 0);
};

function library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.tracks = [];
};
library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};
library.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

let t01 = new track('Code Monkey', 4, 120);
let t02 = new track('Model View Controller', 2, 180);
let t03 = new track('Four Thirty-Three', 5, 240);
let p01 = new playlist('Coding Music');
let p02 = new playlist('Other Playlist');
let l01 = new library('main','Ammar');

p01.addTrack(t01);
p01.addTrack(t02);
p02.addTrack(t03);

l01.addPlaylist(p01);
l01.addPlaylist(p02);
