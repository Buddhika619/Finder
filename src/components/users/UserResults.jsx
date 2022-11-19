import {  useContext } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItems'
import GithubContext from '../../context/github/GIthubContext'

const UserResults = () => {
  const {users,loading} = useContext(GithubContext)


  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3'>
        {users.map((user, index) => (
          <UserItem  key={index} user={user}/>
        ))}
      </div>
    )
  } else {
    return <Spinner/>
  }
}

export default UserResults
