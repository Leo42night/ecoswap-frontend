# EcoSwap Front End
Halaman front end untuk lomba Feb 6, backend akan dikerjakan di repo lain.

### Cara Aman Merging repo di local dan remote
1. Periksa Status Lokal `git status`
2. Lakukan Pull Terlebih Dahulu `git pull origin <branch>`
3. Stash Jika Ada Perubahan Lokal `git stash`. setelah pull, perubahan dapat dikembalikan `git pop`
4. Lakukan Merge Manual Jika Diperlukan, buat branch untuk backup sebelum pull di `main`, `git branch <backup-branch>`
5. Tangani konflik merge:
   - Buka file conflict dan cari tanda konflik seperti ini:
```
 <<<<<<< HEAD
(versi lokal)
=======
(versi remote)
 >>>>>>> (commit ID)

```

   - Perbaiki konflik sesuai kebutuhan, lalu tandai konflik sudah selesai dengan `git add <file-yang-diperbaiki>`
   - Lanjutkan proses merge dengan: `git commit`
