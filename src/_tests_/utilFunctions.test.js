import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './_data_/testData'

test('shortenText will not alter a string under 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29)
});

test('shortenText will shorten text over 100 characters and add ...', () => {
  const shortened = shortenText(longText)
  expect(shortened).not.toHaveLength(longText.length)
  expect(shortened.slice(-3)).toBe('...')
});

test('wordCount will count number of words in a sentence', () => {
  expect(wordCount(posts)).toBe(233)
});

test('attach name should corecctly attach full name to post', () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty('displayName');
});

test('attach Name should remove any posts without a matching user', () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
});