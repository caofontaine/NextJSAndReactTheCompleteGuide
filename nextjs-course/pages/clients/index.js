import Link from 'next/link';

function ClientPage () {
    const clients = [
        {
            id: 'max',
            name: 'Maximillian'
        },
        {
            id: 'manu',
            name: 'Manuel'
        }
    ]
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        {/* Alternative way to write dynamic routes passing object. */}
                        <Link href={{
                            pathname: '/clients/[id]',
                            query: {
                                id: client.id
                            }
                        }}>{client.name}</Link>

                        {/* <Link href={`/clients/{client.id}`}>{client.name}</Link> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClientPage;