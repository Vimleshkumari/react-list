import React from 'react'

const GoogleWindow = () => {
    return (
        <div className='container'>
            <div className='flex justify-center items-center'>
                <div className=' border-2 border-solid border-yellow-500'>
                    {/* <iframe id="if1" width="100%" height="254" style={{ visibility:"visible"}} src="https://www.youtube.com/embed/aL27fX5kv9U"></iframe> */}
                    <iframe src='http://www.google.co.in/search/embed' id="if1" width="100%" sandbox="allow-scripts allow-same-origin" height="254" style={{ visibility: "visible" }} />

                    <iframe src='http://www.google.com/maps/embed' id="if1" width="100%" sandbox="allow-scripts allow-same-origin" height="254" style={{ visibility: "visible" }} />
                </div>
            </div>
        </div>
    )
}

export default GoogleWindow