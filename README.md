# Angular + PO UI Frontend + Spring Boot API

This repository contains:

- Angular frontend using **PO UI** components.
- A Spring Boot backend (`spring-api`) that replaces the old PHP hello endpoint.

## Frontend (Angular)

```bash
npm install
npm start
```

## Backend (Spring Boot)

```bash
cd spring-api
mvn spring-boot:run
```

The API endpoint is available at:

- `GET http://localhost:8080/api/hello`

Response:

```json
{
  "message": "HELLO WORLD"
}
```
