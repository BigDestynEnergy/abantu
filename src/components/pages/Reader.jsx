export default function ReaderPage({ library }){

    if(library.length === 0){
        return(
            <div className="reader-page">
                <h1>You are not currently reading anything</h1>
            </div>
        )
    }

    return(
        <div className="reader-page">
            {library.map(comic => (
                <div key={comic.id} className="reader-card">
                    {comic.logo}
                    <h3>{comic.label}</h3>
                    <span>{comic.genre}</span>
                </div>
            ))}
        </div>
    )
}