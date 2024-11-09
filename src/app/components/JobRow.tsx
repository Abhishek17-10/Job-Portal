export default function JobRow(){
    return (
        <>
        <div className="bg-white p-4 rounded-md shadow-sm flex gap-4">
            <div className="content-center">
                <img className="size-12" src="https://www.freeiconspng.com/thumbs/spotify-icon/spotify-icon-design-8.png" alt="" />
            </div>
            <div className="grow">
                <div className="text-gray-500 text-sm">Spotify</div>
                <div className="font-bold text-lg mb-1">Product Designer</div>
                <div className="text-gray-600 text-sm">Remote &middot; Mumbai, India &middot;  Full time</div>
            </div>
            <div className="content-end text-gray-600 text-sm">
                2 weeks ago
            </div>
        </div> 
        </>
    )
}