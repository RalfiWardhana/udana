import "../styles/cardsInvestor.css"

function CardsInvesrtor () {
    return(
        <main className="main-site">
        <div className="first-part">
            <div className="top">
                <div className="title">
                    <h1>
                        Menjadi Investor <br/> UMKM itu gampang
                    </h1>
                </div>
                <div className="description">
                    <div className="desc">Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana saja.</div>
                </div>
                <div className="blank"> </div>
            </div>
            <div className="card">
                <div className="full-card">
                    <div className="card-img">
                        <img src="/step01..png" alt=""></img>
                    </div>
                    <div className="card-content">
                        <h3>Pilih UMKM</h3>
                        <div className="con-paragraf">
                            <p>Temukan usaha yang anda minati pada galeri.</p>
                        </div>
                    </div>
                </div>
                <div className="full-card">
                    <div className="card-img">
                        <img src="/step02.png" alt=""></img>
                    </div>
                    <div className="card-content">
                        <h3>Analisa Bisnis</h3>
                        <div className="con-paragraf2">
                            <p>Lakukan analisa profil bisnis dan pengusaha.</p>
                        </div>
                    </div>
                </div>
                <div className="full-card">
                    <div className="card-img">
                        <img src="/step03.png" alt=""></img>
                    </div>
                    <div className="card-content">
                        <h3>Mulai Berinvestasi</h3>
                        <div className="con-paragraf3">
                            <p>Menjadi investor startup dengan modal minimal 100.000 Rupiah.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    )
}

export default CardsInvesrtor;