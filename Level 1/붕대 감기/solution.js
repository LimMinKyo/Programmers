function solution(bandage, health, attacks) {
  const maxHealth = health;
  const [bandageTotalTime, recoveryBySecond, additionalRecovery] = bandage;
  const attackMap = new Map();

  attacks.forEach(([time, damage]) => {
    attackMap.set(time, damage);
  });

  let bandageTime = 0;

  for (let second = 1; second <= attacks.at(-1)[0]; second++) {
    if (attackMap.get(second)) {
      health -= attackMap.get(second);
      bandageTime = 0;

      if (health <= 0) return -1;
    } else {
      bandageTime++;
      health += recoveryBySecond;

      if (bandageTotalTime === bandageTime) {
        health += additionalRecovery;
        bandageTime = 0;
      }

      if (health > maxHealth) {
        health = maxHealth;
      }
    }
  }

  return health;
}
