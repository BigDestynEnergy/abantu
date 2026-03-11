import comics from './comics'
export default function HomePage(){

    return(
        <div className="homepage">
            <div className="comic-cards">
                {comics.map((cc)=>{

                    return(
                        <div className="comic-card" 
                        key={cc.id}>
                            <div className="top">{cc.logo}</div>
                            <div className="bottom">
                                <span>{cc.label}</span>
                                <span>{cc.genre}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}