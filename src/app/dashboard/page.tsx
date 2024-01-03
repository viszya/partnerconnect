import { getServerAuthSession } from "@/server/auth";
import { Icons } from "@/app/_components/icons"
import { redirect } from "next/navigation"

export default async function Dashboard() {
	const session = await getServerAuthSession()
    if (!session) {
        redirect("/unauthorized")
    }
	return (
		<main>
			<div className="justify-center items-center my-10 mr-8">
				
			</div>
		</main>
	);
}