# File Sharing API

Bu proje, kullanıcıların dosya yükleyebildiği, Cloudinary üzerinde saklanan dosyaların bağlantılarını alıp e-posta ile paylaşabildiği bir full-stack uygulamadır.

---

## 🧠 Özellikler

### 📌 Backend
✔ Node.js + Express API  
✔ MongoDB + Mongoose  
✔ Multer ile file upload  
✔ Cloudinary entegrasyonu  
✔ Nodemailer ile e-posta gönderimi  
✔ Merkezi error handling    
✔ Katmanlı mimari

---

### 📌 Frontend

✔ Dosya seçme ve yükleme    
✔ Sunucudan upload ve mail isteği

---

## 🛠 Teknolojiler

| Bölüm | Teknoloji |
|-------|-----------|
| Backend | Node.js, Express |
| DB | MongoDB, Mongoose |
| File Storage | Cloudinary |
| Email | Nodemailer |
| Validation | Zod |
| Upload | Multer |
| Frontend | React |

---

## 🧩 Kurulum

### 1) Repo’yu klonla

```bash
git clone https://github.com/yamanNuman/file-sharing.git
cd file-sharing
```

---

### 2) Backend

```bash
cd backend
npm install
npm run start:dev
```
---

```bash
.env file

PORT=5000
MONGODB_URI=mongodb://localhost:27017/file-sharing
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your@mail.com
MAIL_PASS=yourpassword
API_ORIGIN=http://localhost:5173
```
----

### 3) Frontend

```bash
cd frontend
npm install
npm run dev
```
---

### 4) API Endpoint

POST /files/upload

| key      | type   | description      |
| -------- | ------ | ---------------- |
| file     | file   | Yüklenecek dosya |
| sender   | string | Gönderen email   |
| receiver | string | Alıcı email      |

POST /mail/send

| key      | type   | description      |
| -------- | ------ | ---------------- |
| fileId   | string | Mongodb _id      |

----
```bash
{
  "filename": "document.pdf",
  "secure_url": "https://res.cloudinary.com/...",
  "format": "pdf",
  "sizeInBytes": 102400,
  "sender": "alice@mail.com",
  "receiver": "bob@mail.com",
  "createdAt": "2026-02-25T
}
```