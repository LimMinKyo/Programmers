## 다른 풀이

```sql
-- 정규식
SELECT car_id, car_type, daily_fee, options
FROM car_rental_company_car
WHERE options REGEXP '네비게이션'
ORDER BY car_id DESC;

-- INSTR
SELECT car_id, car_type, daily_fee, options
FROM car_rental_company_car
WHERE instr(options, '네비게이션') > 0
ORDER BY car_id DESC;

-- LIKE
SELECT car_id, car_type, daily_fee, options
FROM car_rental_company_car
WHERE options LIKE '%네비게이션%'
ORDER BY car_id DESC;
```

## 출처

- https://school.programmers.co.kr/questions/52776
