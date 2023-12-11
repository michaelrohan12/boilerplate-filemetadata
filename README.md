# File Metadata Microservice

This is the boilerplate code for the File Metadata Microservice project.

- We can submit a form that includes a file upload.
- The form file input field has the name attribute set to upfile, which will be used by the multer package for processing.
- When we submit a file, we will receive the file name, type, and size in bytes within the JSON response.

## API Reference

#### POST request to /api/fileanalyse to receive the file name, type, and size in bytes within the JSON response.

```http
  POST /api/fileanalyse
```

| Parameter  | Type   | Description                                                             |
| :--------- | :----- | :---------------------------------------------------------------------- |
| `req.file` | `File` | Return the file name, type, and size in bytes within the JSON response. |
