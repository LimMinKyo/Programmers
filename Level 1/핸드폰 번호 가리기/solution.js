function solution(phone_number) {
  let phoneNumberArray = phone_number.split('');

  for (let i = 0; i < phone_number.length - 4; i++) {
    phoneNumberArray[i] = '*';
  }

  return phoneNumberArray.join('');
}
