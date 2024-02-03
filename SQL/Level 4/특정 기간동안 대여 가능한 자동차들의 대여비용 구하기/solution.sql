SELECT
  CAR_ID,
  CAR_TYPE,
  ROUND(30 * DAILY_FEE * (1 - DISCOUNT_RATE / 100)) AS FEE
FROM
  CAR_RENTAL_COMPANY_CAR AS CAR
  JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN AS PLAN USING (CAR_TYPE)
WHERE
  CAR_TYPE IN ('세단', 'SUV')
  AND CAR_ID NOT IN (
    SELECT
      CAR_ID
    FROM
      CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE
      START_DATE <= '2022-11-30'
      AND END_DATE >= '2022-11-01'
  )
  AND DURATION_TYPE = '30일 이상'
HAVING
  FEE >= 500000
  AND FEE < 2000000
ORDER BY
  FEE DESC,
  CAR_TYPE,
  CAR_ID DESC