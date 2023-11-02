function solution(phone_book) {
  phone_book.sort();

  const isPrefix = phone_book.some(
    (phone, index) => phone_book[index + 1]?.indexOf(phone) === 0
  );

  return !isPrefix;
}
