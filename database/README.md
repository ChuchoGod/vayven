# Scripts de migración de PHP a Node.js

Este directorio contiene scripts SQL para la base de datos.

## Archivos

- `schema.sql` - Esquema completo de la base de datos
- Puedes añadir aquí archivos de migraciones adicionales

## Uso

Para crear la base de datos y las tablas:

```bash
mysql -u tu_usuario -p < database/schema.sql
```

O desde MySQL:

```sql
source database/schema.sql;
```
