import "../styles/information.css"
function Information () {
    return(
        <div class="information">
            <div class="logo">
                <img src = "/logo-udana.png" alt=""></img>
                <label>PT. Dana Rintis Indonesia</label>
            </div>
            <div class="part1">
                <p>
                    Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10130
                </p>
                <p>
                    E:
                    <b>support@udana.id</b>
                </p>
                <p>
                    W: 
                    <b>087709999430</b>
                </p>
            </div>
            <div class="info">
                <div class="part2">
                    <b>Perusahaan</b>
                    <div class="row-menu">
                        <a href="">Tentang</a>
                        <a href="">Hubungi Kami</a>
                        <a href="">Syarat & Ketentuan</a>
                        <a href="">Kebijakan Privasi</a>
                    </div>
                </div>
                <div class="part3">
                    <b>Investor</b>
                    <div class="row-menu">
                        <a href="">FAQ</a>
                        <a href="">Resiko Investasi</a>
                    </div>
                </div>
            </div>
           
            <div class="part4">
                <div class="socialMedia">
                    <b>Social Media</b>
                    <div class="media-images">
                        <a href="">
                            <img src="/Icon-ig.png" alt=""></img>
                        </a>
                        <a href="">
                            <img src="/Icon-linkedin.png" alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
            <div class="part5">
                <div class="supported">
                    <b>Didukung oleh</b>
                </div>
                <div class="logo-supported">
                    <a href="">
                        <img src="/logo-kominfo.png" alt=""></img>
                    </a>
                    <a href="">
                        <img src="/logo-pse.png" alt=""></img>
                    </a>
                    <a href="">
                        <img src="/logo-aludi.png" alt=""></img>
                    </a>
                </div>
                <a href="">
                    <img src="/logo-kan.png" alt=""></img>
                </a>
            </div>    
        </div>
    )
}

export default Information;