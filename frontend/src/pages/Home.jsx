import { useEffect, useState } from "react"
import Card from "../components/Card";
import { API_URL } from "../config"

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await fetch(
                `${API_URL}/videos`
            );
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <>
        <header>
          <nav className="bg-slate-800 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Tokopedia Play Clone</span>
              </div>
          </nav>
        </header>
        <main>
          <div className="grid grid-cols-6 px-3 py-4 gap-4">
            {videos.map((video) => (
                <Card video={video} key={video._id}/>
            ))}
          </div>
        </main>
      </>
    )
}

export default Home;