UAS DATABASE ADMINISTRATOR = Buat API dengan ExpressJS

1. path yang harus ada
   a. user
   - GET "/user" : mengambil data semua user - GET "/user/:id" : mengambil data user dengan id - POST "/user" : create user - DELETE "/user/:id" : hapus user berdasarkan id user
     b. post - GET "/post" : mengambil data semua post - GET "/post/:id" : megambil data post dengan id - POST "/post" : create post - DELETE "/post/:id" : hapus post berdasarkan id post
2. struktur database
   a. user : id, nama, telepon
   b. post : id, judul, tulisan, user_id
3. pengumpulan
   buat repository github dengan nama uas_database.
