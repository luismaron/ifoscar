import Head from "next/head";
import { config } from "process";
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

type VideoClip = {
  id: string
  name: string
  link: string
  actor: {
    name: string
  }
  actress: {
    name: string
  }
  supporting_actor: {
    name: string
  }
  supporting_actress: {
    name: string
  }
}

export default function VideoClips() {
  const [videoClips, setVideoClips] = useState<VideoClip[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;
  const [totalResults, setTotalResults] = useState(0);

  async function loadData() {
    const responseStudents = await api.get("/videoclips/paginated", {
      params: {
        pageSize,
        pageNumber: currentPage
      }
    });
    setVideoClips(responseStudents.data.videoClips);
    setTotalResults(responseStudents.data.videoClipCount);
  }

  function changeCurrentPage(page: number): void {
    setCurrentPage(page)
  }

  useEffect(() => {
    loadData();
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>Dashboard IFOscar | Listagem de videoclipes</title>
      </Head>

      <div className="h-screen bg-gray-950 overflow-auto">
        <Header />

        <div className="flex w-full">
          <ToastContainer
            theme="colored"
            toastClassName="errorAlert"
            autoClose={2000}
            pauseOnHover={false}
          />
          <Sidebar />

          <div className="mt-10 ml-10 flex flex-col">
            <h1 className="text-gray-150 text-4xl font-medium">Listagem de estudantes</h1>

            <table className="max-w-5xl w-full mt-9 pb-4 border-separate border-spacing-y-2 overflow-x-auto block whitespace-nowrap scrollbar scrollbar-thumb-gray-450 scrollbar-track-gray-850">
              <thead>
                <tr>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Nome</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Link</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Melhor Ator</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Melhor Atriz</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Ator Coadjuvante</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Atriz Coadjuvante</th>
                </tr>
              </thead>

              <tbody>
                {
                  videoClips.map(videoClip => (
                    <tr className="relative" key={videoClip.id}>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {videoClip.name}
                      </td>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {videoClip.link}
                      </td>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {videoClip.actor.name}
                      </td>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {videoClip.actress.name}
                      </td>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {videoClip.supporting_actor.name}
                      </td>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {videoClip.supporting_actress.name}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <Pagination currentPage={currentPage + 1} pageSize={pageSize} totalResults={totalResults} changeCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </>
  )
}