# Phonebook backend deployed on Render

This is the backend for the Phonebook app from Full Stack Open.

✅ Deployed at:  
[https://phonebook-api-z2ox.onrender.com](https://phonebook-api-z2ox.onrender.com)

---

## Example endpoints:

- GET all:  
  `GET /api/persons`  
  [https://phonebook-api-z2ox.onrender.com/api/persons](https://phonebook-api-z2ox.onrender.com/api/persons)

- Add new:  
  `POST /api/persons` with JSON body:  
  ```json
  {
    "name": "Ada Lovelace",
    "number": "12345"
  }
Info page:
https://phonebook-api-z2ox.onrender.com/info

Technologies used:
Node.js + Express

MongoDB Atlas

Render deployment
---

### 📦 Git команды:

```powershell
git add README.md
git commit -m "Complete 3.20: prepare backend for deployment to Render"
git push