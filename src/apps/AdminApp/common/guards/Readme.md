# Route

| desc           | route     | toName           | toPath    | fromName | fromPath | reName | rePath   |
| -------------- | --------- | ---------------- | --------- | -------- | -------- | ------ | -------- |
| 已存在 根路由  | /         | AdminApp         | /AdminApp | false    | /        | Root   | /        |
| 已存在 404     | /404      | NotFound         | /404      | false    | /        | false  | false    |
| 已存在         | /AdminApp | AdminApp         | /AdminApp | false    | /        | false  | false    |
| 已存在         | /Demo/t1  | AdminApp.Demo/T1 | /Demo/T1  | false    | /        | false  | false    |
| 不存在         | /123      | AdminApp         | /AdminApp | false    | /        | Other  | /123     |
| 不存在         | /Demo/t2  | AdminApp         | /AdminApp | false    | /        | Other  | /Demo/T2 |
| 不存在 -> next | /Demo/t2  | AdminApp.Demo/T2 | /Demo/T2  | false    | /        | Other  | /Demo/T2 |
