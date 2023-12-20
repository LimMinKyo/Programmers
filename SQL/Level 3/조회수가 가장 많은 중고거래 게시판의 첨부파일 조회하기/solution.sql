SELECT
  CONCAT (
    CONCAT_WS ('/', '/home/grep/src', BOARD_ID, FILE_ID),
    FILE_NAME,
    FILE_EXT
  ) AS FILE_PATH
FROM
  USED_GOODS_FILE
  JOIN USED_GOODS_BOARD USING (BOARD_ID)
WHERE
  VIEWS = (
    SELECT
      MAX(VIEWS)
    FROM
      USED_GOODS_BOARD
  )
ORDER BY
  FILE_ID DESC