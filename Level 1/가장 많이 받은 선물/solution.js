function solution(friends, gifts) {
  const friendMap = {};
  const nextMonthReceiveMap = {};

  friends.forEach((friend) => {
    friendMap[friend] = { send: [], receive: [] };
    nextMonthReceiveMap[friend] = 0;
  });

  gifts.forEach((gift) => {
    const [sender, receiver] = gift.split(" ");
    friendMap[sender].send.push(receiver);
    friendMap[receiver].receive.push(sender);
  });

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const A = friends[i];
      const B = friends[j];

      const AToBGift = friendMap[A].send.filter(
        (friend) => friend === B
      ).length;
      const BToAGift = friendMap[B].send.filter(
        (friend) => friend === A
      ).length;

      if (AToBGift === BToAGift) {
        const AGiftScore =
          friendMap[A].send.length - friendMap[A].receive.length;
        const BGiftScore =
          friendMap[B].send.length - friendMap[B].receive.length;
        if (AGiftScore > BGiftScore) {
          nextMonthReceiveMap[A] += 1;
        }
        if (BGiftScore > AGiftScore) {
          nextMonthReceiveMap[B] += 1;
        }
      } else {
        if (AToBGift > BToAGift) {
          nextMonthReceiveMap[A] += 1;
        }
        if (BToAGift > AToBGift) {
          nextMonthReceiveMap[B] += 1;
        }
      }
    }
  }

  return Math.max(...Object.values(nextMonthReceiveMap));
}
