// src/pages/UserDetailPage.tsx

import { useParams } from 'react-router-dom'

function UserDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>Showing details for user ID: {id}</p>
    </div>
  )
}

export default UserDetailPage