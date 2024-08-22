WITH
    USER_INFO_2021 AS (
        SELECT
            *
        FROM
            USER_INFO
        WHERE
            YEAR (JOINED) = 2021
    )
SELECT
    YEAR (SALES_DATE) AS YEAR,
    MONTH (SALES_DATE) AS MONTH,
    COUNT(DISTINCT USER_ID) AS PURCHASED_USERS,
    ROUND(
        COUNT(DISTINCT USER_ID) / (
            SELECT
                COUNT(*)
            FROM
                USER_INFO_2021
        ),
        1
    ) AS PUCHASED_RATIO
FROM
    ONLINE_SALE
    JOIN USER_INFO_2021 USING (USER_ID)
GROUP BY
    YEAR,
    MONTH
ORDER BY
    YEAR,
    MONTH