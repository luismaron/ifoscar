import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { WinnerCard } from "../../components/WinnerCard";
import { api } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";

enum Categories {
	bestActors = 'Melhor Ator',
	bestActress = 'Melhor Atriz',
	bestCostumes = 'Melhor ator coadjuvante',
	bestEditions = 'Melhor atriz coadjuvante',
	bestSupportingActors = 'Melhor video',
	bestSupportingActress = 'Melhor fantasia',
	bestVideoClips = 'Melhor edição'
}

type WinnerData = {
	name: string
	r: number
	category: Categories
	count: number
}
type Winner = {
	bestActors: WinnerData[]
	bestActress: WinnerData[]
	bestCostumes: WinnerData[]
	bestEditions: WinnerData[]
	bestSupportingActors: WinnerData[]
	bestSupportingActress: WinnerData[]
	bestVideoClips: WinnerData[]
}

export default function Winners() {
	const [selectedCategory, setSelectedCategory] = useState<string>('bestActors');
	const [winners, setWinners] = useState<Winner>()


	useEffect(() => {
		async function loadData() {
			const responseStudents = await api.get("/vote/top3", {
			});
			const winner: Winner = responseStudents.data;

			setWinners(winner)
			console.log(winners)
		}

		loadData();
	}, []);
	return (<>
		<Head>
			<title>Dashboard IFOscar | Vencedores</title>
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
				<div className="mt-10 ml-10 flex flex-col w-4/5 mr-10">
					<div className="flex justify-between">
						<h1 className="text-gray-150 text-4xl font-medium">Vendedores</h1>

						<select
							name="category"
							className={`flex items-center px-5 py-4 text-gray-350 text-xl outline-none bg-gray-850 rounded-md border-2 border-transparent focus-within:border-blue-450`}
							onChange={(e) => { console.log(e.target.value); setSelectedCategory(e.target.value) }}
						>
							{
								(Object.keys(Categories) as Array<keyof typeof Categories>).
									map(key => (
										<option value={key} key={key} className="bg-gray-850">
											{Categories[key]}
										</option>
									))
							}
						</select>
					</div>

					<div className="flex gap-5 mt-10">
						{
							winners && winners[selectedCategory as keyof typeof winners]
								.map((winner) =>
									<WinnerCard name={winner.name}
										votes={winner.count}
										position={winner.r}
										key={winner.name} />
								)
						}
					</div>
				</div>
			</div>
		</div>
	</>);
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
	return {
		props: {}
	}
})