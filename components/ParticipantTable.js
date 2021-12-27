import { useEffect, useState } from 'react'
import { fetchParticipants } from 'lib/fetch-participants'

export default function ParticipantTable() {
	const [participants, setParticipants] = useState([])

	useEffect(() => {
		fetchParticipants().then(setParticipants).catch(console.error)
	}, [])

	return (
		<>
			{participants?.length > 0 && (
				<div className='pb-14 content'>
					<h2 className='text-3xl font-semibold mb-6'>Participants</h2>
					<table className='w-full border rounded-sm'>
						<thead>
							<tr className='border '>
								<th className='border py-2 px-4 sm:px-2 text-left'>Name</th>
								<th className='border py-2 px-4 sm:px-2 text-left'>Joined</th>
							</tr>
						</thead>
						<tbody>
							{participants?.map((p, index) => (
								<tr key={index} className='odd:bg-gray-100'>
									<td className='py-2 px-4 sm:px-2 border'>{p.name}</td>
									<td className='py-2 px-4 sm:px-2 border'>{p.joined}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	)
}
