# Архитектура

Преподаватель устанавливает только Windows-приложение. Оно обращается к общему API по HTTPS. API работает с PostgreSQL.

```text
Windows app (Electron) ──HTTPS──> API ──> PostgreSQL
Android ScheduleApp ─────HTTPS──> API
```

Отдельный сервер пока не предоставлен. Код проекта готовится так, чтобы сервер можно было развернуть отдельно позже.
