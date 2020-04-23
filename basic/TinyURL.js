/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

table = {}
number = 100

// base 62
const map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function IdToSortUrl(id) {
  let sortUrl = '';

  while (id) {
    sortUrl = map[id % 62] + sortUrl
    id = parseInt(id / 62)
  }

  return sortUrl
}

function SortUrlToId(sortUrl) {
  let id = 0

  // A simple base conversion logic
  for (let i=0; i < sortUrl.length; i++)
  {
      if ('a' <= sortUrl[i] && sortUrl[i] <= 'z')
        id = id*62 + map.indexOf(sortUrl[i]) - map.indexOf('a');
      if ('A' <= sortUrl[i] && sortUrl[i] <= 'Z')
        id = id*62 + map.indexOf(sortUrl[i]) - map.indexOf('A') + 26;
      if ('0' <= sortUrl[i] && sortUrl[i] <= '9')
        id = id*62 + map.indexOf(sortUrl[i]) - map.indexOf('0') + 52;
  }
  return id;
}

var encode = function(longUrl) {
  let sortUrl = IdToSortUrl(number)
  table[number] = {
    number,
    sortUrl,
    longUrl
  }
  number++
  return sortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const id = SortUrlToId(shortUrl)
  return table[id] && table[id].longUrl
};
