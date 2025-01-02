const Htujuan = new Date('Mar 1, 2025 00:00:00').getTime();

const Hitung = setInterval(function(){
    const now = new Date().getTime();
    const selisih = Htujuan - now;
    
    const hari = Math.floor(selisih / ( 1000 * 60 * 60 * 24));
    const jam  = Math.floor(selisih % ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % ( 1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    console.log(jam)
    
    const hallo = document.querySelector('.hitungMundur');
    hallo.innerHTML = + hari + ' Hari ' + jam + ' Jam ' + menit + ' Menit ' + detik + ' Detik ';

    if(selisih <= 0){
        clearInterval;
        hallo.innerHTML = 'Selamat Menjalankan Ibadah Puasa'
    }
}, 1000);