SELECT DISTINCT
  CAR_ID
FROM
  CAR_RENTAL_COMPANY_RENTAL_HISTORY
  JOIN CAR_RENTAL_COMPANY_CAR USING (CAR_ID)
WHERE
  CAR_TYPE = '세단'
  AND MONTH (START_DATE) = 10
ORDER BY
  CAR_ID DESC