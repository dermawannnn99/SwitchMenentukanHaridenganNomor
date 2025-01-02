/**
 * buatlah pemrograman sederhana menggunakan switch utk menentukan hari berdasarkan nomor
 */

const nomorhari = 1 //input nomor disini

switch (nomorhari) {
    case 1: // 1 jika senin (dst)
        console.log ("hari ini ialah hari senin")
        break
    case 2:
        console.log ("hari ini ialah hari selasa")
        break
    case 3:
        console.log ("hari ini ialah hari rabu")
        break
    case 4:
        console.log ("hari ini ialah hari kamis")
        break
    case 5:
        console.log ("hari ini ialah hari jum'at")
        break
    case 6:
        console.log ("hari ini ialah hari sabtu")
        break
    case 7:
        console.log ("hari ini ialah hari minggu")
    default:
        console.log ("nomor hari tidak valid. masukan angka 1-7")
}