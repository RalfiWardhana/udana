import "../styles/jumbotron.css"
function Jumbotron(){
    return(
        <div className='back-jumbotron'>   
          <div className="container-fluid bg-dark text-light pt-5 jumbo">
            <div className="pt-5">
              <div className='info-jumbotron'> 
                <div className='info-text-jumbotron'> 
                  <p className='header-info-jumbotron'>Jadilah Investor UMKM & Waralaba</p>
                  <p className='fill-info-jumbotron'>Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi investor
                      untuk kemajuan perekonomian bangsa tanpa perlu pusing dengan operasional sehari-hari</p>
                  <div className='button-info-jumbotron'>Investasi Sekarang <img src="/nbsp.png" style={{marginLeft:"10px",marginTop:"3px"}} width="28px" height="17px"></img> </div>  
                </div>
                <div className='info-empty-jumbotron'> </div>
              </div>
            </div>
            <img src='/circle-contact.png' className='circle-contact'></img>
          </div>    
        </div>
    )
}
export default Jumbotron;